import React from "react";
import { Card } from "semantic-ui-react";

const EpisodeCard = (name, airDate, episode, characters) => {
  return (
    <Card>
      <Card.Header>Name</Card.Header>
      <Card.Content>Air Date</Card.Content>
      <Card.Content>Episode</Card.Content>
      <Card.Content>Characters</Card.Content>
    </Card>
  );
};

export default EpisodeCard;
