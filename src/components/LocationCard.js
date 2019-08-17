import React from "react";
import { Card } from "semantic-ui-react";

const LocationCard = ({ name, type, dimension, residents }) => {
  return (
    <Card>
      <Card.Header>Name</Card.Header>
      <Card.Content>Type</Card.Content>
      <Card.Content>Dimension</Card.Content>
      <Card.Content>Residents</Card.Content>
    </Card>
  );
};

export default LocationCard;
