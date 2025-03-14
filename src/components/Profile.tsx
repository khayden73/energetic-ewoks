import styles from "./Profile.module.css"
import ReactComponent from "../assets/icons/smoothie-line/profile-svgrepo-com.svg";

function Profile() {
    return (
        <div className={styles.profileBase}>
            <ReactComponent />
            {/*<img src={ProfileIcon} />*/}
        </div>
    )
}

export default Profile;