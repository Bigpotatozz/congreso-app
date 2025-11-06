import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router";

const Participantes = () => {
  const [participantes, setParticipantes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const obtenerParticipantes = async () => {
    const response = await axios.get("http://localhost:3000/api/listado");
    console.log(response.data.participantes);
    setParticipantes(response.data.participantes);
  };

  const buscarParticipante = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/listadoP/?query=${busqueda}`
    );
    console.log(response);
    setParticipantes(response.data.participante);
  };

  const limpiarBusqueda = () => {
    setBusqueda("");
    obtenerParticipantes();
  };

  useEffect(() => {
    obtenerParticipantes();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Asistentes registrados</h2>

      <Link to={"/registro"}>
        <Button variant="success" style={{ marginBottom: "20px" }}>
          Registrar
        </Button>
      </Link>

      <InputGroup className="mb-4">
        <Form.Control
          placeholder="Buscar"
          aria-label="busqueda"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button variant="primary" onClick={() => buscarParticipante()}>
          Buscar
        </Button>

        <Button variant="danger" onClick={() => limpiarBusqueda()}>
          Limpiar
        </Button>
      </InputGroup>

      {participantes.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Row>
              <Col>
                <Link to={`/gafete/${e.id_participante}`}>
                  <img
                    src={e.foto}
                    style={{
                      width: "150px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                  />
                </Link>
              </Col>

              <Col>
                <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  {e.nombre} {e.apellidoP} {e.apellidoM}
                </h2>

                <p style={{ marginBottom: "5px" }}>
                  <strong>Twitter:</strong>
                </p>
                <a href={e.twitter}>{e.twitter}</a>
                <p style={{ marginBottom: "0" }}>
                  <strong>Ocupación:</strong>
                  <br />
                  {e.ocupacion}
                </p>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Participantes;
