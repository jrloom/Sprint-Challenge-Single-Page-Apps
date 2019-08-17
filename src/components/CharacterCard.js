import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";

const CharacterCard = () => {
  return (
    <Card>
      <Image alt={"altText"} />
      <Card.Content>
        <Card.Header>Character Name</Card.Header>
        <Card.Meta>Character Status</Card.Meta>
        <Card.Description>Character Location</Card.Description>
      </Card.Content>
      <Card.Content>
        <NavLink>Episodes</NavLink>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
