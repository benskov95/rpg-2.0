import colorConverter from "../../utility/dmgElemToColor";
import pLogic from "../positionLogic";

const wizardAbilities = () => {

    const fireball = (playerPosition, tilesRef) => {
        const animationIntervalMs = 500;
        let animationTimeMs = 1500;
        let element = "fire";
        let count = 1; // start in front of player, not on top of.
        let currentTile;

        const i = setInterval(() => {
            if (currentTile !== undefined) {
                currentTile.style.backgroundColor = "";
            }
            
            currentTile = tilesRef.current.find(tile => {
                let tileCoords = JSON.parse(tile.id);
                if (tileCoords.x === (playerPosition.x + count) && 
                    tileCoords.y === playerPosition.y) {
                        return tile;
                }
                return 0;
            });
            currentTile.style.backgroundColor = colorConverter[element];
            count++;

            animationTimeMs -= animationIntervalMs;

            if (animationTimeMs <= 0) {
                setTimeout(() => {
                    currentTile.style.backgroundColor = "";
                }, animationIntervalMs);

                clearInterval(i);
            }
        }, animationIntervalMs);
    }

    const frostbolt = (playerPosition, tilesRef) => {
        // debuff if hit - -20% resistance to fire
        const animationIntervalMs = 250;
        let animationTimeMs = 1000;
        let element = "frost";
        let count = 1; 
        let currentTile;

        const i = setInterval(() => {
            if (currentTile !== undefined) {
                currentTile.style.backgroundColor = "";
            }
            
            currentTile = tilesRef.current.find(tile => {
                let tileCoords = JSON.parse(tile.id);
                if (tileCoords.x === (playerPosition.x + count) && 
                    tileCoords.y === playerPosition.y) {
                        return tile;
                }
                return 0;
            });
            currentTile.style.backgroundColor = colorConverter[element];
            count++;

            animationTimeMs -= animationIntervalMs;

            if (animationTimeMs <= 0) {
                setTimeout(() => {
                    currentTile.style.backgroundColor = "";
                }, animationIntervalMs);

                clearInterval(i);
            }
        }, animationIntervalMs);
    }

    const wallOfIce = (playerPosition, tilesRef) => {
        const animationTimeMs = 8000;
        let element = "frost";
        let secondTile = playerPosition.y === 0 ? 1 : playerPosition.y - 1; 
        let usedTiles = [];

        for (let tile of tilesRef.current) {
            let tileCoords = JSON.parse(tile.id);
    
            if (usedTiles.length === 2) {
                break;
            }

            if (tileCoords.x === (playerPosition.x + 1) &&
                tileCoords.y === playerPosition.y) {
                    usedTiles.push(tile);
            }
            if (tileCoords.x === (playerPosition.x + 1) &&
                tileCoords.y === secondTile) {
                    usedTiles.push(tile);
            }
        }

        usedTiles.forEach(tile => {
            tile.style.backgroundColor = colorConverter[element];
            pLogic.blockedTiles.push(tile);
        })

        setTimeout(() => {
            pLogic.clearBlockedTiles(usedTiles);
            usedTiles.forEach(tile => {
                tile.style.backgroundColor = "";
            })
        }, animationTimeMs);
    }

    return {
        fireball,
        frostbolt,
        wallOfIce
    }
}

const wizard = wizardAbilities();
export default wizard;