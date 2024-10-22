import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemCard from './ItemCard';
import Accordion from 'react-bootstrap/Accordion';


const VegetablesSection = ({ vegetables }) => {
  return (
    <Container fluid id="vegetables-section" className="mt-5">
      <h2 className="my-4 text-center">Vegetables</h2>
      <Row className="g-4 justify-content-center">
        {vegetables.map((vegetable) => (
          <ItemCard key={vegetable.id} item={vegetable} />
        ))}
      </Row>
    </Container>
  );
};

export default VegetablesSection;
