import React, { useState, useEffect, useRef } from "react";
import LengthControl from "./components/LengthControl";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import "./App.css";

const DEFAULT_SESSION = 25;
const DEFAULT_BREAK = 5;

export default function App() {
  const [sessionLength, setSessionLength] = useState(DEFAULT_SESSION);
  const [breakLength, setBreakLength] = useState(DEFAULT_BREAK);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_SESSION * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState("Session"); // "Session" or "Break"
  const intervalRef = useRef(null);

  // ⏱ Countdown
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // 🔁 Switch between Session and Break
  useEffect(() => {
    if (timeLeft < 0) {
      if (phase === "Session") {
        setPhase("Break");
        setTimeLeft(breakLength * 60);
      } else {
        setPhase("Session");
        setTimeLeft(sessionLength * 60);
      }
    }
  }, [timeLeft, phase, breakLength, sessionLength]);

  // 🔊 Optional beep
  const playBeep = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 800;
    osc.start();
    setTimeout(() => osc.stop(), 300);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setPhase("Session");
    setSessionLength(DEFAULT_SESSION);
    setBreakLength(DEFAULT_BREAK);
    setTimeLeft(DEFAULT_SESSION * 60);
  };

  const toggleRunning = () => setIsRunning(prev => !prev);

  const adjustLength = (type, amount) => {
    if (isRunning) return;
    if (type === "session") {
      const newLen = Math.min(60, Math.max(1, sessionLength + amount));
      setSessionLength(newLen);
      if (phase === "Session") setTimeLeft(newLen * 60);
    } else {
      const newLen = Math.min(60, Math.max(1, breakLength + amount));
      setBreakLength(newLen);
      if (phase === "Break") setTimeLeft(newLen * 60);
    }
  };

  return (
    <div className="pomodoro-app">
      <h1>Pomodoro Clock</h1>

      <div className="length-controls">
        <LengthControl
          label="Session Length"
          length={sessionLength}
          onIncrease={() => adjustLength("session", 1)}
          onDecrease={() => adjustLength("session", -1)}
        />
        <LengthControl
          label="Break Length"
          length={breakLength}
          onIncrease={() => adjustLength("break", 1)}
          onDecrease={() => adjustLength("break", -1)}
        />
      </div>

      <TimerDisplay phase={phase} timeLeft={timeLeft} />
      <Controls onStartStop={toggleRunning} onReset={reset} isRunning={isRunning} />
    </div>
  );
}