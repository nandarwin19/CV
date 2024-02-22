import { useEffect, useState } from "react";
import Card from "./Card";

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Cards = ({
  score,
  setScore,
  highScore,
  setHighScore,
  outcome,
  setOutcome,
  displayResult,
  setDisplayResult,
}) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [includedName, setIncludedName] = useState([]);
  const [flip, setFlip] = useState(false);

  // Fetch pokemon data
  useEffect(() => {
    async function fetchData() {
      try {
        const cards = [];
        for (let i = 1; i <= 4; i++) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}/`
          );
          const data = await response.json();
          cards.push(data);
        }
        setPokemonData(cards);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // checking whether name is included in the array or not
  function checkingNames(name) {
    if (!includedName.includes(name)) {
      setIncludedName((prevData) => {
        return [...prevData, name];
      });
      setScore((score) => score + 1);
      shuffleData();
      setFlip(true);
      setTimeout(() => {
        setFlip(false);
      }, 1000);

      if (score >= highScore) {
        setHighScore(score + 1);
      }

      if (includedName.length + 1 === 4) {
        setOutcome("WIN");
        setDisplayResult(true);
        // alert("YOU WIN");
        setIncludedName([]);
        setScore(0);
      }
    } else {
      setOutcome("LOSE");
      setDisplayResult(true);
      // alert("YOU LOSE");
      setIncludedName([]);
      setScore(0);
    }
  }

  useEffect(() => {
    console.log(outcome);
  }, [outcome]);

  // Shuffle the data array
  function shuffleData() {
    setPokemonData((prevData) => shuffleArray(prevData));
  }

  return (
    <div className="py-10 flex flex-wrap w-full mx-auto gap-4">
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <Card
            key={pokemon.id}
            flip={flip}
            data={pokemon}
            checkingNames={checkingNames}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
