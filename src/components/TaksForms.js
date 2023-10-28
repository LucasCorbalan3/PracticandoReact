import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaksList from "./TaksList";

const TaksForms = () => {
  let TasksInLocalStorage = JSON.parse(localStorage.getItem("Tasks")) || [];
  const [task, SetTask] = useState("");
  const [Tasks, SetTasks] = useState(TasksInLocalStorage);
  const HandleSubmit = (e) => {
    e.preventDefault();
    SetTasks([...Tasks, task]);
    SetTask("");
  };
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
  }, [Tasks]);

  return (
    <>
      <h1 className="text-center bold">Lista de Tareas Del dia</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Form onSubmit={HandleSubmit}>
              <Form.Group className="my-3">
                <Form.Control
                  className="my-3"
                  type="text"
                  placeholder="Ingresa tu Tarea"
                  onChange={(e) => SetTask(e.target.value)}
                  value={task}
                />
                <Button variant="primary" type="submit" >
                  Agregar Tarea
                </Button>
              </Form.Group>
            </Form>
          </div>
          <div className="col-sm-12 col-md-6">
            <section className="container">
              <TaksList TaksArray={Tasks}></TaksList>
            </section>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default TaksForms;
