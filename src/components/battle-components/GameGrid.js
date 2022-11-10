import { useEffect, useRef, useState } from "react";
import pLogic from "../logic/positionLogic";
import iconConverter from "../utility/iconConverter";

export default function GameGrid(props) {
    const playerHpRef = useRef();
    const enemyHpRef = useRef();
    const {playerDmg} = props;
    const [dmgDisplay, setDmgDisplay] = useState({pDmgList: [], eDmgList: []});
    const cRef = useRef(0);

    useEffect(() => {
        handleDmgEvent();
    }, [playerDmg]);

    const handleDmgEvent = () => {
        if (playerDmg.finalDmg !== 0 && playerDmg.finalDmg !== undefined) {
            enemyHpRef.current.value -= playerDmg.finalDmg;
            let copy = {...dmgDisplay};
            copy.eDmgList.push(playerDmg);
            setDmgDisplay(copy);

            if (playerDmg.dotValues.length > 0) {
                handleDotDamage(playerDmg.dotValues, playerDmg.dotInterval);
            }
        }

    }

    const handleDotDamage = (dotValues, dotInterval) => {
        enemyHpRef.current.value -= dotValues[cRef.current];
        cRef.current += 1;

        if (cRef.current < dotValues.length) {
            setTimeout(() => {
                handleDotDamage(dotValues, dotInterval);
            }, dotInterval);
        } else {
            cRef.current = 0;
        }
    }

    return (
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
                                        {dmgDisplay.eDmgList.map((dmgEvent, abIndex) => {
                                            return (
                                                <div key={`ab${abIndex}`}>
                                                    <p 
                                                    className="dmg-value" 
                                                    style={{fontSize: dmgEvent.isCrit ? "1.5rem" : "1.2rem"}}>
                                                        {dmgEvent.isCrit ? `${dmgEvent.finalDmg} (crit)` : dmgEvent.finalDmg}
                                                    </p>

                                                    {dmgEvent.dotValues.map((dotVal, dotIndex) => {
                                                        return (
                                                            <p 
                                                            className="dot-value" 
                                                            key={`dot${dotIndex}`} 
                                                            style={{animationDelay: `${dotIndex * 1}s`}}>
                                                                {dotVal}
                                                            </p>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}  
                                        <img className="participant-img" src={iconConverter["wizard"]} alt="" />
                                        <span className="health-label">1003</span>
                                        <progress className="health-bar" ref={enemyHpRef} value={1000} max={1000} /> 
                                    </div> 
                                }
                            </div>
                        )
                    }))
                })
            }
        </div>
    )
}