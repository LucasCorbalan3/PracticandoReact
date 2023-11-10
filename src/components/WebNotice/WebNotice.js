import React from "react";
import { Card, Row } from "react-bootstrap";

const WebNotice = (props) => {
  const { articles } = props;
  return (
    <div>
      <h2 className="text-center">Noticias</h2>
      <Row className="my-3 p-2">
      {articles.map((articles) => (
        <Card className="mx-4 my-2">
          <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Subtitle className="mt-3 text-muted">
              {articles.author}
            </Card.Subtitle>
          <Card.Body>
            <Card.Title> {articles.title} </Card.Title>
            <Card.Title> {articles.description} </Card.Title>
            <Card.Link href={articles.url}>Leer Mas</Card.Link>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </div>
  );
};

export default WebNotice;
