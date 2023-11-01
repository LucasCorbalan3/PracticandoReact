import React from "react";
import { Button, Card } from "react-bootstrap";

const CitationItem = ({cita}) => {
  return (
    <Card className="text-center">
      <Card.Header> {cita.mascota} </Card.Header>
        <Card.Title> {cita.dueño} </Card.Title>
      <Card.Body>
        <Card.Text>
          {cita.fecha}
        </Card.Text>
        <Card.Text>
          {cita.hora}
        </Card.Text>
        <Card.Text>
          {cita.sintomas}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default CitationItem;
