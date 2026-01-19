// components/event-detail/event-logistics.js
import { useState } from "react";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import TimeIcon from "../icons/timeIcon";
import CalendarIcon from "../icons/calendarIcon";
import ClockIcon from "../icons/clockIcon";
import TicketIcon from "../icons/ticketIcon";
import LocationIcon from "../icons/locationIcon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
    const { date, address, image, imageAlt, price, seats } = props;
    const [imageLoaded, setImageLoaded] = useState(false);

    const eventDate = new Date(date);
    const humanReadableDate = eventDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const eventTime = eventDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const month = eventDate.toLocaleDateString("en-US", { month: "short" });
    const day = eventDate.getDate();
    const dayOfWeek = eventDate.toLocaleDateString("en-US", {
        weekday: "short",
    });

    const addressParts = address.split(", ");
    const primaryAddress = addressParts[0];
    const secondaryAddress = addressParts.slice(1).join(", ");

    const remainingSeats = seats || 100;
    const seatPercentage = Math.min((remainingSeats / 100) * 100, 100);

    return (
        <section className={classes.logistics}>
            <div className={classes.container}>
                {/* Left Column - Date Card */}
                <div className={classes.dateCard}>
                    <div className={classes.dateHeader}>
                        <CalendarIcon />
                        <span>Event Date</span>
                    </div>
                    <div className={classes.dateDisplay}>
                        <div className={classes.month}>{month}</div>
                        <div className={classes.day}>{day}</div>
                        <div className={classes.dayOfWeek}>{dayOfWeek}</div>
                    </div>
                    <div className={classes.timeInfo}>
                        <ClockIcon />
                        <span>{eventTime}</span>
                    </div>
                </div>

                {/* Center - Image */}
                <div className={classes.imageContainer}>
                    <div className={classes.imageWrapper}>
                        <img
                            src={`/${image}`}
                            alt={imageAlt}
                            className={`${classes.image} ${imageLoaded ? classes.loaded : ""}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                        <div className={classes.imageOverlay}>
                            <div className={classes.overlayContent}>
                                <span className={classes.imageBadge}>
                                    Premium Event
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className={classes.quickStats}>
                        <div className={classes.stat}>
                            <TicketIcon />
                            <div className={classes.statContent}>
                                <span className={classes.statValue}>
                                    ${price || 99}
                                </span>
                                <span className={classes.statLabel}>
                                    Starting From
                                </span>
                            </div>
                        </div>
                        <div className={classes.stat}>
                            <div className={classes.statContent}>
                                <span className={classes.statValue}>
                                    {remainingSeats}
                                </span>
                                <span className={classes.statLabel}>
                                    Seats Left
                                </span>
                            </div>
                            <div className={classes.seatMeter}>
                                <div
                                    className={classes.seatFill}
                                    style={{ width: `${seatPercentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Location & Details */}
                <div className={classes.detailsCard}>
                    <div className={classes.detailsHeader}>
                        <LocationIcon />
                        <h3>Event Location</h3>
                    </div>

                    <div className={classes.addressCard}>
                        <div className={classes.addressIcon}>
                            <AddressIcon />
                        </div>
                        <div className={classes.addressDetails}>
                            <div className={classes.addressPrimary}>
                                {primaryAddress}
                            </div>
                            <div className={classes.addressSecondary}>
                                {secondaryAddress}
                            </div>
                        </div>
                        <button className={classes.mapButton}>
                            View on Map
                        </button>
                    </div>

                    <ul className={classes.detailsList}>
                        <LogisticsItem icon={DateIcon}>
                            <div className={classes.detailItem}>
                                <span className={classes.detailLabel}>
                                    Date:
                                </span>
                                <span className={classes.detailValue}>
                                    {humanReadableDate}
                                </span>
                            </div>
                        </LogisticsItem>
                        <LogisticsItem icon={TimeIcon}>
                            <div className={classes.detailItem}>
                                <span className={classes.detailLabel}>
                                    Time:
                                </span>
                                <span className={classes.detailValue}>
                                    {eventTime}
                                </span>
                            </div>
                        </LogisticsItem>
                        <LogisticsItem icon={TicketIcon}>
                            <div className={classes.detailItem}>
                                <span className={classes.detailLabel}>
                                    Price:
                                </span>
                                <span className={classes.detailValue}>
                                    From ${price || 99}
                                </span>
                            </div>
                        </LogisticsItem>
                        <LogisticsItem icon={() => <span>👥</span>}>
                            <div className={classes.detailItem}>
                                <span className={classes.detailLabel}>
                                    Capacity:
                                </span>
                                <span className={classes.detailValue}>
                                    {seats || 100} seats
                                </span>
                            </div>
                        </LogisticsItem>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default EventLogistics;
