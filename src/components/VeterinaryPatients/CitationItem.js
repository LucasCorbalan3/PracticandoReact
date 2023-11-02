import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import "./../../components/VeterinaryPatients/Veterinary.css";

const CitationItem = ({ cita, deleteCita }) => {
  return (
    <Row xs={1} md={2} className="g-4 my-3">
      <Card className="text-center card">
        <Card.Header> Mascota: {cita.mascota} </Card.Header>
        <Card.Title> Dueño: {cita.dueño} </Card.Title>
        <Card.Body>
          <Card.Text>Sintomas: {cita.sintomas}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <span>Fecha y Hora de Ingreso: </span> {cita.fecha} {cita.hora}
        </Card.Footer>
        <Button
          className="my-3"
          variant="primary"
          onClick={() => deleteCita(cita)}
        >
          Eliminar Cita
        </Button>
      </Card>
    </Row>
  );
};

export default CitationItem;
