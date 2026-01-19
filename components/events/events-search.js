// components/events/events-search.js - компактная версия
import { useRef, useState } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";
import DateIcon from "../icons/date-icon";
import FilterIcon from "../icons/filter-icon";

function EventsSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();
    const [category, setCategory] = useState("all");
    const [priceRange, setPriceRange] = useState("all");
    const [showAdvanced, setShowAdvanced] = useState(false);

    const categories = [
        "all",
        "Technology",
        "Business",
        "Marketing",
        "Leadership",
        "Environment",
    ];

    const priceRanges = [
        { value: "all", label: "Any Price" },
        { value: "free", label: "Free" },
        { value: "under50", label: "Under $50" },
        { value: "50-100", label: "$50-100" },
        { value: "100+", label: "$100+" },
    ];

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        const filters = {
            year: selectedYear,
            month: selectedMonth,
            category: category !== "all" ? category : null,
            priceRange,
        };

        props.onSearch(filters);
    }

    function resetFilters() {
        setCategory("all");
        setPriceRange("all");
        if (yearInputRef.current) yearInputRef.current.value = "2024";
        if (monthInputRef.current) monthInputRef.current.value = "1";
        setShowAdvanced(false);
    }

    return (
        <div className={classes.searchContainer}>
            <div className={classes.searchHeader}>
                <div className={classes.headerTitle}>
                    <FilterIcon />
                    <h3>Filter Events</h3>
                </div>
                <button
                    type="button"
                    className={classes.toggleAdvanced}
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    aria-label={
                        showAdvanced ? "Hide filters" : "Show more filters"
                    }>
                    {showAdvanced ? "Basic" : "More Filters"}
                    <span
                        style={{
                            transform: showAdvanced
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                        }}>
                        ›
                    </span>
                </button>
            </div>

            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.basicFilters}>
                    <div className={classes.inputGroup}>
                        <div className={classes.inputWithIcon}>
                            <DateIcon />
                            <select
                                id="year"
                                ref={yearInputRef}
                                className={classes.select}
                                defaultValue="2024">
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </select>
                        </div>
                        <label htmlFor="year" className={classes.label}>
                            Year
                        </label>
                    </div>

                    <div className={classes.inputGroup}>
                        <div className={classes.inputWithIcon}>
                            <DateIcon />
                            <select
                                id="month"
                                ref={monthInputRef}
                                className={classes.select}
                                defaultValue="1">
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                        </div>
                        <label htmlFor="month" className={classes.label}>
                            Month
                        </label>
                    </div>
                </div>

                {showAdvanced && (
                    <div className={classes.advancedFilters}>
                        <div className={classes.filterGroup}>
                            <label className={classes.filterLabel}>
                                Category
                            </label>
                            <div className={classes.categoryGrid}>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        className={`${classes.categoryPill} ${
                                            category === cat
                                                ? classes.active
                                                : ""
                                        }`}
                                        onClick={() => setCategory(cat)}
                                        aria-pressed={category === cat}>
                                        {cat === "all" ? "All" : cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={classes.filterGroup}>
                            <label className={classes.filterLabel}>Price</label>
                            <div className={classes.priceGrid}>
                                {priceRanges.map((range) => (
                                    <button
                                        key={range.value}
                                        type="button"
                                        className={`${classes.priceOption} ${
                                            priceRange === range.value
                                                ? classes.active
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setPriceRange(range.value)
                                        }
                                        aria-pressed={
                                            priceRange === range.value
                                        }>
                                        {range.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className={classes.actions}>
                    <button
                        type="button"
                        className={classes.resetButton}
                        onClick={resetFilters}>
                        Reset
                    </button>
                    <Button
                        type="submit"
                        variant="primary"
                        size="small"
                        className={classes.submitButton}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        Search
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default EventsSearch;
