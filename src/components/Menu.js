import { useNavigate } from "react-router-dom";
import "./css/Menu.css";

export default function Menu() {
    const navigate = useNavigate();

    const goToBattle = () => {
        navigate("/battle");
    }

    const goToEquipment = () => {
        navigate("/equipment")
    }

    return (
        <div id="m-container">
            <div id="battle-section" onClick={goToBattle}>
                <p className="section-text">Battle</p>
            </div>
            <div id="flex-sections">
                <div id="equipment-section" onClick={goToEquipment}>
                    <p className="section-text">Equipment &amp; Loadout</p>
                </div>
                <div id="shop-section">
                    <p className="section-text">Shop</p>
                </div>
            </div>
        </div>
    )
}