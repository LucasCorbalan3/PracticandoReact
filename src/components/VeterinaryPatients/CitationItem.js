import React from "react";
import { Button, Card,} from "react-bootstrap";

const CitationItem = () => {
  return (
    <>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Nombre Mascota</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Nombre Dueño</Card.Subtitle>
      <Card.Body>
        <Card.Text>Fecha</Card.Text>
        <Card.Text>hora</Card.Text>
        <Card.Text>Sintomas</Card.Text>
        <Button variant="primary">Cerrar Cita</Button>
      </Card.Body>
    </>
  );
};

export default CitationItem;
