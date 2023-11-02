import React from "react";
import { Card, Row } from "react-bootstrap";
import {  } from "./../../components/VeterinaryPatients/Veterinary.css";

const CitationItem = ({ cita }) => {
  return (
    <Row xs={1} md={2} className="g-4 my-3">
    <Card className="text-center card" >
      <Card.Header> Mascota: {cita.mascota} </Card.Header>
      <Card.Title> Dueño: {cita.dueño} </Card.Title>
      <Card.Body>
        <Card.Text>Sintomas: {cita.sintomas}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span>Fecha y Hora de Ingreso: </span> {cita.fecha} {cita.hora}
      </Card.Footer>
        <button className="my-3" variant="primary">Eliminar Cita</button>
    </Card>
    </Row>
  );
};

export default CitationItem;
