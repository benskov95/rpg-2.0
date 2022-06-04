import "./css/Equipment.css"
import iconConverter from "./utility/iconConverter";
import AbilityGrid from "./AbilityGrid";

export default function Equipment(props) {

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
        <div id="e-container" style={{position: "relative"}}>
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
            </div>

            <div id="inventory">
                <div id="inventory-filter">
                    <div>
                        <img className="inventory-filter-option" style={{backgroundColor: "white"}} src={iconConverter["bag"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["potion"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["weapon"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["helmet"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["chest"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["cloak"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["bracers"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["gloves"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["legs"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["boots"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["necklace"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                    <div>
                        <img className="inventory-filter-option" src={iconConverter["ring"]} alt="" />
                        <p className="inventory-filter-option-count">23</p>
                    </div>
                </div>
                
                <ul id="inventory-list">
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                    <li className="inventory-list-element">
                        <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <p className="inventory-list-element-text">Gang weed</p>
                    </li>
                </ul>
            </div>

            <div style={{border: "1px solid gray", position: "absolute", top: "0", width: "40%", marginLeft: "45%", maxHeight: "49%"}}>
                <p style={{borderBottom: "1px solid white"}}>Gang weed</p>
                <img style={{height: "80px", width: "80px"}} src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                <p style={{color: "red"}}>450 - 733</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div id="equipment-abilities">
                <AbilityGrid combatDisplay={false} hotbar={props.keybinds.hotbar} abilities={props.abilities} />
                <ul id="equipment-ability-list">
                    <li className="equipment-ability-list-element">
                        <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                        <p className="equipment-ability-list-element-text">Gang weed</p>
                    </li>
                    <li className="equipment-ability-list-element">
                        <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                        <p className="equipment-ability-list-element-text">Gang weed</p>
                    </li>
                    <li className="equipment-ability-list-element">
                        <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                        <p className="equipment-ability-list-element-text">Gang weed</p>
                    </li>
                    <li className="equipment-ability-list-element">
                        <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                        <p className="equipment-ability-list-element-text">Gang weed</p>
                    </li>
                    <li className="equipment-ability-list-element">
                        <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                        <p className="equipment-ability-list-element-text">Gang weed</p>
                    </li>
                    <li className="equipment-ability-list-element">
                        <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                        <p className="equipment-ability-list-element-text">Gang weed</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}