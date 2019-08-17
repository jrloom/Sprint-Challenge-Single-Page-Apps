import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Card, Image, Icon } from "semantic-ui-react";

const CharacterCard = ({ character }) => {
  return (
    <Card raised>
      <Image src={character.image} alt={character.name} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{character.species}</Card.Meta>
        <Card.Meta>{character.status}</Card.Meta>
        <Card.Description>Location: {character.location.name}</Card.Description>
        <Card.Description>Origin: {character.origin.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <NavLink to="/episodes">
            <Icon name="use" />
            Episodes
          </NavLink>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
