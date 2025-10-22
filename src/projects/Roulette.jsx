import React, { useState } from "react";
import RouletteWheel from "./components/RouletteComp.jsx";

// example sectors (labels + color). You can change these.
const DEFAULT_SECTORS = [
  { label: "1", color: "#E53935" },
  { label: "2", color: "#8E24AA" },
  { label: "3", color: "#3949AB" },
  { label: "4", color: "#1E88E5" },
  { label: "5", color: "#00897B" },
  { label: "6", color: "#43A047" },
  { label: "7", color: "#FDD835" },
  { label: "8", color: "#FB8C00" },
];

export default function App() {
  const [sectors] = useState(DEFAULT_SECTORS);
  const [lastResult, setLastResult] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Roulette (Boilerplate)</h1>
      </header>

      <main className="app-main">
        <RouletteWheel
          sectors={sectors}
          onResult={(index) => setLastResult({ index, sector: sectors[index] })}
        />

        <section className="result-panel">
          <h2>Last result</h2>
          {lastResult ? (
            <div className="result">
              <div
                className="result-color"
                style={{ background: lastResult.sector.color }}
              />
              <div className="result-label">
                {lastResult.sector.label} (index {lastResult.index})
              </div>
            </div>
          ) : (
            <div className="none">No spins yet — press Spin.</div>
          )}
        </section>

        <footer className="credits">
          <small>Boilerplate roulette · CSS in separate file</small>
        </footer>
      </main>
    </div>
  );
}