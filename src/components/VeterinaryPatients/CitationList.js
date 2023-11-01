import React from "react";
import { Card } from "react-bootstrap";
import CitationItem from "./CitationItem";

const CitationList = ({ props }) => {
  return (
    <Card style={{ width: "18rem" }}>
      {props.CitationsArray.map((citacions) => (
        <CitationItem data={citacions} />
      ))}
    </Card>
  );
};
export default CitationList;
