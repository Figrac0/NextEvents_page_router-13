// components/event-detail/ticket-selector.js - исправленный
import { useState } from "react";
import Button from "../ui/button";
import classes from "./ticket-selector.module.css";
import TicketIcon from "../icons/ticketIcon";
import UsersIcon from "../icons/users-icon";

function TicketSelector({ price, seats, ticketCount, onTicketChange }) {
    const [selectedType, setSelectedType] = useState("standard");

    // Функция для форматирования цены (убираем лишние нули)
    const formatPrice = (price) => {
        const num = Number(price);
        // Если цена целая - показываем без десятичных
        if (num % 1 === 0) {
            return num.toString();
        }
        // Иначе показываем с двумя знаками после запятой
        return num.toFixed(2);
    };

    const ticketTypes = [
        {
            id: "standard",
            name: "Standard",
            price: price || 99,
            features: ["Event Access", "Learning Materials", "Refreshments"],
        },
        {
            id: "vip",
            name: "VIP",
            price: (price || 99) * 1.5,
            features: ["All Standard +", "Priority Seating", "Meet & Greet"],
        },
        {
            id: "group",
            name: "Group (5+)",
            price: (price || 99) * 0.8,
            features: [
                "20% Discount",
                "All Standard Features",
                "Dedicated Area",
            ],
        },
    ];

    const selectedTicket = ticketTypes.find((t) => t.id === selectedType);
    const totalPrice = selectedTicket ? selectedTicket.price * ticketCount : 0;
    const serviceFee = totalPrice * 0.1;
    const grandTotal = totalPrice + serviceFee;

    const handleIncrement = () => {
        if (ticketCount < (seats || 10)) {
            onTicketChange(ticketCount + 1);
        }
    };

    const handleDecrement = () => {
        if (ticketCount > 1) {
            onTicketChange(ticketCount - 1);
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <TicketIcon />
                <h3>Get Your Tickets</h3>
            </div>

            <div className={classes.ticketTypes}>
                {ticketTypes.map((type) => (
                    <div
                        key={type.id}
                        className={`${classes.ticketType} ${
                            selectedType === type.id ? classes.selected : ""
                        }`}
                        onClick={() => setSelectedType(type.id)}>
                        <div className={classes.ticketHeader}>
                            <span className={classes.ticketName}>
                                {type.name}
                            </span>
                            <span className={classes.ticketPrice}>
                                ${formatPrice(type.price)}
                            </span>
                        </div>
                        <div className={classes.ticketFeatures}>
                            {type.features.map((feature, index) => (
                                <span key={index} className={classes.feature}>
                                    ✓ {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={classes.ticketCounter}>
                <div className={classes.counterLabel}>
                    <UsersIcon />
                    <span>Number of Tickets</span>
                </div>
                <div className={classes.counter}>
                    <button
                        className={classes.counterButton}
                        onClick={handleDecrement}
                        disabled={ticketCount <= 1}
                        type="button">
                        -
                    </button>
                    <span className={classes.counterValue}>{ticketCount}</span>
                    <button
                        className={classes.counterButton}
                        onClick={handleIncrement}
                        disabled={ticketCount >= (seats || 10)}
                        type="button">
                        +
                    </button>
                    <span className={classes.seatsRemaining}>
                        {(seats || 10) - ticketCount} seats left
                    </span>
                </div>
            </div>

            <div className={classes.priceBreakdown}>
                <div className={classes.priceRow}>
                    <span>Ticket Price</span>
                    <span>
                        ${selectedTicket.price.toFixed(2)} × {ticketCount}
                    </span>
                </div>
                <div className={classes.priceRow}>
                    <span>Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                </div>
                <div className={classes.divider} />
                <div className={classes.totalRow}>
                    <span>Total</span>
                    <span className={classes.totalPrice}>
                        ${grandTotal.toFixed(2)}
                    </span>
                </div>
            </div>

            <Button link="#" className={classes.buyButton}>
                <span>Buy Now</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M4 4H5.5L6.5 7M10 13H16L20 7H6.5M10 13L6.5 7M10 13L8.5 16.5M6.5 7L4.5 4.5M20 18.5C20 19.3284 19.3284 20 18.5 20C17.6716 20 17 19.3284 17 18.5C17 17.6716 17.6716 17 18.5 17C19.3284 17 20 17.6716 20 18.5ZM10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17C9.32843 17 10 17.6716 10 18.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Button>

            <div className={classes.securityInfo}>
                <div className={classes.securityItem}>
                    <span className={classes.securityIcon}>🔒</span>
                    <span>Secure Payment</span>
                </div>
                <div className={classes.securityItem}>
                    <span className={classes.securityIcon}>↩️</span>
                    <span>30-Day Refund</span>
                </div>
                <div className={classes.securityItem}>
                    <span className={classes.securityIcon}>📞</span>
                    <span>24/7 Support</span>
                </div>
            </div>
        </div>
    );
}

export default TicketSelector;
