import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then(resolve => setList(resolve.data.results))
      .catch(error => console.log("omg episodes > ", error));
  }, [props.match.path]);

  return (
    <section className="episode-list grid-view">
      {list.map(episode => {
        return <EpisodeCard key={episode.id} {...episode} />;
      })}
    </section>
  );
};

export default EpisodeList;

// https://rickandmortyapi.com/api/episodes
