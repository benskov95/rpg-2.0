import "./css/Equipment.css"
import EquipmentPanel from "./EquipmentPanel";
import Inventory from "./Inventory";
import AbilityList from "./AbilityList";
import EquipmentHandler from "./EquipmentHandler";

export default function Equipment(props) {

    return (
        <div id="e-container" style={{position: "relative"}}>
            <EquipmentPanel />
            <Inventory />
            <EquipmentHandler />
            <AbilityList keybinds={props.keybinds} abilities={props.abilities} />
        </div>
    )
}