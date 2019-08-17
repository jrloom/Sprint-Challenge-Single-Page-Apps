import React from "react";
import { Card } from "semantic-ui-react";

const EpisodeCard = ({ name, air_date, episode }) => {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          <p>Air Date: {air_date}</p>
          <p>Episode: {episode}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EpisodeCard;
