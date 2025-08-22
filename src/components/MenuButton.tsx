import MenuIcon from "../assets/icons/smoothie-line/menu-svgrepo-com.svg?react";
import styles from "./MenuButton.module.css";

function MenuButton() {
    return (
        <button className={styles.menuButton}>
            <MenuIcon />
        </button>
    )
}

export default MenuButton;