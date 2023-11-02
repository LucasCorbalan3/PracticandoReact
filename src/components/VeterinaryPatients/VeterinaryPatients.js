import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import CitationItem from "./CitationItem";

const VeterinaryPatients = () => {
  let citasFromLocalStorage = JSON.parse(localStorage.getItem("Citas")) || [];

  const [citation, SetCitation] = useState(citasFromLocalStorage);
  const [citacion, SetCitacion] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    SetCitacion((prevCitacion) => ({
      ...prevCitacion,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      citacion.mascota?.trim() &&
      citacion.dueño?.trim() &&
      citacion.fecha.trim() &&
      citacion.hora.trim() &&
      citacion.sintomas?.trim()
    )
      Swal.fire({
        title: "Are you sure you want to send the form?",
        showDenyButton: true,
        confirmButtonText: "Send",
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          SetCitation((prevArray) => [...prevArray, citacion]);
          Swal.fire("your appointment successfully!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("shipment canceled", "", "info");
        }
      });
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete all fields",
      });
    }
    SetCitacion({});
  };

  useEffect(() => {
    localStorage.setItem("Citas", JSON.stringify(citation));
  }, [citation]);

  const deleteCita = (cita) => {
    Swal.fire({
      title: "¿Are you sure you want to delete the appointment?",
      showDenyButton: true,
      confirmButtonText: "I am sure",
      denyButtonText: "I am not sure",
    }).then((result) => {
      if (result.isConfirmed) {
        let newCitations = citation.filter((id) => id !== cita);
        SetCitation(newCitations);
        Swal.fire("appointment eliminated!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Operation canceled", "", "info");
      }
    });
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
            name="mascota"
            className="mb-3"
            type="text"
            placeholder="Nombre de la Mascota"
            onChange={handleChange}
            value={citacion.mascota || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre del Dueño</Form.Label>
          <Form.Control
            name="dueño"
            className="mb-3"
            type="text"
            placeholder="Nombre del Dueño"
            onChange={handleChange}
            value={citacion.dueño || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Fecha de Ingreso</Form.Label>
          <Form.Control
            name="fecha"
            className="mb-3"
            type="date"
            onChange={handleChange}
            value={citacion.fecha || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Hora de Ingreso</Form.Label>
          <Form.Control
            name="hora"
            className="mb-3"
            type="time"
            onChange={handleChange}
            value={citacion.hora || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            name="sintomas"
            as="textarea"
            rows={5}
            placeholder="Ingrese un detalle de los sintomas presentados"
            onChange={handleChange}
            value={citacion.sintomas || ""}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar Cita
        </Button>
      </Form>
      <section className="container">
        {citation.map((cita, index) => (
          <CitationItem cita={cita} key={index} deleteCita={deleteCita} />
        ))}
      </section>
    </>
  );
};

export default VeterinaryPatients;
