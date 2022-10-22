import classHandler from "./classHandler";
import combatFacade from "../../facades/combatFacade";

const combatLogic = () => {
    const abilitiesOnCd = [];
    let currentEnemyPos = null;
    let playerDmg = 0;

    const startAbilityCd = (btn, keybinds, setKeybinds, abilities, cellsRef, playerPosition) => {
        const updateInterval = 1000 / 60;
        let usedAbility = abilities.find(ab => ab.id === btn.abilityId);
        let cd = usedAbility.cooldown - updateInterval;

        if (abilitiesOnCd.find(ab => ab.name === btn.name) === undefined) {
            btn.opacity = "0.2";
            beginAbilityAnimation(usedAbility, playerPosition, cellsRef);
        } else { 
            return;
        }

        let abilityOnCd = {name: btn.name};
        abilitiesOnCd.push(abilityOnCd);

        abilityOnCd.activeCd = setInterval(() => {
            let copy = {...keybinds};
            copy.hotbar.find(x => x.name === btn.name).cdText = (cd / 1000).toFixed(1)
            setKeybinds(copy);
            cd -= updateInterval;

            if (cd < 0) {
                btn.opacity = "1";
                btn.cdText = "";
                clearInterval(abilityOnCd.activeCd);
                abilitiesOnCd.splice(abilitiesOnCd.indexOf(abilityOnCd));
            }
        }, updateInterval);
    }

    const beginAbilityAnimation = (usedAbility, playerPosition, cellsRef) => {
        let playerClass = classHandler["wizard"];

        for (const ability in playerClass) {
            if (ability === usedAbility.id) {
                playerClass[ability](playerPosition, currentEnemyPos, cellsRef);
                break;
            }
        }
    }

    const handleDamageCalculation = async (dmgEvent) => {
        try {
            const res = await combatFacade.calculatePlayerDamage(dmgEvent);
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    return {
        startAbilityCd,
        handleDamageCalculation,
        currentEnemyPos,
        playerDmg
    }
}

const cLogic = combatLogic();
export default cLogic;