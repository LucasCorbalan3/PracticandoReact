import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Veterinary.css";
import CitationList from "./CitationList";
const VeterinaryPatients = () => {
  const [citation, SetCitation] = useState("");
  const [citacions, SetCitations] = useState([]);
  const handleSubmit = (e) => {
    e.PreventDefault8();
    SetCitations([...citacions, citation]);
    SetCitation("");
  };

  return (
    <>
      <section className="text-center">
        <h1>Administrador de pacientes de Veterinaria</h1>
        <span>
          <p className="bold fs-5">Llenar el formulario para generar un cita</p>
        </span>
      </section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de la Mascota</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Nombre de la Mascota"
            onChange={(e) => SetCitation(e.target.value)}
            value={citation}
          />
          <Form.Label>Nombre del Dueño</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Nombre del Dueño"
            onChange={(e) => SetCitation(e.target.value)}
            value={citation}
          />
          <Form.Label>Fecha de Ingreso</Form.Label>
          <Form.Control
            className="mb-3"
            type="date"
            onChange={(e) => SetCitation(e.target.value)}
            value={citation}
          />
          <Form.Label>Hora de Ingreso</Form.Label>
          <Form.Control
            className="mb-3"
            type="time"
            onChange={(e) => SetCitation(e.target.value)}
            value={citation}
          />
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Ingrese un detalle de los sintomas presentados"
            onChange={(e) => SetCitation(e.target.value)}
            value={citation}
          />
          <Button variant="primary" type="submit">
            Guardar Cita
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <CitationList CitationsArray={citacions}>

        </CitationList>
      </section>
    </>
  );
};

export default VeterinaryPatients;
