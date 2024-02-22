import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import ResultPage from "./components/ResultPage";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [outcome, setOutcome] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div className="max-container">
      <header className="flex items-center justify-between">
        <h1>Pokémon!</h1>
        <div>
          <h2>High Score: {highScore}</h2>
          <h2>Score: {score}</h2>
        </div>
      </header>
      <section className="w-full py-4">
        <Cards
          setScore={setScore}
          score={score}
          highScore={highScore}
          setHighScore={setHighScore}
          outcome={outcome}
          setOutcome={setOutcome}
          setDisplayResult={setDisplayResult}
          displayResult={displayResult}
        />
        <ResultPage outcome={outcome} result={displayResult} />
      </section>
    </div>
  );
}

export default App;
