
const positionLogic = () => {
    const battleGrid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const initialPos = {x: 1, y: 1};

    const handlePlayerMovement = (e, playerPosition, setPlayerPosition) => {
        let newPos = {...playerPosition};

        switch(e.key) {
            case "w":
                if (playerPosition.y > 0) {
                    newPos.y -= 1;
                    setPlayerPosition(newPos);
                } 
                break;
            case "a":
                if (playerPosition.x > 0) {
                    newPos.x -= 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "s":
                if (playerPosition.y < (battleGrid[0].length - 1)) {
                    newPos.y += 1;
                    setPlayerPosition(newPos);
                }
                break;
            case "d":
                if (playerPosition.x < (battleGrid[0].length - 1)) {
                    newPos.x += 1;
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
        
        if (pos.y < (battleGrid[0].length - 1)) {
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