// components/event-detail/event-summary.js
import classes from "./event-summary.module.css";

function EventSummary(props) {
    const { title } = props;

    return (
        <section className={classes.summary}>
            <div className={classes.background}>
                <div className={classes.gradientOverlay}></div>
                <div className={classes.particles}></div>
            </div>
            <div className={classes.content}>
                <div className={classes.breadcrumb}>
                    <a href="/events" className={classes.breadcrumbLink}>
                        Events
                    </a>
                    <span className={classes.breadcrumbSeparator}>/</span>
                    <span className={classes.breadcrumbCurrent}>{title}</span>
                </div>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.stats}>
                    <span className={classes.stat}>
                        <span className={classes.statIcon}>📅</span>
                        <span>Premium Event</span>
                    </span>
                    <span className={classes.stat}>
                        <span className={classes.statIcon}>⭐</span>
                        <span>Featured</span>
                    </span>
                    <span className={classes.stat}>
                        <span className={classes.statIcon}>👥</span>
                        <span>100+ Attendees</span>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default EventSummary;
