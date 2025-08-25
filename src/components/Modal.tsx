import * as React from "react";
import {useEffect} from "react";
import styles from "./Modal.module.css";
import {getChildFromChildren} from "../lib/getChildFromChildren.ts";

enum DisplayNames {
    TITLE = "TITLE",
    CONTENT = "CONTENT",
    ACTIONS = "ACTIONS",
}
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

function Title({ children }: Pick<ModalProps, 'children'>) {
    return(<h2 className={styles.modalTitle}>{children}</h2>);
}

function Content({ children }: Pick<ModalProps, 'children'>){
    return(
        <div className={styles.modalContent}>{children}</div>
    );
}

function Actions({ children }: Pick<ModalProps, 'children'>){
    return(
        <section className={styles.modalActions}>{children}</section>
    );
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

    const Title = getChildFromChildren(children, DisplayNames.TITLE);
    const Content = getChildFromChildren(children, DisplayNames.CONTENT);
    const Actions = getChildFromChildren(children, DisplayNames.ACTIONS);

    return (
        <div className={styles.modalWrapper}>
            <Overlay onRequestClose={onRequestClose} />
            <section className={styles.modalDialog}>
                <section className={styles.modalCloseContainer}>
                    <button className={styles.modalCloseButton} onClick={onRequestClose} aria-label="close modal"></button>
                </section>
                {Title}
                {Content}
                {Actions}
            </section>
        </div>
    )
}

Title.displayName = DisplayNames.TITLE;
Content.displayName = DisplayNames.CONTENT;
Actions.displayName = DisplayNames.ACTIONS;

Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;

export default Modal;