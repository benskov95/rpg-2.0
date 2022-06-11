import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityGrid from "./reusable-components/AbilityGrid";
import GameGrid from "./battle-components/GameGrid";
import cLogic from "./logic/combatLogic";
import pLogic from "./logic/positionLogic";
import KeyboardEventHandler from "./utility/KeyboardEventHandler";
import "./css/Battle.css";

export default function Battle(props) {
    const [playerPosition, setPlayerPosition] = useState(pLogic.initialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.initialPos);
    const eTilesRef = useRef([]);
    const pTilesRef = useRef([]);
    const enemyPosRef = useRef(pLogic.initialPos);
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
        navigate("/");
    }

    return (
        <div id="b-container">

            <GameGrid 
            playerPosition={playerPosition} 
            pTilesRef={pTilesRef}
            ePosition={enemyPosition}
            eTilesRef={eTilesRef} />
            
            <AbilityGrid combatDisplay={true} hotbar={props.keybinds.hotbar} abilities={props.abilities} />

            <button onClick={goBack} style={{margin:"30px 0px 0px 15px", float: "left"}}>Back</button>
            
            <KeyboardEventHandler
            keybinds={props.keybinds}
            setKeybinds={props.setKeybinds}
            movementFunc={pLogic.handlePlayerMovement}
            movementFuncArgs={[playerPosition, setPlayerPosition]} 
            abilityFunc={cLogic.startAbilityCd}
            abilityFuncArgs={[props.abilities, eTilesRef, playerPosition]} />
        </div>
    )
}

