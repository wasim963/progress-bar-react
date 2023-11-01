import { useState, useEffect, useRef } from "react";
import "./App.css";
import ProgressBar from "./components/progressBar";

const totalMs = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

export default function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      cyclesCompleted.current += 1;
      setProgress((prevProg) => prevProg + progressMade);
      if (cyclesCompleted.current === totalCycles) {
        clearInterval(timer.current);
      }
    }, interval);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
}
