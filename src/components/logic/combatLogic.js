import classHandler from "./classHandler";

const combatLogic = () => {
    const pAbilitiesOnCd = [];
    const eAbilitiesOnCd = [];

    const startPlayerAbilityCd = (btn, keybinds, setKeybinds, abilities, cellsRef, playerPosRef, enemyPosRef, setPlayerCombatEvent) => {
        // using position refs because state variables aren't as accurate in setInterval (which abilities use)
        const updateInterval = 1000 / 60;
        let usedAbility = abilities.find(ab => ab.id === btn.abilityId);
        let cd = usedAbility.cooldown - updateInterval;

        if (pAbilitiesOnCd.find(ab => ab.name === btn.name) === undefined) {
            btn.opacity = "0.2";
            beginAbilityAnimation("wizard", usedAbility.id, playerPosRef, enemyPosRef, cellsRef, setPlayerCombatEvent);
        } else { 
            return;
        }

        let abilityOnCd = {name: btn.name};
        pAbilitiesOnCd.push(abilityOnCd);

        abilityOnCd.activeCd = setInterval(() => {
            let copy = {...keybinds};
            copy.hotbar.find(x => x.name === btn.name).cdText = (cd / 1000).toFixed(1)
            setKeybinds(copy);
            cd -= updateInterval;

            if (cd < 0) {
                btn.opacity = "1";
                btn.cdText = "";
                clearInterval(abilityOnCd.activeCd);
                pAbilitiesOnCd.splice(pAbilitiesOnCd.indexOf(abilityOnCd));
            }
        }, updateInterval);
    }

    const startEnemyAbilityCd = (ability, playerPosition, enemyPosition, cellsRef, setEnemyCombatEvent) => {
        let abOnCd = eAbilitiesOnCd.find(a => a.id === ability.id);
        if (abOnCd !== undefined) return;

        eAbilitiesOnCd.push(ability);
        beginAbilityAnimation("enemy", ability.id, playerPosition, enemyPosition, cellsRef, setEnemyCombatEvent);
        setTimeout(() => {
            eAbilitiesOnCd.pop();
        }, ability.cooldown);
    }

    const beginAbilityAnimation = (initiator, abilityId, playerPosRef, enemyPosRef, cellsRef, setPlayerCombatEvent) => {
        let classAbilities = classHandler[initiator];

        for (const abilityName in classAbilities) {
            if (abilityName === abilityId) {
                classAbilities[abilityName](playerPosRef.current, enemyPosRef.current, cellsRef, setPlayerCombatEvent);
                break;
            }
        }
    }

    return {
        startPlayerAbilityCd,
        startEnemyAbilityCd,
    }
}

const cLogic = combatLogic();
export default cLogic;