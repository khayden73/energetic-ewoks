import styles from "./Profile.module.css"
// import { default as ProfileIcon } from "../assets/icons/smoothie-line/profile-svgrepo-com.svg";
import ProfileIcon from "../assets/icons/smoothie-line/profile-svgrepo-com.svg?react";

function Profile() {
    return (
        <div className={styles.profileBase}>
            <ProfileIcon />
            {/*<img src={ProfileIcon} />*/}
        </div>
    )
}

export default Profile;