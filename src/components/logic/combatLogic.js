
const combatLogic = () => {
    const abilitiesOnCd = [];

    const startAbilityCd = (btn, keybinds, setKeybinds, abilities, eTilesRef, playerPosition) => {
        const usedAbility = abilities.find(ab => ab.id === btn.abilityId);
        const updateInterval = 1000 / 60;
        let time = usedAbility.cooldown - updateInterval;

        if (abilitiesOnCd.find(ab => ab.name === btn.name) === undefined) {
            btn.opacity = "0.2";
            beginAbilityAnimation(usedAbility, eTilesRef, playerPosition);
        } else {
            return;
        }

        let abilityOnCd = {name: btn.name};
        abilitiesOnCd.push(abilityOnCd);

        abilityOnCd.activeCd = setInterval(() => {
            let copy = {...keybinds};
            copy.hotbar.find(x => x.name === btn.name).cdText = (time / 1000).toFixed(1)
            setKeybinds(copy);
            time -= updateInterval;

            if (time < 0) {
                btn.opacity = "1";
                btn.cdText = "";
                clearInterval(abilityOnCd.activeCd);
                abilitiesOnCd.splice(abilitiesOnCd.indexOf(abilityOnCd));
            }
        }, updateInterval);
    }

    const beginAbilityAnimation = (usedAbility, eTilesRef, playerPosition) => {
        const animationInterval = usedAbility.animation.animationInterval;
        const casterYPos = playerPosition.y * 3;
        let totalAnimationTime = usedAbility.animation.animationTime;
        let count = 0;
        let currentTile;

        const i = setInterval(() => {
            if (count > 0) {
                currentTile.style.backgroundColor = "";
            }
            
            // multiple animations running simultaneously cause some tiles to stay colored. maybe ref is the problem?
            currentTile = eTilesRef.current[count + casterYPos];
            currentTile.style.backgroundColor = "darkred";
            count++;
            totalAnimationTime -= animationInterval;
            
            if (totalAnimationTime <= 0) {
                setTimeout(() => {
                    currentTile.style.backgroundColor = "";
                }, animationInterval);
                clearInterval(i);
            }
        }, animationInterval);
    }

    return {
        startAbilityCd,
    }
}

const cLogic = combatLogic();
export default cLogic;