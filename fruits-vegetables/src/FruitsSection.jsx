import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemCard from './ItemCard';
import Accordion from 'react-bootstrap/Accordion';


  
const FruitsSection = ({ fruits }) => {
  return (
    <Container fluid id="fruits-section" className="mt-5 pt-5">
      <h2 className="my-4 text-center">Fruits</h2>
      <Row className="g-4 justify-content-center">
        {fruits.map((fruit) => (
          <ItemCard key={fruit.id} item={fruit} />
        ))}
      </Row>
    </Container>
  );
};

export default FruitsSection;
