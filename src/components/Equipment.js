import "./css/Equipment.css"
import EquipmentPanel from "./equipment-components/EquipmentPanel";
import Inventory from "./reusable-components/Inventory";
import AbilityList from "./equipment-components/AbilityList";
import EquipmentHandler from "./equipment-components/EquipmentHandler";

export default function Equipment(props) {

    return (
        <div id="e-container">
            <EquipmentPanel />
            <Inventory />
            <EquipmentHandler />
            <AbilityList keybinds={props.keybinds} abilities={props.abilities} />
        </div>
    )
}