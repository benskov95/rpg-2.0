import pLogic from "../logic/positionLogic";

export default function GameGrid(props) {
    return (
        <>
            <div className="game-grid">
                {pLogic.battleGrid.map((row, i) => {
                    return (
                        row.map((tile, j) => {
                            let idxDiff = i > 0 ? i * 3 : 0;
                            return (
                                <div 
                                className="tile" 
                                ref={el => props.pTilesRef.current[j + idxDiff] = el}
                                key={tile}
                                style={{border: "1px solid blue"}}>
                                    {tile === pLogic.battleGrid[props.playerPosition.y][props.playerPosition.x] &&
                                        <img className="participant-img" src="https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png" alt="" /> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
            <div className="game-grid">
                {pLogic.battleGrid.map((row, i) => {
                    return (
                        row.map((tile, j) => {
                            let idxDiff = i > 0 ? i * 3 : 0;
                            return (
                                <div 
                                className="tile" 
                                ref={el => props.eTilesRef.current[j + idxDiff] = el}
                                key={tile}
                                style={{border: "1px solid red"}}>
                                    {tile === pLogic.battleGrid[props.ePosition.y][props.ePosition.x] &&
                                        <img className="participant-img" src="https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png" alt="" /> 
                                    }
                                </div>
                            )
                        }))
                    })
                }
            </div>
        </>
    )
}