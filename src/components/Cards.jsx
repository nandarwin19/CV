import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({
  score,
  setScore,
  highScore,
  setHighScore,
  outcome,
  setOutcome,
}) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [includedName, setIncludedName] = useState([]);

  // Fetch pokemon data
  function GetPokemon() {
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
          // console.log(pokemonData);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
    return pokemonData;
  }

  // checking whether name is included in the array or nah
  function checkingNames(name) {
    if (!includedName.includes(name)) {
      setIncludedName((prevData) => {
        return [...prevData, name];
      });
      setScore((score += 1));
      console.log(score);
    }
  }

  const data = GetPokemon(); //get pokemon data
  console.log(data);

  return (
    <div className="py-10 flex flex-wrap w-full mx-auto gap-4">
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <Card key={pokemon.id} data={pokemon} checkingNames={checkingNames} />
        </div>
      ))}
    </div>
  );
};

// Cards.propTypes = {

// };

export default Cards;
