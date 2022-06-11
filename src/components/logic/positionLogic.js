
const positionLogic = () => {
    const initialPos = {x: 1, y: 1};
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
                    setPlayerPosition(newPos);
                } 
                break;
            case "right":
                if (playerPosition.x < (battleGrid[0].length - 1)) {
                    newPos.x += 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "down":
                if (playerPosition.y < (battleGrid.length - 1)) {
                    newPos.y += 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "left":
                if (playerPosition.x > 0) {
                    newPos.x -= 1;
                    setPlayerPosition(newPos);
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
    
    const findCoordinatesForPos = (cellNumber, setEnemyPosition) => {
        let yCount = 0;
        battleGrid.forEach(row => {
            let xCount = 0;
            row.forEach(cell => {
                if (cell === cellNumber) {
                    let newPos = {x: xCount, y: yCount};
                    setEnemyPosition(newPos);
                } else {
                    xCount++;
                }
            });
            yCount++;
        });
    }

    return {
        handlePlayerMovement,
        findAvailablePositions,
        findCoordinatesForPos,
        battleGrid,
        initialPos,
    }
}

const pLogic = positionLogic();
export default pLogic;