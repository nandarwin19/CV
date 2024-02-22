import { useState } from "react";
import Cards from "./Cards";
import ResultPage from "./ResultPage";

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [outcome, setOutcome] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  return (
    <div className="max-container">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl tablet:text-[40px]">Pokémon!</h1>
        <div>
          <h2 className="text-[16px] tablet:text-xl">
            High Score: {highScore}
          </h2>
          <h2 className="text-[16px]  tablet:text-xl">Score: {score}</h2>
        </div>
      </header>
      <section className="w-full py-4">
        {!displayResult && (
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
        )}
        <ResultPage
          outcome={outcome}
          setDisplayResult={setDisplayResult}
          result={displayResult}
        />
      </section>
      <p className="text-center text-sm text-[#c3c3c3]">
        Created by{" "}
        <a href="https://github.com/nandarwin19" className="underline ">
          nwin
        </a>
      </p>
    </div>
  );
}

export default Game;
