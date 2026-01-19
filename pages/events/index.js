// pages/events/index.js
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { getAllEvents, getEventsByCategory } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import CategoryFilter from "../../components/events/category-filter";
import StatsBar from "../../components/events/stats-bar";

function AllEventsPage() {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);
    const [searchActive, setSearchActive] = useState(false);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const allEvents = getAllEvents();
            setEvents(allEvents);
            setFilteredEvents(allEvents);
            setLoading(false);
        }, 800);
    }, []);

    function findEventsHandler(filters) {
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            let filtered = [...events];

            // Filter by year and month
            if (filters.year && filters.month) {
                const eventDate = new Date(
                    parseInt(filters.year),
                    parseInt(filters.month) - 1,
                );
                filtered = filtered.filter((event) => {
                    const eventDateObj = new Date(event.date);
                    return (
                        eventDateObj.getFullYear() ===
                            eventDate.getFullYear() &&
                        eventDateObj.getMonth() === eventDate.getMonth()
                    );
                });
            }

            // Filter by category
            if (filters.category) {
                filtered = filtered.filter(
                    (event) => event.category === filters.category,
                );
            }

            // Filter by price range (simplified)
            if (filters.priceRange && filters.priceRange !== "all") {
                filtered = filtered.filter((event) => {
                    switch (filters.priceRange) {
                        case "free":
                            return event.price === 0;
                        case "under50":
                            return event.price < 50;
                        case "50-100":
                            return event.price >= 50 && event.price <= 100;
                        case "100-200":
                            return event.price > 100 && event.price <= 200;
                        case "200+":
                            return event.price > 200;
                        default:
                            return true;
                    }
                });
            }

            setFilteredEvents(filtered);
            setLoading(false);
            setSearchActive(false);
        }, 600);
    }

    function handleCategorySelect(category) {
        setSelectedCategory(category);
        setLoading(true);

        setTimeout(() => {
            if (category === "all") {
                setFilteredEvents(events);
            } else {
                const categoryEvents = getEventsByCategory(category);
                setFilteredEvents(categoryEvents);
            }
            setLoading(false);
        }, 400);
    }

    return (
        <Fragment>
            <Head>
                <title>All Events | NextEvents Pro</title>
                <meta name="description" content="Browse all upcoming events" />
            </Head>

            <div className="section-padding">
                <div className="container">
                    <div className="center" style={{ marginBottom: "3rem" }}>
                        <h1>Discover Amazing Events</h1>
                        <p
                            className="text-gray"
                            style={{ maxWidth: "600px", margin: "1rem auto" }}>
                            Browse through our curated collection of premium
                            events
                        </p>
                    </div>

                    <StatsBar events={events} />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                            marginTop: "3rem",
                        }}>
                        <EventsSearch onSearch={findEventsHandler} />

                        <CategoryFilter
                            selectedCategory={selectedCategory}
                            onSelectCategory={handleCategorySelect}
                        />

                        {loading ? (
                            <div className="loading-state">
                                <div className="spinner"></div>
                                <p>Loading events...</p>
                            </div>
                        ) : filteredEvents.length === 0 ? (
                            <div className="empty-state">
                                <div className="empty-icon">🔍</div>
                                <h3>No events found</h3>
                                <p>
                                    Try adjusting your filters or check back
                                    later for new events.
                                </p>
                                <button
                                    className="btn-secondary"
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setFilteredEvents(events);
                                    }}>
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="results-header">
                                    <h2 style={{ margin: 0 }}>
                                        Upcoming Events
                                    </h2>
                                    <span className="results-count">
                                        {filteredEvents.length} events found
                                    </span>
                                </div>
                                <EventList items={filteredEvents} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AllEventsPage;
