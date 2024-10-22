import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ItemCard = ({ item }) => {
  return (
    <Col xs={12} sm={6} md={3} lg={3} className="mb-4">
      <Card className="h-100 text-center">
        <Card.Img 
          variant="top" 
          src={item.img} 
          style={{ 
            objectFit: 'cover', // Fill the space without distortion
            height: '200px', // Fixed height for the image
            width: '100%', // Full width for the image
            borderRadius: '10px 10px 0 0' // Smooth edges for the image
          }} 
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="text-muted">{item.price} (500 grams)</Card.Text> {/* Added price with 500 grams text */}
          <Button variant="success" className="mt-auto">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;
