import { useNavigate } from "react-router-dom"

export default function Menu() {
    const navigate = useNavigate();

    const goToBattle = () => {
        navigate("/battle");
    }
    return (
        <div style={{marginTop: "25vh"}}>
            <button onClick={goToBattle}>Battle</button>
            <br />
            <button>Equipment &amp; load-out</button>
            <br />
            <button>Shop</button>
        </div>
    )
}