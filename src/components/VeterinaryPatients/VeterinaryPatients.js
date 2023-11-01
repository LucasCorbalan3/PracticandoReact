import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Veterinary.css";
import Swal from "sweetalert2";
import CitationItem from "./CitationItem";
import "bootstrap/dist/css/bootstrap.min.css";

const VeterinaryPatients = () => {
  const [citation, SetCitation] = useState("");
  const [citacions, SetCitations] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    SetCitations((prevCitations) => ({
      ...prevCitations,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.PreventDefault();
    if (
      citacions.mascota.trim() &&
      citacions.dueño.trim() &&
      citacions.fecha.trim() &&
      citacions.hora.trim() &&
      citacions.sintomas.trim()
    )
      Swal.fire({
        title: "Seguro desea enviar el formulario?",
        showDenyButton: true,
        confirmButtonText: "Enviar",
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          SetCitation((prevArray) => [...prevArray, citacions]);
          Swal.fire("datos Enviado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Envio cancelado", "", "info");
        }
      });
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completar todos los campos",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    SetCitations({});
  };

  useEffect(() => {
    localStorage.setItem("Citas", JSON.stringify(citation));
  }, [citation]);

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
            name="mascota"
            className="mb-3"
            type="text"
            placeholder="Nombre de la Mascota"
            onChange={handleChange}
            value={citacions.mascota || ""}
          />
          <Form.Label>Nombre del Dueño</Form.Label>
          <Form.Control
            name="dueño"
            className="mb-3"
            type="text"
            placeholder="Nombre del Dueño"
            onChange={handleChange}
            value={citacions.dueño || ""}
          />
          <Form.Label>Fecha de Ingreso</Form.Label>
          <Form.Control
            name="fecha"
            className="mb-3"
            type="date"
            onChange={handleChange}
            value={citacions.fecha || ""}
          />
          <Form.Label>Hora de Ingreso</Form.Label>
          <Form.Control
            name="hora"
            className="mb-3"
            type="time"
            onChange={handleChange}
            value={citacions.hora || ""}
          />
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            name="sintomas"
            as="textarea"
            rows={5}
            placeholder="Ingrese un detalle de los sintomas presentados"
            onChange={handleChange}
            value={citacions.sintomas || ""}
          />
          <Button variant="primary" type="submit">
            Guardar Cita
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        {citation.map((cita, index) => (
          <CitationItem cita={cita} key={index} />
        ))}
      </section>
    </>
  );
};

export default VeterinaryPatients;
