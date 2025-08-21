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

            {isOpen && <Modal onRequestClose={() => {setIsOpen(false)}}>
                <p>hello world</p>
            </Modal>}
        </>
    )
}

export default Modals;
