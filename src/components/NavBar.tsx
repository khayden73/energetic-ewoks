import Profile from "./Profile.tsx";
import styles from "./Navbar.module.css";
import Logo from "./Logo.tsx";
import MenuButton from "./MenuButton.tsx";


function NavBar() {
    return (
        <div className={styles.navbarBase}>
            <nav>
                <MenuButton />
            </nav>
            <Logo
                img="/public/images/logos/logo-bank-tile-101.png"
                alt="logo"
            />
            <Profile />
        </div>
    )
}

export default NavBar;