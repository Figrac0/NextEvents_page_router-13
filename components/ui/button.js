// components/ui/button.js
import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
    const {
        link,
        onClick,
        children,
        variant = "primary",
        size = "medium",
        fullWidth = false,
        disabled = false,
        className = "",
        ...restProps
    } = props;

    const buttonClasses = `
    ${classes.btn}
    ${classes[variant]}
    ${classes[size]}
    ${fullWidth ? classes.fullWidth : ""}
    ${disabled ? classes.disabled : ""}
    ${className}
  `.trim();

    const content = <span className={classes.content}>{children}</span>;

    if (link && !disabled) {
        return (
            <Link href={link} className={buttonClasses} {...restProps}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...restProps}>
            {content}
        </button>
    );
}

export default Button;
