import styles from "../stylesheets/Button.module.css";
import * as React from "react";

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

function Primary(props: ButtonProps) {
    const {
        onClick,
        children,
    } = props;
    return (
        <Button
            className={`${styles.buttonBase} ${styles.primary}`}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

function Button(props: ButtonProps) {
    const {
        onClick,
        children,
        className,
    } = props;
    return (
        <button
            className={`${styles.buttonBase} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.Primary = Primary;
export default Button;