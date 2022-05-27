import { useEffect, useRef, useState } from "react";
import AbilityGrid from "./AbilityGrid";
import "./css/Battle.css";
import GameGrid from "./GameGrid";
import cLogic from "./logic/combatLogic";
import pLogic from "./logic/positionLogic";
import KeyboardEventHandler from "./utility/KeyboardEventHandler";

export default function Battle() {
    const [playerPosition, setPlayerPosition] = useState(pLogic.initialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.initialPos);
    const [abilities, setAbilities] = useState([{name: "test1", opacity: 1, cdText: "", keybind: "shift+1"}, {name: "test2", opacity: 1, cdText: "", keybind: "1"}])
    const eTilesRef = useRef([]);
    const pTilesRef = useRef([]);
    const enemyPosRef = useRef(pLogic.initialPos);
    const currentTileRef = useRef("");

    useEffect(() => {
        enemyPosRef.current = enemyPosition;
    }, [enemyPosition]);
    
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
            playerPosition={playerPosition} 
            pTilesRef={pTilesRef}
            ePosition={enemyPosition}
            eTilesRef={eTilesRef} />
            
            <AbilityGrid abilities={abilities} />

            <KeyboardEventHandler
            movementFunc={pLogic.handlePlayerMovement}
            movementFuncArgs={[playerPosition, setPlayerPosition]} 
            abilityFunc={cLogic.startAbilityCd}
            abilityFuncArgs={[
                abilities, 
                setAbilities, 
                currentTileRef, 
                eTilesRef, 
                playerPosition
            ]}
            />

        </div>
    )
}

