import pLogic from "../logic/positionLogic";
import iconConverter from "../utility/iconConverter";

export default function GameGrid(props) {
    return (
        <>
            <div className="game-grid">
                {pLogic.battleGrid.map((row, i) => {
                    return (
                        row.map((cell, j) => {
                            let idxDiff = i > 0 ? i * 8 : 0;
                            return (
                                <div 
                                className="cell" 
                                id={`{\"x\": ${j}, \"y\": ${i}}`}
                                ref={el => props.cellsRef.current[j + idxDiff] = el}
                                key={cell}>
                                    {cell === pLogic.battleGrid[props.playerPosition.y][props.playerPosition.x] &&
                                        <img className="participant-img" src={iconConverter["wizard"]} alt="" /> 
                                    }
                                    {cell === pLogic.battleGrid[props.enemyPosition.y][props.enemyPosition.x] && 
                                        <img className="participant-img" src={iconConverter["wizard"]} alt="" /> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
        </>
    )
}