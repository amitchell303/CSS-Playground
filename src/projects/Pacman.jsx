import React from "react";
import "../styling/Pacman.css";

export default function Pacman() {
  return (
    <main className="pacman-container">
      <div className="pacman"></div>
      <div className="pellet"></div>
      <div className="pellet"></div>
      <div className="pellet"></div>
    </main>
  );
}
