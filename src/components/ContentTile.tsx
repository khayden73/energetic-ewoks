import * as React from "react";
import {getChildFromChildren} from "../lib/getChildFromChildren.ts";
import styles from "./Tile.module.css";

enum DisplayNames {
    CAPTION = "CAPTION",
    IMAGE = "IMAGE",
}

function Caption({ children }: { children: React.ReactNode }) {
    return (
        <figcaption className={styles.cardCaption}>
            {children}
        </figcaption>
    )
}

function Image({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.cardImg}>
            {children}
        </section>
    )
}

function Tile({ children }: { children: React.ReactNode }) {
    const Caption = getChildFromChildren(children, DisplayNames.CAPTION);
    const Image = getChildFromChildren(children, DisplayNames.IMAGE);

    return (
        <figure className={styles.cardBase}>
            {Image}
            {Caption}
        </figure>
    )
}

Caption.displayName = DisplayNames.CAPTION;
Image.displayName = DisplayNames.IMAGE;

Tile.Caption = Caption;
Tile.Image = Image;

export default Tile;

