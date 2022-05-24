import { useEffect, useRef, useState } from "react";
import "./css/GameGrid.css";
import mLogic from "./logic/movementLogic";

export default function GameGrid() {
    const grid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const initialPos = {x: 1, y: 1};
    const [playerPosition, setPlayerPosition] = useState(initialPos);
    const [enemyPosition, setEnemyPosition] = useState(initialPos);
    const enemyPosRef = useRef(initialPos);
    const [cdText, setCdText] = useState("");

    useEffect(() => {
        window.addEventListener("keydown", handleMovementInput);
        return () => {
            window.removeEventListener("keydown", handleMovementInput);
        }
    });

    useEffect(() => {
        enemyPosRef.current = enemyPosition;
    });

    const handleMovementInput = (e) => {
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
                if (playerPosition.y < 2) {
                    newPos.y += 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "d":
                if (playerPosition.x < 2) {
                    newPos.x += 1;
                    setPlayerPosition(newPos);
                }
                break;
            default:
                break;
        }
    }

    const handleEnemyMovement = () => {
        setInterval(() => {
            let availablePosList = mLogic.findAvailablePositions(grid, enemyPosRef.current);
            let selectedPos = Math.floor(Math.random() * availablePosList.length);
            mLogic.findCoordinatesForPos(grid, availablePosList[selectedPos], setEnemyPosition);
        }, 2000);
    }

    const løg = (e) => {
        let updateInterval = 1000 / 60;
        let time = 2000 - updateInterval;
        e.target.style.opacity = 0.2;
        console.log(e.target.style)
        
        const i = setInterval(() => {
            // e.target.textContent = (time / 1000).toFixed(2);
            setCdText((time / 1000).toFixed(2));
            time -= updateInterval;

            if (time < 0) {
                e.target.style = "";
                setCdText("");
                clearInterval(i);
            }
        }, updateInterval);
    }

    return (
        <div id="container">
            <div className="game-grid">
                {grid.map(row => {
                    return (
                        row.map(cell => {
                            return (
                                <div className="p-tile" key={cell}>
                                    {cell === grid[playerPosition.y][playerPosition.x] &&
                                        <img className="participant-img" src="https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png" alt="" /> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
            <div className="game-grid">
                {grid.map(row => {
                    return (
                        row.map(cell => {
                            return (
                                <div className="e-tile" key={cell}>
                                    {cell === grid[enemyPosition.y][enemyPosition.x] &&
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
                    <p style={{position: "absolute", textAlign: "center", width: "3em", marginLeft: "3px", fontSize: "14px"}}>{cdText}</p>
                    <img onClick={løg} className="ability-img" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbViMjSEIerg64-6m-J_Qz4BD6MPhHHIWATw&usqp=CAU" />
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

