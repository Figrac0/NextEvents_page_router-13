// components/events/stats-bar.js
import classes from "./stats-bar.module.css";

function StatsBar({ events }) {
    const totalEvents = events.length;
    const totalAttendees = events.reduce(
        (sum, event) => sum + (event.seats || 0),
        0,
    );
    const featuredEvents = events.filter((event) => event.isFeatured).length;
    const totalValue = events.reduce(
        (sum, event) => sum + (event.price || 0),
        0,
    );

    const stats = [
        {
            label: "Total Events",
            value: totalEvents,
            icon: "📅",
            color: "#6366f1",
        },
        {
            label: "Featured",
            value: featuredEvents,
            icon: "⭐",
            color: "#f59e0b",
        },
        {
            label: "Attendees",
            value: `${(totalAttendees / 1000).toFixed(1)}K+`,
            icon: "👥",
            color: "#10b981",
        },
        {
            label: "Avg. Price",
            value: `$${Math.round(totalValue / totalEvents)}`,
            icon: "💰",
            color: "#8b5cf6",
        },
    ];

    return (
        <div className={classes.container}>
            {stats.map((stat, index) => (
                <div key={stat.label} className={classes.statItem}>
                    <div
                        className={classes.statIcon}
                        style={{ backgroundColor: `${stat.color}20` }}>
                        <span style={{ color: stat.color }}>{stat.icon}</span>
                    </div>
                    <div className={classes.statContent}>
                        <div className={classes.statValue}>{stat.value}</div>
                        <div className={classes.statLabel}>{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StatsBar;
