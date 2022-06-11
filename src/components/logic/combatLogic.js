import colorConverter from "../utility/dmgElemToColor";

const combatLogic = () => {
    const abilitiesOnCd = [];

    const startAbilityCd = (btn, keybinds, setKeybinds, abilities, tilesRef, playerPosition) => {
        const usedAbility = abilities.find(ab => ab.id === btn.abilityId);
        const updateInterval = 1000 / 60;
        let time = usedAbility.cooldown - updateInterval;

        if (abilitiesOnCd.find(ab => ab.name === btn.name) === undefined) {
            btn.opacity = "0.2";
            beginAbilityAnimation(usedAbility, tilesRef, playerPosition);
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

    const beginAbilityAnimation = (usedAbility, tilesRef, playerPosition) => {
        const xMax = 7; // used to avoid abilities moving on to next row
        const animationInterval = usedAbility.animation.animationInterval;
        const casterPos = (playerPosition.y * 8) + (playerPosition.x + 1);
        let totalAnimationTime = usedAbility.animation.animationTime;
        let count = 0;
        let currentTile;
        let hmm = [];
        
        usedAbility.pattern.forEach(part => {
            let x;
            let y; 

            if (Array.isArray(part)) {
                part.forEach(coord => {
                    x = usedAbility.startOnPlayerPos ? coord.x + playerPosition.x : coord.x + playerPosition.x + 1;
                    y = usedAbility.startOnPlayerPos ? playerPosition.y : coord.y;
                    
                    tilesRef.current.find(tile => {
                        let tileCoords = JSON.parse(tile.id);
                        if (tileCoords.x === x && tileCoords.y === y) {
                            hmm.push(tile);
                        }
                    })
                })
            } else {
                x = usedAbility.startOnPlayerPos ? part.x + playerPosition.x : part.x + playerPosition.x + 1;
                y = playerPosition.y;

                tilesRef.current.find(tile => {
                    let tileCoords = JSON.parse(tile.id);
                    if (tileCoords.x === x && tileCoords.y === y) {
                        hmm.push(tile);
                    }
                })
            }
        });

        const i = setInterval(() => {
            if (currentTile !== undefined) {
                currentTile.style.backgroundColor = "";
            }
            
            currentTile = hmm[count];
            currentTile.style.backgroundColor = colorConverter[usedAbility.element];
            count++;

            totalAnimationTime -= animationInterval;
            
            if (totalAnimationTime <= 0 || count >= hmm.length) {
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