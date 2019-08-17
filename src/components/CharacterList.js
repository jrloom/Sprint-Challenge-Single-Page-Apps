import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(resolve => setList(resolve.data.results))
      .catch(error => console.log("omg character > ", error));
  }, [props.match.path]);

  return (
    <section className="character-list grid-view">
      {list.map(character => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </section>
  );
};

export default CharacterList;

// https://rickandmortyapi.com/api/character/
