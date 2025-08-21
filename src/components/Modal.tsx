import * as React from "react";
// import {getChildFromChildren} from "../lib/getChildFromChildren.ts";
import styles from "./Modal.module.css";
import Button from "./Button.tsx";

// import classNames from "classnames";


interface ModalProps {
    title: string;
    children?: React.ReactNode;
    onRequestClose: VoidFunction;
}

function Modal({title, children, onRequestClose }:ModalProps) {

    return (
        <div className={styles.modalWrapper} onClick={onRequestClose}>
            <section className={styles.modalDialog}>
                <section className={styles.modalContent}>
                    {title}
                </section>
                <section className={styles.modalContent}>
                    {children}
                </section>
                <section className={styles.modalContent}>
                    <Button>close</Button>
                    <Button.Primary>confirm</Button.Primary>
                </section>
            </section>
        </div>
    )
}

export default Modal;