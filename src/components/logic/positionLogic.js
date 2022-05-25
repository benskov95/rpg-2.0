
const positionLogic = () => {
    const pGrid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const eGrid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const initialPos = {x: 1, y: 1};

    const findAvailablePositions = (pos) => {
        let posList = [];
        posList.push(eGrid[pos.y][pos.x]);

        if (pos.y > 0) {
            posList.push(eGrid[pos.y - 1][pos.x]);
        }

        if (pos.x > 0) {
            posList.push(eGrid[pos.y][pos.x - 1]);
        }
        
        if (pos.y < 2) {
            posList.push(eGrid[pos.y + 1][pos.x]);
        }

        if (pos.x < 2) {
            posList.push(eGrid[pos.y][pos.x + 1]); 
        }

        return posList;
    }
    
    const findCoordinatesForPos = (cellNumber, setEnemyPosition) => {
        let yCount = 0;
        eGrid.forEach(row => {
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
        findAvailablePositions,
        findCoordinatesForPos,
        pGrid,
        eGrid,
        initialPos,
    }
}

const pLogic = positionLogic();
export default pLogic;