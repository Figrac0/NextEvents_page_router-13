// pages/events/[eventId].js
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getEventById, getEventsByCategory } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import SpeakersPanel from "../../components/event-detail/speakers-panel";
import RelatedEvents from "../../components/event-detail/related-events";
import TicketSelector from "../../components/event-detail/ticket-selector";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage() {
    const router = useRouter();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ticketCount, setTicketCount] = useState(1);
    const [relatedEvents, setRelatedEvents] = useState([]);

    useEffect(() => {
        if (router.query.eventId) {
            const foundEvent = getEventById(router.query.eventId);
            setEvent(foundEvent);

            if (foundEvent) {
                // Get related events
                const related = getEventsByCategory(foundEvent.category)
                    .filter((e) => e.id !== foundEvent.id)
                    .slice(0, 3);
                setRelatedEvents(related);
            }

            setLoading(false);
        }
    }, [router.query.eventId]);

    if (loading) {
        return (
            <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading event details...</p>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="section-padding">
                <div className="container">
                    <ErrorAlert>
                        <h3>Event Not Found</h3>
                        <p>
                            The event you're looking for doesn't exist or has
                            been removed.
                        </p>
                        <button
                            className="btn-primary"
                            onClick={() => router.push("/events")}
                            style={{ marginTop: "1rem" }}>
                            Browse All Events
                        </button>
                    </ErrorAlert>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>{event.title} | NextEvents Pro</title>
                <meta name="description" content={event.description} />
            </Head>

            <EventSummary title={event.title} />

            <div className="section-padding">
                <div className="container">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 400px",
                            gap: "3rem",
                            alignItems: "start",
                        }}>
                        {/* Left Column - Event Details */}
                        <div>
                            <EventLogistics
                                date={event.date}
                                address={event.location}
                                image={event.image}
                                imageAlt={event.title}
                                price={event.price}
                                seats={event.seats}
                            />

                            <EventContent>
                                <div className="content-header">
                                    <h2>About This Event</h2>
                                    <div className="tags">
                                        {event.tags?.map((tag) => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p>{event.description}</p>

                                <div className="highlights">
                                    <h3>What You'll Learn</h3>
                                    <ul>
                                        <li>Cutting-edge industry insights</li>
                                        <li>
                                            Practical skills you can apply
                                            immediately
                                        </li>
                                        <li>
                                            Networking opportunities with
                                            professionals
                                        </li>
                                        <li>Access to exclusive resources</li>
                                    </ul>
                                </div>
                            </EventContent>

                            {event.speakers && event.speakers.length > 0 && (
                                <SpeakersPanel speakers={event.speakers} />
                            )}
                        </div>

                        {/* Right Column - Ticket & Actions */}
                        <div style={{ position: "sticky", top: "100px" }}>
                            <TicketSelector
                                price={event.price}
                                seats={event.seats}
                                ticketCount={ticketCount}
                                onTicketChange={setTicketCount}
                            />
                        </div>
                    </div>

                    {relatedEvents.length > 0 && (
                        <RelatedEvents events={relatedEvents} />
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default EventDetailPage;
