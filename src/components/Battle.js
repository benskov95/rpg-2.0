import { useEffect, useRef, useState } from "react";
import "./css/Battle.css";
import GameGrid from "./GameGrid";
import cLogic from "./logic/combatLogic";
import pLogic from "./logic/positionLogic";
import KeyboardEventHandler from "./utility/KeyboardEventHandler";

export default function Battle() {
    const [playerPosition, setPlayerPosition] = useState(pLogic.initialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.initialPos);
    const [cdText, setCdText] = useState("");
    const abilitiesRef = useRef([]);
    const eTilesRef = useRef([]);
    const pTilesRef = useRef([]);
    const enemyPosRef = useRef(pLogic.initialPos);
    const currentTileRef = useRef("");

    useEffect(() => {
        enemyPosRef.current = enemyPosition;
        window.addEventListener("keydown", handleInput);
        return () => {
            window.removeEventListener("keydown", handleInput);
        }
    });

    const handleInput = (e) => {
        // new component for abilities with logic from keyboardeventhandler
        pLogic.handlePlayerMovement(e, playerPosition, setPlayerPosition);
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
            <GameGrid 
            position={playerPosition} 
            tilesRef={pTilesRef}
            borderColor="blue" />

            <GameGrid
            position={enemyPosition}
            tilesRef={eTilesRef}
            borderColor="red" />

            <div id="ability-grid">
                    <div className="ability">
                    <p className="ability-bind">S1</p>
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

