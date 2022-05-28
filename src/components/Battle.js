import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AbilityGrid from "./AbilityGrid";
import "./css/Battle.css";
import GameGrid from "./GameGrid";
import cLogic from "./logic/combatLogic";
import pLogic from "./logic/positionLogic";
import KeyboardEventHandler from "./utility/KeyboardEventHandler";

export default function Battle() {
    const [playerPosition, setPlayerPosition] = useState(pLogic.initialPos);
    const [enemyPosition, setEnemyPosition] = useState(pLogic.initialPos);
    const [abilities, setAbilities] = useState([{id: 1, name: "test1", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/775fee27-cfe5-4c65-823e-c8e857a594f4/d8m8d0k-4e43eda4-f0a7-49fe-8be7-260aee2079cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NWZlZTI3LWNmZTUtNGM2NS04MjNlLWM4ZTg1N2E1OTRmNFwvZDhtOGQway00ZTQzZWRhNC1mMGE3LTQ5ZmUtOGJlNy0yNjBhZWUyMDc5Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yKeEd03P0xzRFfYDjqDrDsQ3DoguRDKCp_OJrCGW4Fg", cooldown: 2000, animation: {animationTime: 1500, animationInterval: 500}}, {id: 2, name: "test2", image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4f0080f-e6e6-426a-99e3-1f0d6fa996fc/d8ww5x8-88e106c7-6dde-4088-b437-20d7f52e63e2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZjAwODBmLWU2ZTYtNDI2YS05OWUzLTFmMGQ2ZmE5OTZmY1wvZDh3dzV4OC04OGUxMDZjNy02ZGRlLTQwODgtYjQzNy0yMGQ3ZjUyZTYzZTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8iQNZFOhgEp-2KTxoUdsUV_5oh9kv5Fj0x32PjrBgeE", cooldown: 8000, animation: {animationTime: 500, animationInterval: 500}}])
    const [keybinds, setKeybinds] = useState({movement: {up: "ArrowUp", right: "ArrowRight", down: "ArrowDown", left: "ArrowLeft"}, hotbar: [{name: "btn1", abilityId: 1, keybind: "1", opacity: 1, cdText: ""}, {name: "btn2", abilityId: 2, keybind: "alt+2", opacity: 1, cdText: ""}]});
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
        <div id="container">

            <GameGrid 
            playerPosition={playerPosition} 
            pTilesRef={pTilesRef}
            ePosition={enemyPosition}
            eTilesRef={eTilesRef} />
            
            <AbilityGrid hotbar={keybinds.hotbar} abilities={abilities} />

            <button onClick={goBack} style={{margin:"30px 0px 0px 15px", float: "left"}}>Back</button>
            <KeyboardEventHandler
            keybinds={keybinds}
            setKeybinds={setKeybinds}
            movementFunc={pLogic.handlePlayerMovement}
            movementFuncArgs={[playerPosition, setPlayerPosition]} 
            abilityFunc={cLogic.startAbilityCd}
            abilityFuncArgs={[abilities, eTilesRef, playerPosition]} />
        </div>
    )
}

