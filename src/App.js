import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Battle from "./components/Battle";
import NotFound from "./components/NotFound";
import Equipment from "./components/Equipment";
import { useState } from "react";
import iconConverter from "./components/utility/iconConverter";

export default function App() {
  // change to only shift modifier - alt + left arrow navigates to last page
  const [keybinds, setKeybinds] = useState({movement: {up: "ArrowUp", right: "ArrowRight", down: "ArrowDown", left: "ArrowLeft"}, hotbar: [{name: "btn1", abilityId: "fireball", keybind: "1", opacity: 1, cdText: ""}, {name: "btn2", abilityId: "frostbolt", keybind: "alt+2", opacity: 1, cdText: ""}, {name: "btn3", abilityId: "wallOfIce", keybind: "3", opacity: 1, cdText: ""}]});
  const [abilities, setAbilities] = useState([{id: "fireball", image: iconConverter["fireball"], cooldown: 2000}, {id: "frostbolt", image: iconConverter["frostbolt"], cooldown: 8000}, {id: "wallOfIce", image: iconConverter["wallOfIce"], cooldown: 30000}])

  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Menu />} />

          <Route path="/battle" element={
          <Battle 
          keybinds={keybinds} 
          setKeybinds={setKeybinds} 
          abilities={abilities} />
          } />

          <Route path="/equipment" element={
          <Equipment 
          keybinds={keybinds} 
          setKeybinds={setKeybinds} 
          abilities={abilities} />
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}
