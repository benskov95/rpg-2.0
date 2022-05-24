import { useEffect, useRef, useState } from "react";
import "./css/GameGrid.css";
import mLogic from "./logic/movementLogic";

export default function GameGrid() {
    const grid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const initialPos = {x: 1, y: 1};
    const [playerPosition, setPlayerPosition] = useState(initialPos);
    const [enemyPosition, setEnemyPosition] = useState(initialPos);
    const enemyPosRef = useRef(initialPos);

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
        // confirm functions in movementLogic work
        setInterval(() => {
            let availablePosList = mLogic.findAvailablePositions(enemyPosRef.current);
            let selectedPos = Math.floor(Math.random() * availablePosList.length);
            mLogic.findCoordinatesForPos(grid, availablePosList[selectedPos]);
        }, 2000);
    }

    // const findCoordinatesForPos = (cellNumber) => {
    //     let yCount = 0;
    //     grid.forEach(row => {
    //         let xCount = 0;
    //         row.forEach(cell => {
    //             if (cell === cellNumber) {
    //                 let newPos = {x: xCount, y: yCount};
    //                 setEnemyPosition(newPos);
    //             } else {
    //                 xCount++;
    //             }
    //         });
    //         yCount++;
    //     });
    // }

    // const findAvailablePositions = (pos) => {
    //     let posList = [];
    //     posList.push(grid[pos.y][pos.x]);

    //     if (pos.y > 0) {
    //         posList.push(grid[pos.y - 1][pos.x]);
    //     }

    //     if (pos.x > 0) {
    //         posList.push(grid[pos.y][pos.x - 1]);
    //     }
        
    //     if (pos.y < 2) {
    //         posList.push(grid[pos.y + 1][pos.x]);
    //     }

    //     if (pos.x < 2) {
    //         posList.push(grid[pos.y][pos.x + 1]); 
    //     }

    //     return posList;
    // }

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
                        })
                    )
                })}
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
                        })
                    )
                })}
            </div>
            <button onClick={handleEnemyMovement}>Test</button>
        </div>
    )
}