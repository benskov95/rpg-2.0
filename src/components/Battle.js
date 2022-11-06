import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityGrid from "./reusable-components/AbilityGrid";
import GameGrid from "./battle-components/GameGrid";
import pLogic from "./logic/positionLogic";
import KeyboardEventHandler from "./utility/KeyboardEventHandler";
import "./css/Battle.css";

export default function Battle(props) {
    const [playerPosition, setPlayerPosition] = useState(pLogic.pInitialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.eInitialPos);
    const cellsRef = useRef([]);
    const enemyPosRef = useRef(pLogic.initialPos);
    const [playerDmg, setPlayerDmg] = useState(0);
    const navigate = useNavigate();

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

    const goBack = () => {
        navigate("/rpg");
    }

    return (
        <div id="b-container">
            <GameGrid 
            playerPosition={playerPosition}
            enemyPosition={enemyPosition} 
            cellsRef={cellsRef} 
            playerDmg={playerDmg}
            setPlayerDmg={setPlayerDmg} />
            
            <AbilityGrid combatDisplay={true} hotbar={props.keybinds.hotbar} abilities={props.abilities} />

            {playerDmg}
            <button onClick={goBack} style={{margin:"30px 0px 0px 15px", float: "left"}}>Back</button>

            <KeyboardEventHandler
            keybinds={props.keybinds}
            setKeybinds={props.setKeybinds}
            movementFuncArgs={[playerPosition, setPlayerPosition]} 
            abilityFuncArgs={[props.abilities, cellsRef, playerPosition, enemyPosition, setPlayerDmg]} />
        </div>
    )
}

