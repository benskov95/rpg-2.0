
const positionLogic = () => {
    const pInitialPos = {x: 1, y: 1};
    const eInitialPos = {x: 6, y: 1};
    const battleGrid = 
    [
        Array.from({length: 8}, (_, i) => i), 
        Array.from({length: 8}, (_, i) => i + 8), 
        Array.from({length: 8}, (_, i) => i + 16), 
        Array.from({length: 8}, (_, i) => i + 24)
    ];
    let blockedCells = [];

    
    const handlePlayerMovement = (key, enemyPosition, playerPosition, setPlayerPosition) => {
        let newPos = {...playerPosition};
        
        switch(key) {
            case "up":
                if (playerPosition.y > 0) {
                    newPos.y -= 1;
                    let isValid = confirmNewPosValidity(enemyPosition, newPos);
                    if (isValid) setPlayerPosition(newPos);
                } 
                break;
            case "right":
                if (playerPosition.x < (battleGrid[0].length - 1)) {
                    newPos.x += 1;
                    let isValid = confirmNewPosValidity(enemyPosition, newPos);
                    if (isValid) setPlayerPosition(newPos);
                }
                break;
            case "down":
                if (playerPosition.y < (battleGrid.length - 1)) {
                    newPos.y += 1;
                    let isValid = confirmNewPosValidity(enemyPosition, newPos);
                    if (isValid) setPlayerPosition(newPos);
                }
                break;
            case "left":
                if (playerPosition.x > 0) {
                    newPos.x -= 1;
                    let isValid = confirmNewPosValidity(enemyPosition, newPos);
                    if (isValid) setPlayerPosition(newPos);
                }
                break;
            default:
                break;
        }
    }
            
    const findAvailablePositions = (pos) => {
        let posList = [];
        posList.push(battleGrid[pos.y][pos.x]);
        
        if (pos.y > 0) {
            posList.push(battleGrid[pos.y - 1][pos.x]);
        }
        
        if (pos.x > 0) {
            posList.push(battleGrid[pos.y][pos.x - 1]);
        }
        
        if (pos.y < (battleGrid.length - 1)) {
            posList.push(battleGrid[pos.y + 1][pos.x]);
        }

        if (pos.x < (battleGrid[0].length - 1)) {
            posList.push(battleGrid[pos.y][pos.x + 1]); 
        }

        return posList;
    }
    
    const findCoordinatesForPos = (selectedCell, setEnemyPosition, playerPosition) => {
        let yCount = 0;
        let newPos;

        for (let row of battleGrid) {
            let xCount = 0;
            
            if (newPos !== undefined) {
                break;
            }

            for (let cell of row) {
                if (cell === selectedCell) {
                    let newPos = {x: xCount, y: yCount};
                    let isValid = confirmNewPosValidity(playerPosition, newPos);
                    if (isValid) setEnemyPosition(newPos);
                    break;
                } else {
                    xCount++;
                }
            }
            yCount++;
        }
    }

    const clearBlockedCells = (usedCells) => {
        let newList = [...blockedCells];
        usedCells.forEach(usedCell => {
            let blockedCell = newList.findIndex(cell => cell.id === usedCell.id);
            newList.splice(blockedCell, 1);
        })
        blockedCells = newList;
    }
            
    const confirmNewPosValidity = (opponentPos, newPos) => {
        if (blockedCells.length > 0) {
            for (let cell of blockedCells) {
                let cellCoords = JSON.parse(cell.id);
                if (cellCoords.x === newPos.x &&
                    cellCoords.y === newPos.y) {
                        return false;
                }
            }
        }

        if (opponentPos.x === newPos.x && opponentPos.y === newPos.y) {
            return false;
        }
        
        return true;
    }

    return {
        handlePlayerMovement,
        findAvailablePositions,
        findCoordinatesForPos,
        clearBlockedCells,
        pInitialPos,
        eInitialPos,
        blockedCells,
        battleGrid
    }
}

const pLogic = positionLogic();
export default pLogic;