import pLogic from "./logic/positionLogic";

export default function GameGrid(props) {
    return (
        <div className="game-grid">
            {pLogic.battleGrid.map((row, i) => {
                return (
                    row.map((tile, j) => {
                        let idxDiff = i > 0 ? i * 3 : 0;
                        return (
                            <div 
                            className="tile" 
                            ref={el => props.tilesRef.current[j + idxDiff] = el}
                            key={tile}
                            style={{border: `1px solid ${props.borderColor}`}}>
                                {tile === pLogic.battleGrid[props.position.y][props.position.x] &&
                                    <img className="participant-img" src="https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png" alt="" /> 
                                }
                            </div>
                        )
                    }))
                })
            }
        </div>
    )
}