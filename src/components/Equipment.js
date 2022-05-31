import "./css/Equipment.css"

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
                        <img className="equipment-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-gloves-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://icon-library.com/images/pants-icon-png/pants-icon-png-16.jpg" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_costume_armor_boot_foot_metal_knight_warrior_protection_leg_2-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_accessory_ring_wedding_gold_jewelry_gift_love-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_accessory_ring_wedding_gold_jewelry_gift_love-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                </ul>

                <ul id="equipment-list-l">
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/head_helmet_armor_warrior_knight_helm-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn1.iconfinder.com/data/icons/rpg-game-design/100/rpg_necklace-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn-icons-png.flaticon.com/512/5101/5101797.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn-icons-png.flaticon.com/512/4820/4820460.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                    <li className="equipment-list-element" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                        <img className="equipment-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                        <div className="tooltip" hidden={true}>
                            <p className="tooltip-name">Name</p>
                            <p className="tooltip-description">+10 stam<br />+10 int</p>
                        </div>
                    </li>
                </ul>

                <div id="weapon" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>
                    <img id="weapon-img" src="https://icon-library.com/images/weapon-icon/weapon-icon-12.jpg" alt="" />
                    <div id="weapon-tooltip" hidden={true}>
                        <p className="tooltip-name">Name</p>
                        <p className="tooltip-description">+10 stam<br />+10 int</p>
                    </div>
                </div>
            </div>
        </>
    )
}