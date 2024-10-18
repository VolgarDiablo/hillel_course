import React from "react";
import { Card, ListGroup, Container } from "react-bootstrap";
import "./swapi.css";

const Swapi = () => {
  return (
    <Container className="mt-5">
      <h1 className="title">SWAPI People</h1>
      <Card className="mt-4">
        <Card.Header className="cardHeader">
          <h2>Luke Skywalker</h2>
        </Card.Header>

        <ListGroup variant="flush">
          <ListGroup.Item className="listGroupItem">
            <strong>Height:</strong> 172 cm
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <strong>Mass:</strong> 77 kg
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <strong>Hair Color:</strong> Blond
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <strong>Eye Color:</strong> Blue
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <strong>Gender:</strong> Male
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <strong>Birth Year:</strong> 19BBY
          </ListGroup.Item>
          <ListGroup.Item className="listGroupItem">
            <strong>Homeworld:</strong> Tatooine
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Swapi;
