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
        props.abilityKeybinds.forEach(keybind => {
            let converted = keyConverter[key];
            if (shiftDown && keybind.includes("shift") 
            && keybind.includes(converted)) {
                props.abilityFunc(converted, props.abilityFuncArgs[0], props.abilityFuncArgs[1], props.abilityFuncArgs[2], props.abilityFuncArgs[3], props.abilityFuncArgs[4])
            } else if (altDown && keybind.includes(key)) {

            } else {
                props.movementFunc(key, props.movementFuncArgs[0], props.movementFuncArgs[1]);
            }
        })
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