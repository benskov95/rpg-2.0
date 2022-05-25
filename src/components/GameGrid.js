import { useEffect, useRef, useState } from "react";
import "./css/GameGrid.css";
import cLogic from "./logic/combatLogic";
import pLogic from "./logic/positionLogic";

export default function GameGrid() {
    const [playerPosition, setPlayerPosition] = useState(pLogic.initialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.initialPos);
    const [cdText, setCdText] = useState("");
    const enemyPosRef = useRef(pLogic.initialPos);
    const abilitiesRef = useRef([]);
    const eTilesRef = useRef([]);
    const currentTileRef = useRef("");

    useEffect(() => {
        enemyPosRef.current = enemyPosition;
        window.addEventListener("keydown", handleInput);
        return () => {
            window.removeEventListener("keydown", handleInput);
        }
    });

    const handleInput = (e) => {
        let newPos = {...playerPosition};

        switch(e.key) {
            case "w":
                if (playerPosition.y > 0) {
                    newPos.y -= 1;
                    setPlayerPosition(newPos);
                } 
                break;
            case "a":
                if (playerPosition.x > 0) {
                    newPos.x -= 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "s":
                if (playerPosition.y < (pLogic.pGrid[0].length - 1)) {
                    newPos.y += 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "d":
                if (playerPosition.x < (pLogic.pGrid[0].length - 1)) {
                    newPos.x += 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "1":
                cLogic.startAbilityCd(
                    abilitiesRef.current[0],
                    setCdText,
                    currentTileRef,
                    eTilesRef,
                    playerPosition
                );
                break;
            default:
                break;
        }
    }

    const handleEnemyMovement = () => {
        setInterval(() => {
            let availablePosList = pLogic.findAvailablePositions(enemyPosRef.current);
            let selectedPos = Math.floor(Math.random() * availablePosList.length);
            pLogic.findCoordinatesForPos(availablePosList[selectedPos], setEnemyPosition);
        }, 1000);
    }

    return (
        <div id="container">
            <div className="game-grid">
                {pLogic.pGrid.map(row => {
                    return (
                        row.map(cell => {
                            return (
                                <div 
                                className="tile" 
                                key={cell}
                                style={{border: "1px solid blue"}}>
                                    {cell === pLogic.pGrid[playerPosition.y][playerPosition.x] &&
                                        <img className="participant-img" src="https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png" alt="" /> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
            <div className="game-grid">
                {pLogic.eGrid.map((row, i) => {
                    return (
                        row.map((cell, j) => {
                            let idxDiff = i > 0 ? i * 3 : 0;
                            return (
                                <div 
                                className="tile" 
                                ref={el => eTilesRef.current[j + idxDiff] = el}
                                key={cell}
                                style={{border: "1px solid red"}}>
                                    {cell === pLogic.eGrid[enemyPosition.y][enemyPosition.x] &&
                                        <img className="participant-img" src="https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png" alt="" /> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
            <div id="ability-grid">
                    <div className="ability">
                    <p className="ability-bind">1</p>
                    <p className="ability-cd-text">{cdText}</p>
                    <img 
                    className="ability-img"
                    name="test"
                    ref={el => abilitiesRef.current.push(el)} 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/775fee27-cfe5-4c65-823e-c8e857a594f4/d8m8d0k-4e43eda4-f0a7-49fe-8be7-260aee2079cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NWZlZTI3LWNmZTUtNGM2NS04MjNlLWM4ZTg1N2E1OTRmNFwvZDhtOGQway00ZTQzZWRhNC1mMGE3LTQ5ZmUtOGJlNy0yNjBhZWUyMDc5Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yKeEd03P0xzRFfYDjqDrDsQ3DoguRDKCp_OJrCGW4Fg" 
                    alt="" />
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
                <div className="ability">
                </div>
                <div className="ability">
                </div>
            </div>
        </div>
    )
}

