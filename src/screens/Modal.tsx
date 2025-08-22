import Button from "../components/Button.tsx";
import {useState} from "react";
import Modal from "../components/Modal.tsx";

function Modals () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <h2>Modal</h2>
            <h3>click button to open modal</h3>
            <Button onClick={() => {setIsOpen(true)}}>
                open
            </Button>

            <Modal isOpen={isOpen} onRequestClose={() => {setIsOpen(false)}}>
                <h2>How to destroy the Death Star</h2>
                <p>The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you'll have to use proton torpedoes.</p>
            </Modal>
        </>
    )
}

export default Modals;
