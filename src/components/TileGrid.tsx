import styles from "./TileGrid.module.css"

function TileGrid({ children }: { children: React.ReactNode }) {

    return (
        <div className={styles.tileGrid}>
            {children}
        </div>
    )
}

export default TileGrid;