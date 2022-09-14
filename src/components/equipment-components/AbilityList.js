import AbilityGrid from "../reusable-components/AbilityGrid";

export default function AbilityList(props) {
    return (
        <div id="equipment-abilities">
            <AbilityGrid combatDisplay={false} hotbar={props.keybinds.hotbar} abilities={props.abilities} />
            <ul id="equipment-ability-list">
                <li className="equipment-ability-list-element">
                    <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                    <p className="equipment-ability-list-element-text">Some name</p>
                </li>
                <li className="equipment-ability-list-element">
                    <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                    <p className="equipment-ability-list-element-text">Some name</p>
                </li>
                <li className="equipment-ability-list-element">
                    <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                    <p className="equipment-ability-list-element-text">Some name</p>
                </li>
                <li className="equipment-ability-list-element">
                    <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                    <p className="equipment-ability-list-element-text">Some name</p>
                </li>
                <li className="equipment-ability-list-element">
                    <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                    <p className="equipment-ability-list-element-text">Some name</p>
                </li>
                <li className="equipment-ability-list-element">
                    <img className="equipment-ability-list-element-img" src="https://db4sgowjqfwig.cloudfront.net/campaigns/87145/assets/726836/Colorless_Fire.jpg?1492799635" alt="" />
                    <p className="equipment-ability-list-element-text">Some name</p>
                </li>
            </ul>
    </div>
    )
}