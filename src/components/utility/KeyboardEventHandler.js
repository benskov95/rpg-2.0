import { useEffect, useState } from "react"
import { shiftKeyConverter } from "./keyConverter";

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

    const handleInput = (key) => {
        props.keybinds.hotbar.forEach(btn => {
            if ((shiftDown && btn.keybind.includes("shift") 
                && btn.keybind.includes(shiftKeyConverter[key])) 
                || (altDown && btn.keybind.includes("alt") 
                && btn.keybind.includes(key))) {

                props.abilityFunc
                (
                    btn,
                    props.keybinds,
                    props.setKeybinds,
                    props.abilityFuncArgs[0], 
                    props.abilityFuncArgs[1], 
                    props.abilityFuncArgs[2]
                );
            } else {
                if (btn.keybind === key) {
                    props.abilityFunc
                    (
                        btn, 
                        props.keybinds,
                        props.setKeybinds,
                        props.abilityFuncArgs[0],
                        props.abilityFuncArgs[1], 
                        props.abilityFuncArgs[2]
                        );
                    }
                }
            }
        );

        for (const keybind in props.keybinds.movement) {
            if (key === props.keybinds.movement[keybind]) {
                props.movementFunc
                (
                    keybind, 
                    props.movementFuncArgs[0], 
                    props.movementFuncArgs[1]
                );
            }
        }
    }

    
    return;
}