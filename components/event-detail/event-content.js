// components/event-detail/event-content.js
import { useState } from "react";
import classes from "./event-content.module.css";

function EventContent(props) {
    const [expanded, setExpanded] = useState(false);
    const content = props.children;

    // Simulate long content
    const shortContent =
        typeof content === "string"
            ? content.substring(0, 300) + "..."
            : content;

    const isLong = typeof content === "string" && content.length > 300;

    return (
        <section className={classes.content}>
            <div className={classes.container}>
                {props.children}

                {/* Additional Sections */}
                {props.additionalSections && (
                    <div className={classes.sections}>
                        {props.additionalSections.map((section, index) => (
                            <div key={index} className={classes.section}>
                                <h3 className={classes.sectionTitle}>
                                    {section.title}
                                </h3>
                                <p className={classes.sectionText}>
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Agenda/Program */}
                {props.agenda && (
                    <div className={classes.agenda}>
                        <h3 className={classes.agendaTitle}>Event Agenda</h3>
                        <div className={classes.timeline}>
                            {props.agenda.map((item, index) => (
                                <div
                                    key={index}
                                    className={classes.timelineItem}>
                                    <div className={classes.timelineMarker}>
                                        <div className={classes.markerDot} />
                                        {index < props.agenda.length - 1 && (
                                            <div
                                                className={classes.markerLine}
                                            />
                                        )}
                                    </div>
                                    <div className={classes.timelineContent}>
                                        <div className={classes.timelineTime}>
                                            {item.time}
                                        </div>
                                        <h4 className={classes.timelineTitle}>
                                            {item.title}
                                        </h4>
                                        <p
                                            className={
                                                classes.timelineDescription
                                            }>
                                            {item.description}
                                        </p>
                                        {item.speaker && (
                                            <div
                                                className={
                                                    classes.timelineSpeaker
                                                }>
                                                <span>👨‍💼</span>
                                                <span>{item.speaker}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* What's Included */}
                <div className={classes.included}>
                    <h3 className={classes.includedTitle}>What's Included</h3>
                    <div className={classes.includedGrid}>
                        <div className={classes.includedItem}>
                            <div className={classes.includedIcon}>📚</div>
                            <div className={classes.includedContent}>
                                <h4>Learning Materials</h4>
                                <p>
                                    Access to presentations, guides, and
                                    resources
                                </p>
                            </div>
                        </div>
                        <div className={classes.includedItem}>
                            <div className={classes.includedIcon}>🍽️</div>
                            <div className={classes.includedContent}>
                                <h4>Food & Drinks</h4>
                                <p>Catered lunch and refreshments throughout</p>
                            </div>
                        </div>
                        <div className={classes.includedItem}>
                            <div className={classes.includedIcon}>🎁</div>
                            <div className={classes.includedContent}>
                                <h4>Swag Bag</h4>
                                <p>Exclusive merchandise and goodies</p>
                            </div>
                        </div>
                        <div className={classes.includedItem}>
                            <div className={classes.includedIcon}>📝</div>
                            <div className={classes.includedContent}>
                                <h4>Certificate</h4>
                                <p>Participation certificate for attendees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventContent;
