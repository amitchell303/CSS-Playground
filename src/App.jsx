import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import ColoradoFlag from "./projects/ColoradoFlag.jsx";
import Loader from "./projects/Loader.jsx";
import Pacman from "./projects/Pacman.jsx";
import Backgrounds from "./projects/Backgrounds.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coloradoFlag" element={<ColoradoFlag />} />
        <Route path="/loaderAnimation" element={<Loader />} />
        <Route path="/pacman" element={<Pacman />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
      </Routes>
    </>
  );
}

export default App;
