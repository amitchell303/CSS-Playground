import React from "react";
import { Link } from "react-router-dom";
import ColoradoFlag from "./projects/ColoradoFlag";

export default function Home() {
  return (
    <main className="parent">
      <div className="div18">
        <h1>
          CSS + Pixel <br /> Playground
        </h1>
      </div>

      <div className="div1">
        <Link to="/coloradoFlag" element={<ColoradoFlag />}>
          Colorado
        </Link>
      </div>
      <div className="div2"> </div>
      <div className="div3"> </div>
      <div className="div4"> </div>
      <div className="div6"> </div>
      <div className="div7"> </div>
      <div className="div8"> </div>
      <div className="div9"> </div>
      <div className="div10"> </div>
      <div className="div11"> </div>
      <div className="div12"> </div>
      <div className="div13"> </div>
      <div className="div14"> </div>
      <div className="div15"> </div>
      <div className="div16"> </div>
      <div className="div17"> </div>
    </main>
  );
}
