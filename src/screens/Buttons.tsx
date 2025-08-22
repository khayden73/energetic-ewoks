import Button from "../components/Button.tsx";
import List from "../components/List.tsx";
import {useState} from "react";

function Buttons () {
    const [output, setOutput] = useState('hello world');
    return (
        <>
            <h2>styled buttons</h2>
            <h3>click button to change this text: <span>{output}</span></h3>
            <List>
                <Button onClick={() => {setOutput('button with base style')}}>
                    base
                </Button>
                <Button.Primary onClick={() => {setOutput('button with primary style')}}>
                    primary
                </Button.Primary>
            </List>
        </>
    )
}

export default Buttons;
