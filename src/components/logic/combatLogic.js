
const combatLogic = () => {
    const abilitiesOnCd = [];

    const handleAbility = (key, usedAbility, setCdText, currentTileRef, eTilesRef, playerPosition) => {
        console.log(key)
        switch(key) {
            case "1":
                startAbilityCd(usedAbility, setCdText, currentTileRef, eTilesRef, playerPosition);
                break;
            default:
                break;
        }
    }

    const startAbilityCd = (usedAbility, setCdText, currentTileRef, eTilesRef, playerPosition) => {
        let updateInterval = 1000 / 60
        let time = 2000 - updateInterval;

        if (abilitiesOnCd.find(ab => ab.abilityName === usedAbility.name) === undefined) {
            usedAbility.style.opacity = "0.2";
            beginAbilityAnimation(currentTileRef, eTilesRef, playerPosition);
        } else {
            return;
        }

        let abilityOnCd = {abilityName: usedAbility.name, activeCd: ""};
        abilitiesOnCd.push(abilityOnCd);

        abilityOnCd.activeCd = setInterval(() => {
            setCdText((time / 1000).toFixed(1));
            time -= updateInterval;

            if (time < 0) {
                usedAbility.style.opacity = "1";
                setCdText("");
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

            currentTileRef.current = eTilesRef.current[count + casterYPos]
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
        handleAbility,
    }
}

const cLogic = combatLogic();
export default cLogic;