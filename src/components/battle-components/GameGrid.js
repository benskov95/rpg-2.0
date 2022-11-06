import { useEffect, useRef } from "react";
import pLogic from "../logic/positionLogic";
import iconConverter from "../utility/iconConverter";

export default function GameGrid(props) {
    const playerHpRef = useRef();
    const enemyHpRef = useRef();
    const {playerDmg, setPlayerDmg} = props;

    useEffect(() => {
        enemyHpRef.current.value -= playerDmg;
        setPlayerDmg(0);
    }, [playerDmg]);

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
                                        <div className="participant">
                                            <img className="participant-img" src={iconConverter["wizard"]} alt="" />
                                            <span className="health-label">235</span>
                                            <progress className="health-bar" ref={playerHpRef} value={100} max={100} />
                                        </div>
                                    }
                                    {cell === pLogic.battleGrid[props.enemyPosition.y][props.enemyPosition.x] &&
                                        <div className="participant">
                                            <img className="participant-img" src={iconConverter["wizard"]} alt="" />
                                            <span className="health-label">1003</span>
                                            <progress className="health-bar" ref={enemyHpRef} value={100} max={100} /> 
                                        </div> 
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