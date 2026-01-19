// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import Hero from "../components/home/hero";

function HomePage() {
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const events = getFeaturedEvents();
            setFeaturedEvents(events);
            setLoading(false);
        }, 500);
    }, []);

    return (
        <>
            <Head>
                <title>NextEvents Pro - Premium Events Platform</title>
                <meta
                    name="description"
                    content="Discover and book amazing events with NextEvents Pro"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />

            <section className="section-padding">
                <div className="container">
                    <div className="center" style={{ marginBottom: "3rem" }}>
                        <h2>Featured Events</h2>
                        <p
                            className="text-gray"
                            style={{ maxWidth: "600px", margin: "1rem auto" }}>
                            Discover our handpicked selection of premium events
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                            <p>Loading events...</p>
                        </div>
                    ) : (
                        <EventList items={featuredEvents} />
                    )}
                </div>
            </section>

            <section
                className="section-padding"
                style={{
                    background:
                        "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
                }}>
                <div className="container">
                    <div
                        className="card"
                        style={{ textAlign: "center", padding: "3rem" }}>
                        <h2>Ready to Create Your Event?</h2>
                        <p style={{ margin: "1.5rem 0", fontSize: "1.125rem" }}>
                            Join thousands of event organizers who trust
                            NextEvents Pro
                        </p>
                        <button
                            className="btn-primary"
                            style={{
                                fontSize: "1.125rem",
                                padding: "1rem 2.5rem",
                            }}>
                            Get Started Free
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
