// components/event-detail/speakers-panel.js
import classes from "./speakers-panel.module.css";

function SpeakersPanel({ speakers }) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h2>Meet Our Speakers</h2>
                <p className={classes.subtitle}>
                    Industry experts and thought leaders
                </p>
            </div>

            <div className={classes.speakers}>
                {speakers.map((speaker, index) => (
                    <div key={index} className={classes.speakerCard}>
                        <div className={classes.speakerAvatar}>
                            <span className={classes.avatarInitial}>
                                {speaker
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </span>
                        </div>
                        <div className={classes.speakerInfo}>
                            <h3 className={classes.speakerName}>{speaker}</h3>
                            <p className={classes.speakerTitle}>
                                Industry Expert
                            </p>
                            <div className={classes.speakerTags}>
                                <span className={classes.tag}>Keynote</span>
                                <span className={classes.tag}>Workshop</span>
                            </div>
                        </div>
                        <button className={classes.followButton}>Follow</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpeakersPanel;
