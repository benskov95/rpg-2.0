
export default function AbilityGrid(props) {
    return (
        <div id="ability-grid">
            <div className="ability">
                <p className="ability-bind">S1</p>
                <p className="ability-cd-text">{props.abilities[0].cdText}</p>
                <img 
                className="ability-img"
                style={{opacity: props.abilities[0].opacity}}
                name={props.abilities[0].name}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/775fee27-cfe5-4c65-823e-c8e857a594f4/d8m8d0k-4e43eda4-f0a7-49fe-8be7-260aee2079cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NWZlZTI3LWNmZTUtNGM2NS04MjNlLWM4ZTg1N2E1OTRmNFwvZDhtOGQway00ZTQzZWRhNC1mMGE3LTQ5ZmUtOGJlNy0yNjBhZWUyMDc5Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yKeEd03P0xzRFfYDjqDrDsQ3DoguRDKCp_OJrCGW4Fg" 
                alt="" />
            </div>
            <div className="ability">
                <p className="ability-bind">1</p>
                <p className="ability-cd-text">{props.abilities[1].cdText}</p>
                <img 
                className="ability-img"
                style={{opacity: props.abilities[1].opacity}}
                name={props.abilities[1].name}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4f0080f-e6e6-426a-99e3-1f0d6fa996fc/d8ww5x8-88e106c7-6dde-4088-b437-20d7f52e63e2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZjAwODBmLWU2ZTYtNDI2YS05OWUzLTFmMGQ2ZmE5OTZmY1wvZDh3dzV4OC04OGUxMDZjNy02ZGRlLTQwODgtYjQzNy0yMGQ3ZjUyZTYzZTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8iQNZFOhgEp-2KTxoUdsUV_5oh9kv5Fj0x32PjrBgeE" 
                alt="" />
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
            <div className="ability">
            </div>
        </div>
    )
}