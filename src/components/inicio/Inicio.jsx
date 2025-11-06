import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  NavLink,
} from "react-bootstrap";
import React from "react";
import { Link } from "react-router";

const Inicio = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold text-primary">
              Congreso de Tecnologías de la Información
            </h1>
            <p className="lead text-muted mt-3">
              Únete a los líderes de la industria tecnológica en el evento más
              importante del año
            </p>
            <Link to={"/participantes"}>
              <Button variant="primary" size="lg" className="mt-3 me-2">
                Ver participantes
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i
                    className="bi bi-calendar-event"
                    style={{ fontSize: "3rem", color: "#0d6efd" }}
                  ></i>
                </div>
                <Card.Title>Nuestras TICS</Card.Title>
                <Card.Text>
                  Congreso Nacional de TI. Tecnologias de la informacion y las
                  comunicaciones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i
                    className="bi bi-people"
                    style={{ fontSize: "3rem", color: "#0d6efd" }}
                  ></i>
                </div>
                <Card.Title>UTL</Card.Title>
                <Card.Text>Universidad Tecnologica de León.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
