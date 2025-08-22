import * as React from "react";
import {getChildFromChildren} from "../lib/getChildFromChildren.ts";
import styles from "./Tile.module.css";
import classNames from "classnames";
import {TileOrientation} from "../lib/enums.ts";

enum DisplayNames {
    CAPTION = "CAPTION",
    IMAGE = "IMAGE",
    TITLE = "TITLE",
}

interface TileProps {
    orientation?: TileOrientation;
    children: React.ReactNode;
}

function Title({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.tileCaption}>
            {children}
        </section>
    )
}

function Caption({ children }: { children: React.ReactNode }) {
    return (
        <figcaption className={styles.tileCaption}>
            {children}
        </figcaption>
    )
}

function Image({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.tileAssetContainer}>
            {children}
        </section>
    )
}

function Tile({
    children,
    orientation = TileOrientation.COLUMN,
}: TileProps) {
    const Caption = getChildFromChildren(children, DisplayNames.CAPTION);
    const Image = getChildFromChildren(children, DisplayNames.IMAGE);
    // const Title = getChildFromChildren(children, DisplayNames.TITLE);

    const classes = classNames(styles.tileBase, {
        [styles.row]: orientation === TileOrientation.ROW,
    })

    return (
        <figure className={classes}>
            {Image}
            {Caption}
        </figure>
    )
}

Title.displayName = DisplayNames.TITLE;
Caption.displayName = DisplayNames.CAPTION;
Image.displayName = DisplayNames.IMAGE;

Tile.Title = Title;
Tile.Caption = Caption;
Tile.Image = Image;

export default Tile;

