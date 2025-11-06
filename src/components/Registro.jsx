import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Registro = () => {
  const navegacion = useNavigate();
  const avatars = [
    "https://preview.redd.it/yta0xtiii3m21.jpg?width=640&crop=smart&auto=webp&s=e025206b98f5bc3e3628b8bb433e6085b4a2929f",
    "https://preview.redd.it/xbox-360-default-gamerpics-my-beloved-multi-image-post-v0-zw5h7k2iodmb1.png?width=640&crop=smart&auto=webp&s=025c311c20dde74cab4c267b0348857ee1b868a3",
    "https://i.pinimg.com/originals/73/b7/10/73b71051c82f0fe336893fbafe81277a.jpg",
  ];

  const [perfil, setPerfil] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    email: "",
    twitter: "",
    ocupacion: "",
    foto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil({
      ...perfil,
      [name]: value,
    });
  };

  const postParticipante = async (participante) => {
    const response = await axios.post("http://localhost:3000/api/registro", {
      participante: participante,
    });

    console.log(response);

    if (response.status == 500) {
      alert("Error al registrar usuario");
    } else {
      alert("Usuario registrado correctamente");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postParticipante(perfil);
    navegacion("/participantes");
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 fw-bold text-primary">
                Registro
              </h2>
              <p className="text-center text-muted mb-4">
                Llena los datos para el registro
              </p>

              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="nombre">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        name="nombre"
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={FormData.nombre}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor ingresa tu nombre.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="apellidoPaterno">
                      <Form.Label>Apellido Paterno</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apellido paterno"
                        name="apellidoP"
                        value={FormData.apellidoP}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor ingresa tu apellido paterno.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="apellidoMaterno">
                      <Form.Label>Apellido Materno</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apellido materno"
                        name="apellidoM"
                        value={FormData.apellidoM}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="apellidoMaterno">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="email"
                        name="email"
                        value={FormData.apellidoM}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="twitter">
                      <Form.Label>Twitter (Opcional)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="@usuario"
                        name="twitter"
                        value={FormData.twitter}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="ocupacion">
                      <Form.Label>Ocupación</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Tu ocupación"
                        name="ocupacion"
                        value={FormData.ocupacion}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor ingresa tu ocupación.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="d-block mb-3 fw-bold">
                    Selecciona tu Avatar
                  </Form.Label>
                  <Row className="g-3">
                    {avatars.map((e, index) => {
                      return (
                        <Col>
                          <img
                            src={`${avatars[index]}`}
                            style={{ width: "100px" }}
                          ></img>
                          <Form.Check
                            type="radio"
                            name="foto"
                            label={`Foto ${index + 1}`}
                            value={e}
                            onChange={handleChange}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    id="terminos"
                    label={
                      <>
                        Leí y acepto los{" "}
                        <a href="#terminos">términos y condiciones</a>
                      </>
                    }
                    required
                    feedback="Debes aceptar los términos y condiciones."
                    feedbackType="invalid"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Registrarse
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
