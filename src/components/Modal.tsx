import * as React from "react";
import {useEffect} from "react";
import styles from "./Modal.module.css";

interface BaseModalProps {
    onRequestClose: VoidFunction;
}

interface ModalProps extends BaseModalProps {
    children?: React.ReactNode;
    isOpen: boolean;
}

type OverlayProps = BaseModalProps;

function Overlay({ onRequestClose }: OverlayProps) {
    return (<div onClick={onRequestClose} className={styles.modalOverlay} ></div>);
}


function Modal({isOpen, children, onRequestClose }:ModalProps) {

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onRequestClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // scroll locking
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {

            document.body.style.overflow = "auto";
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    if (!isOpen) return null;

    return (
        <div className={styles.modalWrapper}>
            <Overlay onRequestClose={onRequestClose} />
            <section className={styles.modalDialog}>
                <section className={styles.modalCloseContainer}>
                    <button className={styles.modalCloseButton} onClick={onRequestClose} aria-label="close modal"></button>
                </section>
                <section className={styles.modalContent}>
                    {children}
                </section>
            </section>
        </div>
    )
}

export default Modal;