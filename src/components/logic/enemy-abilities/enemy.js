import colorConverter from "../../utility/dmgElemToColor";
import combatFacade from "../../../facades/combatFacade";

const enemyAbilities = () => {

    const singe = (playerPosition, enemyPosition, cellsRef, setEnemyDmgEvent) => {
        const animationIntervalMs = 400;
        const element = "fire";
        let animationTimeMs = 1200;
        let count = -1; // negative since enemy animations move right to left. 
        let currentCell;

        const i = setInterval(() => {
            if (currentCell !== undefined) {
                currentCell.style.backgroundColor = "";
            }
            
            currentCell = cellsRef.current.find(cell => {
                let cellCoords = JSON.parse(cell.id);
                if (cellCoords.x === (enemyPosition.x + count) && 
                    cellCoords.y === enemyPosition.y) {
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
            count--;
            animationTimeMs -= animationIntervalMs;

            if (playerPosition.x === JSON.parse(currentCell.id).x 
            && playerPosition.y === JSON.parse(currentCell.id).y) {
                combatFacade.calculatePlayerDamage({initiatorType: "enemy", playerCharId: "Merlin", enemyId: "Imp", abilityId: "singe"})
                .then(res => {
                    setEnemyDmgEvent(res);
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

    return {
        singe,
    }
}

const enemy = enemyAbilities();
export default enemy;