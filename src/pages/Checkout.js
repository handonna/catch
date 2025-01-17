
import React from 'react';
import { Col, Row, Container, Button, Form, Card } from 'react-bootstrap';

import imageSrcTest from '../images/logo.png' // Adjust the path as needed
import "./Checkout.css"
import { FaTrashAlt } from "react-icons/fa";



export default function Checkout() {
  const cartItems = [
    { id: 1, name: 'Item 1', quantity: 2, imageSrc: imageSrcTest, description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', quantity: 1, imageSrc: imageSrcTest, description: 'Description for Item 2' },
  ];

  return (
    <>
      <Container>
        <Row className="my-4">
          <Col md={6}>
            <h2 className='text-left'>Cart</h2>
            <p className='text-left'>Please check your cart before proceeding</p>
            {cartItems.map((item) => (
              <Card key={item.id} className="mb-3">
                <Card.Body>
                  <Row>
                    <Col sm={4}>
                      <Card.Img variant="top" src={item.imageSrc} />
                    </Col>
                    <Col sm={8}>
                      <Card.Title className="text-left">{item.name}</Card.Title>
                      <Card.Text className="text-left">
                        {item.description}
                      </Card.Text>
                      <div className="text-left">
                        <FaTrashAlt />
                        <Button className="transparent-button">-</Button>
                        <span>{item.quantity}</span>
                        <Button className="transparent-button">+</Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6}>
            <h2 className='text-left'>Enter your Information:</h2>
            <br></br>
            <Form>
              <Form.Group className="mb-3 text-left" controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>

              <Form.Group className="mb-3 text-left" controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3 text-left" controlId="formOrg">
                <Form.Label>Organization:</Form.Label>
                <Form.Control type="text" placeholder="Enter your organization's name" />
              </Form.Group>

              <Form.Group className="mb-3 text-left" controlId="formNumber">
              <Form.Label>Number of Buttons for Toys:</Form.Label>
              <Form.Control type="number" placeholder="MAX 2 PER 3 TOYS" />
              </Form.Group>

              <Form.Group className="mb-3 text-left" controlId="formAddress">
                <Form.Label>Address:</Form.Label>
                <Form.Control placeholder="Street address, City, State, Zip code" />
              </Form.Group>

              <Form.Group className="mb-3 text-left" controlId="formNotes">
                <Form.Label>Additional Notes:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Anything else you'd like to add?" />
              </Form.Group>

              <Button variant="success" type="submit" size="lg" className="btn-block">
                Submit Order
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}