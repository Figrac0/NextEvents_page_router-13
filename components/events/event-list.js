// components/events/event-list.js
import EventItem from "./event-item";
import "./event-list.module.css";

function EventList(props) {
    const { items } = props;

    return (
        <ul className="event-list-grid">
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                    description={event.description}
                    category={event.category}
                    price={event.price}
                />
            ))}
        </ul>
    );
}

export default EventList;
