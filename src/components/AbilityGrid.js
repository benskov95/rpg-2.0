import { keybindConverter } from "./utility/keyConverter"

export default function AbilityGrid(props) {
    return (
        <div id="ability-grid">
            {props.hotbar.map(btn => {
                let ability = props.abilities.find(ab => ab.id === btn.abilityId);
                return (
                    <div className="ability" key={btn.name}>
                        {ability !== undefined && 
                        <>
                            <p className="ability-bind">{keybindConverter(btn.keybind)}</p>
                            <p className="ability-cd-text">{btn.cdText}</p>
                            <img 
                            className="ability-img"
                            style={{opacity: btn.opacity}}
                            name={btn.name}
                            src={ability.image} 
                            alt="" />
                        </>
                        }
                    </div>
                )
            })}
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
        </div>
    )
}