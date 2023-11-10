import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const WebNotice = (props) => {
  const { articles } = props;
  return (
    <div>
      <h2 className="text-center">Noticias</h2>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Row className="my-3 p-2">
        {articles.map((articles) => (
          <Card className="mx-4 my-2">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Subtitle className="mt-3 text-muted">
              {articles.author}
            </Card.Subtitle>
            <Card.Body>
              <Card.Title> {articles.title} </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                modi, ducimus commodi ut totam provident.
              </Card.Text>
              <Card.Link href={articles.url} className="text-decoration-none">
                Leer Noticias
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default WebNotice;
