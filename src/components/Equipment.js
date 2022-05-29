import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Equipment() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div style={{width: "40%", maxWidth: "500px", border: "1px solid gray"}}>
            <ul style={{listStyle: "none", paddingLeft: "0", float: "right", width: "15%", marginRight: "10%"}}>
                <li onMouseOver={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <Popup position={"right center"} contentStyle={{width: "180px",borderWidth: "0px", backgroundColor: "rgba(33, 33, 33, 0.942)"}} trigger={<img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-gloves-512.png" />}>
                        <div>
                            <p>Name</p>
                            <p>Stats</p>
                        </div>
                    </Popup>
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://icon-library.com/images/pants-icon-png/pants-icon-png-16.jpg" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_costume_armor_boot_foot_metal_knight_warrior_protection_leg_2-512.png" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_accessory_ring_wedding_gold_jewelry_gift_love-512.png" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/equipment_accessory_ring_wedding_gold_jewelry_gift_love-512.png" />
                </li>
            </ul>

            <ul style={{listStyle: "none", paddingLeft: "0", width: "40px", width: "15%", marginLeft: "10%"}}>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                        <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-basic-ui/512/head_helmet_armor_warrior_knight_helm-512.png" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn1.iconfinder.com/data/icons/rpg-game-design/100/rpg_necklace-512.png" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn-icons-png.flaticon.com/512/5101/5101797.png" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn-icons-png.flaticon.com/512/4820/4820460.png" />
                </li>
                <li style={{backgroundColor: "gray", marginBottom: "10px", border: "3px solid gray"}}>
                    <img style={{width: "inherit", height: "5vw", maxHeight: "60px"}} src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/armor-bracers-2-512.png" />
                </li>
            </ul>

            <div style={{width: "7vw", maxWidth: "80px", maxHeight: "70px", margin: "auto", marginBottom: "10px", backgroundColor: "gray", border: "3px solid gray"}}>
                    <img style={{width: "6vw", height: "6vw", maxWidth: "80px", maxHeight: "70px"}} src="https://icon-library.com/images/weapon-icon/weapon-icon-12.jpg" />
            </div>
        </div>
    )
}