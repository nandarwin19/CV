import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import ResultPage from "./components/ResultPage";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [outcome, setOutCome] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div className="max-container">
      <header className="flex items-center justify-between">
        <h1>Pokémon!</h1>
        <div>
          <h2>High Score: 0</h2>
          <h2>Score: {score}</h2>
        </div>
      </header>
      <body className="w-full py-4">
        <div className="text-center">
          <label className="text-xl">Cards </label>

          <input
            type="number"
            max={20}
            min={0}
            className="text-[#131313] px-2 w-20 rounded-md cursor-pointer"
          />
        </div>
        <Cards
          setScore={setScore}
          score={score}
          highScore={highScore}
          setHighScore={setHighScore}
          outcome={outcome}
          setOutCome={setOutCome}
        />
        <ResultPage />
      </body>
    </div>
  );
}

export default App;
