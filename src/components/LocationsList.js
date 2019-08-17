import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(resolve => setList(resolve.data.results))
      .catch(error => console.log("omg locations > ", error));
  }, [props.match.path]);

  return (
    <section className="location-list grid-view">
      {list.map(location => {
        return <LocationCard key={location.id} {...location} />;
      })}
    </section>
  );
};

export default LocationList;

// https://rickandmortyapi.com/api/location
