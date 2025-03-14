import Profile from "./Profile.tsx";
import styles from "./Navbar.module.css";
import Logo from "./Logo.tsx";
import ReactComponent from "../assets/icons/smoothie-line/menu-svgrepo-com.svg";

function NavBar() {
    return (
        <div className={styles.navbarBase}>
            <Logo
                img="/public/images/logos/logo-bank-tile-101.png"
                alt="logo"
            />
            <nav>
                <ReactComponent />
            </nav>
            <Profile />
        </div>
    )
}

export default NavBar;