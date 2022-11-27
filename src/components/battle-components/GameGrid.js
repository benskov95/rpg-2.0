import { useEffect, useRef, useState } from "react";
import pLogic from "../logic/positionLogic";
import iconConverter from "../utility/iconConverter";

export default function GameGrid(props) {
    const playerHpRef = useRef();
    const enemyHpRef = useRef();
    const counterRef = useRef(0);
    const [combatLog, setCombatLog] = useState("");
    const combatLogRef = useRef("");
    const {playerCombatEvent, enemyCombatEvent} = props;

    useEffect(() => {
        // need ref because of setinterval for dots
        combatLogRef.current = combatLog;
    }, [combatLog]);

    useEffect(() => {
        handleCombatEvent("player");
    }, [playerCombatEvent]);

    useEffect(() => {
        handleCombatEvent();
    }, [enemyCombatEvent]);

    const handleCombatEvent = (initiator) => {
        let combatEvent = initiator === "player" ? playerCombatEvent : enemyCombatEvent;
        let hpRef = initiator === "player" ? enemyHpRef : playerHpRef;
        addLineToLog(initiator, combatEvent, false);

        if (combatEvent.directDmg !== 0 && combatEvent.directDmg !== undefined) {
            hpRef.current.value -= combatEvent.directDmg;

            if (combatEvent.dotValues.length > 0) {
                handleDotDamage(initiator, combatEvent, hpRef);
            }
        }
    }

    const handleDotDamage = (initiator, combatEvent, hpRef) => {
        const i = setInterval(() => {
            if (counterRef.current < combatEvent.dotValues.length) {
                hpRef.current.value -= combatEvent.dotValues[counterRef.current];
                addLineToLog(initiator, combatEvent, true);
                counterRef.current += 1;
                return;
            } 
            counterRef.current = 0;
            clearInterval(i);   

        }, combatEvent.dotInterval);
    }

    const addLineToLog = (initiator, combatEvent, isDot) => {
        // ability name instead of id - change backend
        if (combatEvent.abilityId !== undefined) {
            if (initiator === "player") {
                if (isDot) {
                    setCombatLog(combatLogRef.current + `Your ${combatEvent.abilityId} (damage over time) did ${combatEvent.dotValues[counterRef.current]} damage.\n`);
                    return;
                }
                if (!combatEvent.directDmg) {
                    setCombatLog(combatLog + `You used ${combatEvent.abilityId}\n`);
                    return;
                }
                setCombatLog(combatLog + `Your ${combatEvent.abilityId} did ${combatEvent.directDmg} direct damage.\n`);
            } else {
                if (isDot) {
                    setCombatLog(combatLogRef.current + `EnemyID's ${combatEvent.abilityId} (damage over time) did ${combatEvent.dotValues[counterRef.current]} damage to you.\n`);
                    return;
                }
                if (!combatEvent.directDmg) {
                    setCombatLog(combatLog + `EnemyID used ${combatEvent.abilityId}\n`);
                    return;
                }
                setCombatLog(combatLog + `EnemyID's ${combatEvent.abilityId} did ${combatEvent.directDmg} direct damage to you.\n`);
            }
        }
    } 

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
                                            <progress className="health-bar" ref={enemyHpRef} value={1000} max={1000} /> 
                                        </div> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
            <div style={{position: "absolute", left: "0", right: "0", backgroundColor: "olive", width: "20vw", height: "30vh", margin: "5.5vw auto", textAlign: "left"}}>
                <p style={{padding: "0.5rem"}}>{combatLog}</p>
            </div>
        </>
    )
}