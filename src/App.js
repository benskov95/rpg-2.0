import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Battle from "./components/Battle";
import NotFound from "./components/NotFound";
import Equipment from "./components/Equipment";

export default function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}
