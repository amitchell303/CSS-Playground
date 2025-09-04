import React from "react";
import { Link } from "react-router-dom";
import ColoradoFlag from "./projects/ColoradoFlag";

export default function Home() {
  return (
    <main class="parent">
      <div class="div18">
        <h1>
          CSS + Pixel <br /> Playground
        </h1>
      </div>

      <div class="div1">
        <Link to="/coloradoFlag" element={<ColoradoFlag />}>
          Colorado
        </Link>
      </div>
      <div class="div2"> </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
      <div class="div6"> </div>
      <div class="div7"> </div>
      <div class="div8"> </div>
      <div class="div9"> </div>
      <div class="div10"> </div>
      <div class="div11"> </div>
      <div class="div12"> </div>
      <div class="div13"> </div>
      <div class="div14"> </div>
      <div class="div15"> </div>
      <div class="div16"> </div>
      <div class="div17"> </div>
    </main>
  );
}
