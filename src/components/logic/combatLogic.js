
const combatLogic = () => {
    const abilitiesOnCd = [];

    const startAbilityCd = (usedAbility, abilities, setAbilities, currentTileRef, eTilesRef, playerPosition) => {
        let updateInterval = 1000 / 60
        let time = 2000 - updateInterval;

        if (abilitiesOnCd.find(ab => ab.abilityName === usedAbility.name) === undefined) {
            usedAbility.opacity = "0.2";
            beginAbilityAnimation(currentTileRef, eTilesRef, playerPosition);
        } else {
            return;
        }

        let abilityOnCd = {abilityName: usedAbility.name, activeCd: ""};
        abilitiesOnCd.push(abilityOnCd);

        abilityOnCd.activeCd = setInterval(() => {
            let hmm = [...abilities];
            hmm.find(x => x.name === usedAbility.name).cdText = (time / 1000).toFixed(1)
            setAbilities(hmm);
            time -= updateInterval;

            if (time < 0) {
                usedAbility.opacity = "1";
                usedAbility.cdText = "";
                clearInterval(abilityOnCd.activeCd);
                abilitiesOnCd.splice(abilitiesOnCd.indexOf(abilityOnCd));
            }
        }, updateInterval);
    }

    const beginAbilityAnimation = (currentTileRef, eTilesRef, playerPosition) => {
        let totalAnimationTime = 1500;
        let animationInterval = 500;
        let count = 0;
        let casterYPos = playerPosition.y * 3;

        const i = setInterval(() => {
            if (count > 0) {
                currentTileRef.current.style.backgroundColor = "";
            }
            
            // multiple animations running simultaneously cause some tiles to stay colored. maybe ref is the problem?
            currentTileRef.current = eTilesRef.current[count + casterYPos];
            currentTileRef.current.style.backgroundColor = "darkred";
            count++;
            totalAnimationTime -= animationInterval;
            
            if (totalAnimationTime <= 0) {
                setTimeout(() => {
                    currentTileRef.current.style.backgroundColor = "";
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