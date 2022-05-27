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
        props.abilityFuncArgs[0].forEach(ability => {
            if ((shiftDown && ability.keybind.includes("shift") 
                && ability.keybind.includes(keyConverter[key])) 
                || (altDown && ability.keybind.includes("alt") 
                && ability.keybind.includes(keyConverter[key]))) {

                props.abilityFunc
                (
                    ability,
                    props.abilityFuncArgs[0], 
                    props.abilityFuncArgs[1], 
                    props.abilityFuncArgs[2], 
                    props.abilityFuncArgs[3], 
                    props.abilityFuncArgs[4]
                );
            } else {
                if (ability.keybind === key) {
                    props.abilityFunc
                    (
                        ability, 
                        props.abilityFuncArgs[0],
                        props.abilityFuncArgs[1], 
                        props.abilityFuncArgs[2], 
                        props.abilityFuncArgs[3], 
                        props.abilityFuncArgs[4]
                        );
                    }
                }
            }
        );

        // swap key with generic name variable (like up, down etc.) with associated keybind
        props.movementFunc
        (
            key, 
            props.movementFuncArgs[0], 
            props.movementFuncArgs[1]
        );
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