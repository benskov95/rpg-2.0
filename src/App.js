import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Battle from "./components/Battle";
import NotFound from "./components/NotFound";
import Equipment from "./components/Equipment";
import { useState } from "react";
import iconConverter from "./components/utility/iconConverter";

export default function App() {
  const [keybinds, setKeybinds] = useState({movement: {up: "ArrowUp", right: "ArrowRight", down: "ArrowDown", left: "ArrowLeft"}, hotbar: [{name: "btn1", abilityId: 1, keybind: "1", opacity: 1, cdText: ""}, {name: "btn2", abilityId: 2, keybind: "alt+2", opacity: 1, cdText: ""}]});
  const [abilities, setAbilities] = useState([{id: 1, pattern: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], startOnPlayerPos: false, element: "fire", name: "test1", image: iconConverter["fireball"], cooldown: 2000, animation: {animationTime: 1500, animationInterval: 500}}, {id: 2, pattern: [[{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}]], startOnPlayerPos: false, element: "frost", name: "test2", image: iconConverter["frostbolt"], cooldown: 8000, animation: {animationTime: 500, animationInterval: 100}}])

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
