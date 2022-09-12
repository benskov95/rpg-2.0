import { useNavigate } from "react-router-dom";
import "./css/Menu.css";

export default function Menu() {
    const navigate = useNavigate();

    const goToBattle = () => {
        navigate("/rpg/battle");
    }

    const goToEquipment = () => {
        navigate("/rpg/equipment");
    }

    return (
        <div id="m-container">
            <div className="battle-section" onClick={goToBattle}>
                <span className="section-text">Battle</span>
            </div>
            <div id="flex-sections">
                <div id="equipment-section" onClick={goToEquipment}>
                    <span className="section-text">Equipment &amp; Loadout</span>
                </div>
                <div id="shop-section">
                    <span className="section-text">Shop</span>
                </div>
            </div>
        </div>
    )
}