import React from "react";
import { ListGroup } from "react-bootstrap";

const TaksItem = ({ data }) => {
  return <ListGroup.Item className="lead">{data}</ListGroup.Item>;
};

export default TaksItem;
