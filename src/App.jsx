import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import ColoradoFlag from "./projects/ColoradoFlag.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coloradoFlag" element={<ColoradoFlag />} />
      </Routes>
    </>
  );
}

export default App;
