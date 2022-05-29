import { useNavigate } from "react-router-dom";

export default function Menu() {
    const navigate = useNavigate();

    const goToBattle = () => {
        navigate("/battle");
    }

    const goToEquipment = () => {
        navigate("/equipment")
    }

    return (
        <div style={{marginTop: "25vh"}}>
            <button onClick={goToBattle}>Battle</button>
            <br />
            <button onClick={goToEquipment}>Equipment &amp; loadout</button>
            <br />
            <button>Shop</button>
        </div>
    )
}