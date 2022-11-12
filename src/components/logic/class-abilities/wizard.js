import colorConverter from "../../utility/dmgElemToColor";
import pLogic from "../positionLogic";
import combatFacade from "../../../facades/combatFacade";

const wizardAbilities = () => {

    const fireball = (playerPosition, enemyPosition, cellsRef, setPlayerDmgEvent) => {
        const animationIntervalMs = 500;
        const element = "fire";
        let animationTimeMs = 1500;
        let count = 1; // start in front of player, not on top of.
        let currentCell;

        const i = setInterval(() => {
            if (currentCell !== undefined) {
                currentCell.style.backgroundColor = "";
            }
            
            currentCell = cellsRef.current.find(cell => {
                let cellCoords = JSON.parse(cell.id);
                if (cellCoords.x === (playerPosition.x + count) && 
                    cellCoords.y === playerPosition.y) {
                        return cell;
                }
                return 0;
            });

            // if the animation hits the edge of the grid, stop the animation.
            if (currentCell === undefined) {
                clearInterval(i);
                return; 
            }

            currentCell.style.backgroundColor = colorConverter[element];
            count++;
            animationTimeMs -= animationIntervalMs;

            if (enemyPosition.x === JSON.parse(currentCell.id).x 
            && enemyPosition.y === JSON.parse(currentCell.id).y) {
                combatFacade.calculatePlayerDamage({initiatorType: "player", playerCharId: "Merlin", enemyId: "Imp", abilityId: "fireball"})
                .then(res => {
                    setPlayerDmgEvent(res);
                }).catch(err => {
                    console.log(err)
                })      
            }

            if (animationTimeMs <= 0) {
                setTimeout(() => {
                    currentCell.style.backgroundColor = "";
                }, animationIntervalMs);

                clearInterval(i);
            }
        }, animationIntervalMs);
    }

    const frostbolt = (playerPosition, enemyPosition, cellsRef, setPlayerDmgEvent) => {
        // debuff if hit - -20% resistance to fire
        const animationIntervalMs = 250;
        const element = "frost";
        let animationTimeMs = 1000;
        let count = 1; 
        let currentCell;

        const i = setInterval(() => {
            if (currentCell !== undefined) {
                currentCell.style.backgroundColor = "";
            }
            
            currentCell = cellsRef.current.find(cell => {
                let cellCoords = JSON.parse(cell.id);
                if (cellCoords.x === (playerPosition.x + count) && 
                    cellCoords.y === playerPosition.y) {
                        return cell;
                }
                return 0;
            });

            if (currentCell === undefined) {
                clearInterval(i);
                return; 
            }

            currentCell.style.backgroundColor = colorConverter[element];
            count++;
            animationTimeMs -= animationIntervalMs;

            if (enemyPosition.x === JSON.parse(currentCell.id).x 
            && enemyPosition.y === JSON.parse(currentCell.id).y) {
                combatFacade.calculatePlayerDamage({playerCharId: "Merlin", enemyId: "Imp", abilityId: "frostbolt"})
                .then(res => {
                    setPlayerDmgEvent(res);
                }).catch(err => {
                    console.log(err)
                })         
            }

            if (animationTimeMs <= 0) {
                setTimeout(() => {
                    currentCell.style.backgroundColor = "";
                }, animationIntervalMs);

                clearInterval(i);
            }
        }, animationIntervalMs);
    }

    const wallOfIce = (playerPosition, _, cellsRef, __) => {
        const animationTimeMs = 8000;
        const element = "frost";
        const secondCell = playerPosition.y === 0 ? 1 : playerPosition.y - 1; 
        let usedCells = [];

        for (let cell of cellsRef.current) {
            let cellCoords = JSON.parse(cell.id);
    
            if (usedCells.length === 2) {
                break;
            }

            if (cellCoords.x === (playerPosition.x + 1) &&
                cellCoords.y === playerPosition.y) {
                    usedCells.push(cell);
            }
            if (cellCoords.x === (playerPosition.x + 1) &&
                cellCoords.y === secondCell) {
                    usedCells.push(cell);
            }
        }

        usedCells.forEach(cell => {
            cell.style.backgroundColor = colorConverter[element];
            pLogic.blockedCells.push(cell);
        })

        setTimeout(() => {
            pLogic.clearBlockedCells(usedCells);
            usedCells.forEach(cell => {
                cell.style.backgroundColor = "";
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