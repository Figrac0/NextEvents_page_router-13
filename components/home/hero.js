// components/home/hero.js
import { useState } from "react";
import classes from "./hero.module.css";
import EventsSearch from "../events/events-search";

function Hero() {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <section className={classes.hero}>
            <div className={classes.background}>
                <div className={classes.gradientOverlay}></div>
                <div className={classes.particles}></div>
            </div>

            <div className={classes.content}>
                <div className={classes.badge}>
                    <span className={classes.badgeIcon}>🎉</span>
                    <span>Premium Events Platform</span>
                </div>

                <h1 className={classes.title}>
                    Discover Amazing
                    <span className={classes.highlight}> Events</span>
                    <br />
                    That Inspire You
                </h1>

                <p className={classes.subtitle}>
                    Join thousands of people experiencing unforgettable moments.
                    From tech conferences to music festivals, find your next
                    adventure.
                </p>

                <div className={classes.cta}>
                    <button
                        className={classes.primaryButton}
                        onClick={() => setSearchActive(true)}>
                        <span>Explore Events</span>
                        <span className={classes.ctaIcon}>→</span>
                    </button>
                    <button className={classes.secondaryButton}>
                        How It Works
                    </button>
                </div>

                <div className={classes.stats}>
                    <div className={classes.stat}>
                        <span className={classes.statNumber}>500+</span>
                        <span className={classes.statLabel}>Events</span>
                    </div>
                    <div className={classes.stat}>
                        <span className={classes.statNumber}>50K+</span>
                        <span className={classes.statLabel}>Attendees</span>
                    </div>
                    <div className={classes.stat}>
                        <span className={classes.statNumber}>98%</span>
                        <span className={classes.statLabel}>Satisfaction</span>
                    </div>
                </div>
            </div>

            {searchActive && (
                <div className={classes.searchModal}>
                    <div className={classes.searchContent}>
                        <div className={classes.searchHeader}>
                            <h3>Find Your Perfect Event</h3>
                            <button
                                className={classes.closeButton}
                                onClick={() => setSearchActive(false)}>
                                ✕
                            </button>
                        </div>
                        <EventsSearch onSearch={() => setSearchActive(false)} />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Hero;
