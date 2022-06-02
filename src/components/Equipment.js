import "./css/Equipment.css"
import iconConverter from "./utility/iconConverter";

export default function Equipment() {

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
        <>
            <div id="equipment-box">
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

                <ul id="equipment-list-l">
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src={iconConverter["helm"]} alt="" />
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
            </div>

            <div id="armor-inventory">
                <div id="armor-inventory-filter">
                    <img className="armor-inventory-filter-option" style={{border: "1px solid white"}} src={iconConverter["bag"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["weapon"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["helm"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["chest"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["cloak"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["bracers"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["gloves"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["legs"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["boots"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["necklace"]} alt="" />
                    <img className="armor-inventory-filter-option" src={iconConverter["ring"]} alt="" />
                </div>
                <ul id="armor-inventory-list">
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="armor-inventory-list-element">
                        <img className="armor-inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="armor-inventory-list-element-text">Gang weed</p>
                    </li>
                </ul>
            </div>
        </>
    )
}