import React from "react";
import { ListGroup } from "react-bootstrap";
import TaksItem from "./TaksItem";

const TaksList = (props) => {
  return (
    <ListGroup>
      {props.TaksArray.map((task, index) => (
        <TaksItem key={index} data={task}></TaksItem>
      ))}
    </ListGroup>
  );
};
export default TaksList;
