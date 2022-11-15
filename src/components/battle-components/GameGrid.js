import { useEffect, useRef, useState } from "react";
import pLogic from "../logic/positionLogic";
import iconConverter from "../utility/iconConverter";

export default function GameGrid(props) {
    const playerHpRef = useRef();
    const enemyHpRef = useRef();
    const {playerDmgEvent, enemyDmgEvent} = props;
    const [dmgEvents, setDmgEvents] = useState({pDmgList: [], eDmgList: []});
    const counterRef = useRef(0);

    useEffect(() => {
        handleDmgEvent("player");
    }, [playerDmgEvent]);

    useEffect(() => {
        handleDmgEvent();
    }, [enemyDmgEvent]);

    const handleDmgEvent = (eventInitiator) => {
        let dmgEvent = eventInitiator === "player" ? playerDmgEvent : enemyDmgEvent;
        let hpRef = eventInitiator === "player" ? enemyHpRef : playerHpRef;

        if (dmgEvent.directDmg !== 0 && dmgEvent.directDmg !== undefined) {
            hpRef.current.value -= dmgEvent.directDmg;
            let copy = {...dmgEvents};

            if (eventInitiator === "player") {
                copy.eDmgList.push(dmgEvent);
            } else {
                copy.pDmgList.push(dmgEvent);
            } 
            setDmgEvents(copy);

            if (dmgEvent.dotValues.length > 0) {
                handleDotDamage(dmgEvent, hpRef);
            }
        }
    }

    const handleDotDamage = (dmgEvent, hpRef) => {
        const i = setInterval(() => {
            if (counterRef.current < dmgEvent.dotValues.length) {
                hpRef.current.value -= dmgEvent.dotValues[counterRef.current];
                counterRef.current += 1;
                return;
            } else {
                counterRef.current = 0;
                clearInterval(i);
            }
        }, dmgEvent.dotInterval);
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
                                        {dmgEvents.pDmgList.map((dmgEvent, abIndex) => {
                                            return (
                                                <div key={`ab${abIndex}`}>
                                                    <p 
                                                    className="dmg-display" 
                                                    style={{fontSize: dmgEvent.isCrit ? "1.5rem" : "1.2rem"}}>
                                                        {dmgEvent.isCrit ? `${dmgEvent.directDmg} (crit)` : dmgEvent.directDmg}
                                                    </p>

                                                    {dmgEvent.dotValues.map((dotVal, dotIndex) => {
                                                        return (
                                                            <p 
                                                            className="dot-display" 
                                                            key={`dot${dotIndex}`} 
                                                            style={{animationDelay: `${(dotIndex + 1) * dmgEvent.dotInterval}ms`}}>
                                                                {dotVal}
                                                            </p>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}  
                                        <img className="participant-img" src={iconConverter["wizard"]} alt="" />
                                        <span className="health-label">235</span>
                                        <progress className="health-bar" ref={playerHpRef} value={100} max={100} />
                                    </div>
                                }
                                {cell === pLogic.battleGrid[props.enemyPosition.y][props.enemyPosition.x] &&
                                    <div className="participant">
                                        {dmgEvents.eDmgList.map((dmgEvent, abIndex) => {
                                            return (
                                                <div key={`ab${abIndex}`}>
                                                    <p 
                                                    className="dmg-display" 
                                                    style={{fontSize: dmgEvent.isCrit ? "1.5rem" : "1.2rem"}}>
                                                        {dmgEvent.isCrit ? `${dmgEvent.directDmg} (crit)` : dmgEvent.directDmg}
                                                    </p>

                                                    {dmgEvent.dotValues.map((dotVal, dotIndex) => {
                                                        return (
                                                            <p 
                                                            className="dot-display" 
                                                            key={`dot${dotIndex}`} 
                                                            style={{animationDelay: `${(dotIndex + 1) * dmgEvent.dotInterval}ms`}}>
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