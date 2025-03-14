import styles from "./Logo.module.css";

interface LogoProps {
    img: string;
    alt: string;
}

function Logo({
    img,
    alt,
}: LogoProps) {
    return (
        <figure className={styles.logoContainerBase}>
            <img src={img} alt={alt} />
        </figure>
    );
}

export default Logo;