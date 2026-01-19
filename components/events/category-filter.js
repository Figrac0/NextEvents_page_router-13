// components/events/category-filter.js
import classes from "./category-filter.module.css";

const categories = [
    { id: "all", label: "All", icon: "🌐", count: 12 },
    { id: "Technology", label: "Tech", icon: "💻", count: 4 },
    { id: "Business", label: "Business", icon: "💼", count: 3 },
    { id: "Marketing", label: "Marketing", icon: "📈", count: 2 },
    { id: "Leadership", label: "Leadership", icon: "👑", count: 2 },
    { id: "Environment", label: "Green", icon: "🌱", count: 1 },
];

function CategoryFilter({ selectedCategory, onSelectCategory }) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h3 className={classes.title}>Browse by Category</h3>
                <span className={classes.subtitle}>
                    Find events that match your interests
                </span>
            </div>

            <div className={classes.categories}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`${classes.categoryButton} ${
                            selectedCategory === category.id
                                ? classes.active
                                : ""
                        }`}
                        onClick={() => onSelectCategory(category.id)}>
                        <span className={classes.categoryIcon}>
                            {category.icon}
                        </span>
                        <span className={classes.categoryLabel}>
                            {category.label}
                        </span>
                        <span className={classes.categoryCount}>
                            {category.count}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
