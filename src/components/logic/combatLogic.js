import classHandler from "./classHandler";

const combatLogic = () => {
    const abilitiesOnCd = [];

    const startAbilityCd = (btn, keybinds, setKeybinds, abilities, cellsRef, playerPosition) => {
        const usedAbility = abilities.find(ab => ab.id === btn.abilityId);
        const updateInterval = 1000 / 60;
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
                playerClass[ability](playerPosition, cellsRef);
                break;
            }
        }
    }

    return {
        startAbilityCd,
    }
}

const cLogic = combatLogic();
export default cLogic;