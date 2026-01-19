// components/event-detail/related-events.js
import Link from "next/link";
import Button from "../ui/button";
import classes from "./related-events.module.css";

function RelatedEvents({ events }) {
    if (!events || events.length === 0) {
        return null;
    }

    return (
        <section className={classes.container}>
            <div className={classes.header}>
                <h2>You Might Also Like</h2>
                <p className={classes.subtitle}>
                    Similar events you might be interested in
                </p>
            </div>

            <div className={classes.events}>
                {events.map((event) => (
                    <div key={event.id} className={classes.eventCard}>
                        <div className={classes.eventImage}>
                            <img src={`/${event.image}`} alt={event.title} />
                            <div className={classes.eventCategory}>
                                {event.category}
                            </div>
                        </div>

                        <div className={classes.eventContent}>
                            <div className={classes.eventDate}>
                                {new Date(event.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "short",
                                        day: "numeric",
                                    },
                                )}
                            </div>

                            <h3 className={classes.eventTitle}>
                                {event.title}
                            </h3>

                            <div className={classes.eventMeta}>
                                <span className={classes.eventLocation}>
                                    {event.location.split(",")[0]}
                                </span>
                                <span className={classes.eventPrice}>
                                    ${event.price || 99}
                                </span>
                            </div>

                            <p className={classes.eventDescription}>
                                {event.description.substring(0, 100)}...
                            </p>

                            <Link
                                href={`/events/${event.id}`}
                                className={classes.eventLink}>
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className={classes.cta}>
                <Button link="/events">Browse All Events</Button>
            </div>
        </section>
    );
}

export default RelatedEvents;
