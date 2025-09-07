import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import ColoradoFlag from "./projects/ColoradoFlag.jsx";
import Loader from "./projects/Loader.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coloradoFlag" element={<ColoradoFlag />} />
        <Route path="/loaderAnimation" element={<Loader />} />
      </Routes>
    </>
  );
}

export default App;
