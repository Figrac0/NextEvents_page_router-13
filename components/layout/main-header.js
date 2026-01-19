// components/layout/main-header.js
import Link from "next/link";
import { useState } from "react";
import classes from "./main-header.module.css";

function MainHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Link href="/">
                        <span className={classes.logoIcon}>🎉</span>
                        <span className={classes.logoText}>NextEvents Pro</span>
                    </Link>
                </div>

                <button
                    className={classes.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu">
                    <span className={mobileMenuOpen ? classes.open : ""}></span>
                    <span className={mobileMenuOpen ? classes.open : ""}></span>
                    <span className={mobileMenuOpen ? classes.open : ""}></span>
                </button>

                <nav
                    className={`${classes.navigation} ${mobileMenuOpen ? classes.mobileOpen : ""}`}>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}>
                                <span className={classes.navIcon}>🏠</span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                onClick={() => setMobileMenuOpen(false)}>
                                <span className={classes.navIcon}>📅</span>
                                All Events
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                onClick={() => setMobileMenuOpen(false)}>
                                <span className={classes.navIcon}>⭐</span>
                                Featured
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                onClick={() => setMobileMenuOpen(false)}>
                                <span className={classes.navIcon}>👤</span>
                                My Events
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={classes.cta}>
                    <Link href="/events" className={classes.ctaButton}>
                        Get Tickets
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
