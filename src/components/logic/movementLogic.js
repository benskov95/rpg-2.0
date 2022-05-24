
const movementLogic = () => {

    const findAvailablePositions = (grid, pos) => {
        let posList = [];
        posList.push(grid[pos.y][pos.x]);

        if (pos.y > 0) {
            posList.push(grid[pos.y - 1][pos.x]);
        }

        if (pos.x > 0) {
            posList.push(grid[pos.y][pos.x - 1]);
        }
        
        if (pos.y < 2) {
            posList.push(grid[pos.y + 1][pos.x]);
        }

        if (pos.x < 2) {
            posList.push(grid[pos.y][pos.x + 1]); 
        }

        return posList;
    }
    
    const findCoordinatesForPos = (grid, cellNumber, setEnemyPosition) => {
        let yCount = 0;
        grid.forEach(row => {
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
    }
}

const mLogic = movementLogic();
export default mLogic;