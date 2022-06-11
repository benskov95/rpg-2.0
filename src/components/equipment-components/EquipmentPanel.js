import iconConverter from "../utility/iconConverter";

export default function EquipmentPanel() {

    const showTooltip = (e) => {
        let tooltip = e.target.children[1];
        if (tooltip !== undefined) {
            tooltip.hidden = false;
        } 
    }

    const hideTooltip = (e) => {
        let tooltip = e.target.children[1];
        if (tooltip !== undefined) {
            tooltip.hidden = true;
        } 
    }

    return (
        <div id="equipment-box">
            <ul id="equipment-list-l">
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["helmet"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["necklace"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["cloak"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["chest"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["bracers"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
            </ul>

            <div id="weapon" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                <img id="weapon-img" src={iconConverter["weapon"]} alt="" />
                <div id="weapon-tooltip" hidden={true}>
                    <p className="tooltip-name">Name</p>
                    <p className="tooltip-description">+10 stam<br />+10 int</p>
                </div>
            </div>


            <ul id="equipment-list-r">
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["gloves"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["legs"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["boots"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["ring"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
                <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img className="equipment-list-element-img" src={iconConverter["ring"]} alt="" />
                    <div className="tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}