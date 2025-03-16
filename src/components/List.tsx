import styles from "./List.module.css";
import * as React from "react";
import {ListTypes} from "../lib/enums.ts";

interface ListProps {
    children: React.ReactNode;
    listType?: ListTypes;
}

function List(props: ListProps) {
    const {
        children,
    } = props;
    return (
        <ul
            className={styles.listBase}
        >
            {React.Children.map(
                children,
                (child) => (<li>{child}</li>))}
        </ul>
    )
}

export default List;