import styles from "./TileGrid.module.css"
import {getChildFromChildren} from "../lib/getChildFromChildren.ts";
import * as React from "react";

enum DisplayNames {
    CELLWRAPPER = "CELLWRAPPER",
}

interface CellProps {
    columns?: number;
    rows?: number;
    children: React.ReactNode
}

interface CustomCssProps extends React.CSSProperties {
    '--column-span': number;
    '--row-span': number;
}

function Cell({
    columns=1,
    rows=1,
    children,
}: CellProps) {

    const customStyle: CustomCssProps = {
        '--column-span': columns,
        '--row-span': rows,
    }

    return (
        <section
            className={styles.cellWrapper}
            style={customStyle}
        >
            {children}
        </section>
    );
}

function TileGrid({ children }: { children: React.ReactNode }) {
    const CellWrapper = getChildFromChildren(children, DisplayNames.CELLWRAPPER)

    return (
        <div className={styles.tileGridContainer}>
            <div className={styles.tileGrid}>
                {CellWrapper}
            </div>
        </div>

    )
}

Cell.displayName = DisplayNames.CELLWRAPPER;

TileGrid.Cell = Cell;

export default TileGrid;