import React, { useState, useRef } from "react";

export default function RouletteWheel({ sectors, onResult }) {
  const [spinning, setSpinning] = useState(false);
  const wheelRef = useRef(null);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    // pick a random sector index
    const index = Math.floor(Math.random() * sectors.length);
    const degreesPerSector = 360 / sectors.length;

    // total spins (for animation) + final stop offset
    const randomSpin = 360 * 5 + (360 - index * degreesPerSector - degreesPerSector / 2);

    // apply rotation
    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
      wheelRef.current.style.transform = `rotate(${randomSpin}deg)`;
    }

    // after spin ends
    setTimeout(() => {
      setSpinning(false);
      if (onResult) onResult(index);
    }, 4000);
  };

  return (
    <div className="roulette-container">
      <div className="roulette-wheel" ref={wheelRef}>
        {sectors.map((sector, i) => {
          const rotation = (360 / sectors.length) * i;
          return (
            <div
              key={i}
              className="sector"
              style={{
                transform: `rotate(${rotation}deg) skewY(${90 - 360 / sectors.length}deg)`,
                background: sector.color,
              }}
            >
              <span>{sector.label}</span>
            </div>
          );
        })}
      </div>
      <button className="spin-button" onClick={spin} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}