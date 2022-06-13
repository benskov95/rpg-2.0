
const positionLogic = () => {
    const pInitialPos = {x: 1, y: 1};
    const eInitialPos = {x: 6, y: 1};
    let blockedTiles = [];
    const battleGrid = 
    [
        Array.from({length: 8}, (_, i) => i), 
        Array.from({length: 8}, (_, i) => i + 8), 
        Array.from({length: 8}, (_, i) => i + 16), 
        Array.from({length: 8}, (_, i) => i + 24)
    ];

    
    const handlePlayerMovement = (key, playerPosition, setPlayerPosition) => {
        let newPos = {...playerPosition};
        
        switch(key) {
            case "up":
                if (playerPosition.y > 0) {
                    newPos.y -= 1;
                    let check = confirmNewPosValidity(newPos);
                    if (check) setPlayerPosition(newPos);
                } 
                break;
            case "right":
                if (playerPosition.x < (battleGrid[0].length - 1)) {
                    newPos.x += 1;
                    let check = confirmNewPosValidity(newPos);
                    if (check) setPlayerPosition(newPos);
                }
                break;
            case "down":
                if (playerPosition.y < (battleGrid.length - 1)) {
                    newPos.y += 1;
                    let check = confirmNewPosValidity(newPos);
                    if (check) setPlayerPosition(newPos);
                }
                break;
            case "left":
                if (playerPosition.x > 0) {
                    newPos.x -= 1;
                    let check = confirmNewPosValidity(newPos);
                    if (check) setPlayerPosition(newPos);
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
    
    const findCoordinatesForPos = (selectedTile, setEnemyPosition) => {
        let yCount = 0;
        let newPos;

        for (let row of battleGrid) {
            let xCount = 0;
            
            if (newPos !== undefined) {
                break;
            }

            for (let tile of row) {
                if (tile === selectedTile) {
                    let newPos = {x: xCount, y: yCount};
                    setEnemyPosition(newPos);
                    break;
                } else {
                    xCount++;
                }
            }
            yCount++;
        }
    }

    const clearBlockedTiles = (usedTiles) => {
        let newList = [...blockedTiles];
        usedTiles.forEach(thing => {
            let test = newList.findIndex(tile => tile.id === thing.id);
            newList.splice(test, 1);
        })
        blockedTiles = newList;
    }
            
    const confirmNewPosValidity = (newPos) => {
        if (blockedTiles.length > 0) {
            for (let tile of blockedTiles) {
                let tileCoords = JSON.parse(tile.id);
                if (tileCoords.x === newPos.x &&
                    tileCoords.y === newPos.y) {
                        return false;
                }
            }
        }
        return true;
    }

    return {
        handlePlayerMovement,
        findAvailablePositions,
        findCoordinatesForPos,
        clearBlockedTiles,
        pInitialPos,
        eInitialPos,
        blockedTiles,
        battleGrid
    }
}

const pLogic = positionLogic();
export default pLogic;