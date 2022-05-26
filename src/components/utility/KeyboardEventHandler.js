import { useEffect, useState } from "react"
import { keyConverter } from "./keyConverter";

export default function KeyboardEventHandler(props) {
    const [shiftDown, setShiftDown] = useState(false);
    const [altDown, setAltDown] = useState(false);

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        }
    });

    const downHandler = (e) => {
        switch(e.key) {
            case "Shift":
                setShiftDown(true);
                break;
            case "Alt":
                setAltDown(true);
                break;
            default:
                handleInput(e.key);
                break;
        }
    }

    const handleInput = (key) => {
        console.log(props)
        // props.keybinds.forEach(keybind => {
        //     if (shiftDown && keybind.includes("shift") 
        //     && keybind.includes(keyConverter[key])) {
                
        //     } else if (altDown && keybind.includes(key)) {

        //     } else {
        //         props.onEventFunc(key, props.onEventFuncArgs[0], props.onEventFuncArgs[1]);
        //     }
        // })
    }

    const upHandler = (e) => {
        switch(e.key) {
            case "Shift":
                setShiftDown(false);
                break;
            case "Alt":
                setAltDown(false);
                break;
            default:
                break;
        }
    }

    
    return;
}