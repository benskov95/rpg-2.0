import iconConverter from "../utility/iconConverter";

export default function Inventory() {
    return (
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
                    <p className="inventory-list-element-text">Some name</p>
                </li>
                <li className="inventory-list-element">
                    <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                    <p className="inventory-list-element-text">Some name</p>
                </li>
                <li className="inventory-list-element">
                    <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                    <p className="inventory-list-element-text">Some name</p>
                </li>
                <li className="inventory-list-element">
                    <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                    <p className="inventory-list-element-text">Some name</p>
                </li>
                <li className="inventory-list-element">
                    <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                    <p className="inventory-list-element-text">Some name</p>
                </li>
                <li className="inventory-list-element">
                    <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                    <p className="inventory-list-element-text">Some name</p>
                </li>
                <li className="inventory-list-element">
                    <img className="inventory-list-element-img" src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" alt="" />
                    <p className="inventory-list-element-text">Some name</p>
                </li>
            </ul>
        </div>
    )
}