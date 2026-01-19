// components/layout/footer.js
import Link from "next/link";
import classes from "./footer.module.css";

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.brand}>
                        <div className={classes.logo}>
                            <span className={classes.logoIcon}>🎉</span>
                            <span className={classes.logoText}>
                                NextEvents Pro
                            </span>
                        </div>
                        <p className={classes.tagline}>
                            Discover amazing events and create unforgettable
                            experiences
                        </p>
                        <div className={classes.social}>
                            <a
                                href="#"
                                className={classes.socialLink}
                                aria-label="Twitter">
                                <span className={classes.socialIcon}>🐦</span>
                            </a>
                            <a
                                href="#"
                                className={classes.socialLink}
                                aria-label="Instagram">
                                <span className={classes.socialIcon}>📸</span>
                            </a>
                            <a
                                href="#"
                                className={classes.socialLink}
                                aria-label="LinkedIn">
                                <span className={classes.socialIcon}>💼</span>
                            </a>
                            <a
                                href="#"
                                className={classes.socialLink}
                                aria-label="YouTube">
                                <span className={classes.socialIcon}>📺</span>
                            </a>
                        </div>
                    </div>

                    <div className={classes.links}>
                        <div className={classes.linkColumn}>
                            <h3 className={classes.linkTitle}>Events</h3>
                            <Link href="/events" className={classes.link}>
                                All Events
                            </Link>
                            <Link href="#" className={classes.link}>
                                Featured Events
                            </Link>
                            <Link href="#" className={classes.link}>
                                Upcoming Events
                            </Link>
                            <Link href="#" className={classes.link}>
                                Past Events
                            </Link>
                        </div>

                        <div className={classes.linkColumn}>
                            <h3 className={classes.linkTitle}>Company</h3>
                            <Link href="#" className={classes.link}>
                                About Us
                            </Link>
                            <Link href="#" className={classes.link}>
                                Contact
                            </Link>
                            <Link href="#" className={classes.link}>
                                Careers
                            </Link>
                            <Link href="#" className={classes.link}>
                                Press
                            </Link>
                        </div>

                        <div className={classes.linkColumn}>
                            <h3 className={classes.linkTitle}>Support</h3>
                            <Link href="#" className={classes.link}>
                                Help Center
                            </Link>
                            <Link href="#" className={classes.link}>
                                FAQs
                            </Link>
                            <Link href="#" className={classes.link}>
                                Terms of Service
                            </Link>
                            <Link href="#" className={classes.link}>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={classes.bottom}>
                    <p className={classes.copyright}>
                        © {new Date().getFullYear()} NextEvents Pro. All rights
                        reserved.
                    </p>
                    <div className={classes.legal}>
                        <Link href="#" className={classes.legalLink}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className={classes.legalLink}>
                            Terms of Service
                        </Link>
                        <Link href="#" className={classes.legalLink}>
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
