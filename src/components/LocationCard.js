import React from "react";
import { Card } from "semantic-ui-react";

const LocationCard = ({ name, type, dimension, residents }) => {
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          <p>Dimension: {dimension}</p>
          <p>Type: {type}</p>
          <p>Residents: {residents.length}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default LocationCard;
