// components/events/event-item.js
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
    const { title, image, date, location, id, category } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const eventTime = new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <div className={classes.imageContainer}>
                <img src={"/" + image} alt={title} className={classes.image} />
                <div className={classes.categoryBadge}>
                    {category || "Event"}
                </div>
                <div className={classes.dateBadge}>
                    <DateIcon />
                    <span>{new Date(date).getDate()}</span>
                </div>
            </div>

            <div className={classes.content}>
                <div className={classes.header}>
                    <div className={classes.meta}>
                        <span className={classes.time}>
                            <DateIcon />
                            {eventTime}
                        </span>
                        <span className={classes.location}>
                            <AddressIcon />
                            {location.split(",")[0]}
                        </span>
                    </div>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.description}>
                        {props.description ||
                            "Join us for an amazing experience!"}
                    </p>
                </div>

                <div className={classes.footer}>
                    <div className={classes.price}>
                        <span className={classes.priceLabel}>From</span>
                        <span className={classes.priceValue}>$49</span>
                    </div>
                    <Button
                        link={exploreLink}
                        className={classes.exploreButton}>
                        <span>Explore Event</span>
                        <ArrowRightIcon />
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
