import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityGrid from "./reusable-components/AbilityGrid";
import GameGrid from "./battle-components/GameGrid";
import pLogic from "./logic/positionLogic";
import KeyboardEventHandler from "./utility/KeyboardEventHandler";
import "./css/Battle.css";
import cLogic from "./logic/combatLogic";

export default function Battle(props) {
    const [playerPosition, setPlayerPosition] = useState(pLogic.pInitialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.eInitialPos);
    const playerPosRef = useRef(pLogic.pInitialPos);
    const enemyPosRef = useRef(pLogic.initialPos);
    const cellsRef = useRef([]);
    const [playerDmgEvent, setPlayerDmgEvent] = useState({});
    const [enemyDmgEvent, setEnemyDmgEvent] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        enemyPosRef.current = enemyPosition;
    }, [enemyPosition]);

    useEffect(() => {
        playerPosRef.current = playerPosition;
    }, [playerPosition]);

    useEffect(() => {
        handleEnemyActions();
    }, []);
    
    const handleEnemyActions = () => {
        setInterval(() => {
            let availablePosList = pLogic.findAvailablePositions(enemyPosRef.current);
            let selectedPos = Math.floor(Math.random() * availablePosList.length);
            pLogic.findCoordinatesForPos(availablePosList[selectedPos], setEnemyPosition, playerPosition);
            cLogic.startEnemyAbilityCd({id: "singe", cooldown: 5000}, playerPosRef.current, enemyPosRef.current, cellsRef, setEnemyDmgEvent);
        }, 1000);
    }

    return (
        <div id="b-container">
            <GameGrid 
            playerPosition={playerPosition}
            enemyPosition={enemyPosition} 
            cellsRef={cellsRef} 
            playerDmgEvent={playerDmgEvent}
            enemyDmgEvent={enemyDmgEvent} />
            
            <AbilityGrid combatDisplay={true} hotbar={props.keybinds.hotbar} abilities={props.abilities} />

            <KeyboardEventHandler
            keybinds={props.keybinds}
            setKeybinds={props.setKeybinds}
            movementFuncArgs={[enemyPosition, playerPosition, setPlayerPosition]} 
            abilityFuncArgs={[props.abilities, cellsRef, playerPosition, enemyPosition, setPlayerDmgEvent]} />
        </div>
    )
}

