import React from "react";
import { Card } from "react-bootstrap";

const WebNotice = (props) => {
  const { articles } = props;
  return (
    <div>
      <h2 className="text-center">Noticias</h2>
      {articles.map((articles) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Subtitle className="mb-2 text-muted">
              {articles.author}
            </Card.Subtitle>
          <Card.Body>
            <Card.Title> {articles.title} </Card.Title>
            <Card.Title> {articles.description} </Card.Title>
            <Card.Link href={articles.url}>Leer Mas</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default WebNotice;
