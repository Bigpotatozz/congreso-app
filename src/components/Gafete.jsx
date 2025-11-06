import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const Gafete = () => {
  const { id } = useParams();

  const [participante, setParticipante] = useState({});

  const obtenerUsuario = async (id) => {
    const response = await axios.get(
      `https://congreso-app-back-4.onrender.com/api/participante/${id}`
    );
    setParticipante(response.data.participante[0]);
  };

  useEffect(() => {
    obtenerUsuario(id);
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="row g-4 justify-content-center">
        <div className="col-md-5">
          <h3>Parte frontal</h3>
          <div
            className="card h-100 shadow-lg border-0"
            style={{
              background: "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)",
            }}
          >
            <div className="card-body d-flex flex-column align-items-center justify-content-center py-5 text-white text-center">
              <p className="small fw-bold mb-4" style={{ opacity: 0.8 }}>
                CONGRESO TECNOLOGICO
              </p>

              <div
                className="rounded-circle mb-4 overflow-hidden border border-4"
                style={{
                  width: "150px",
                  height: "150px",
                  borderColor: "#00bcd4",
                  flexShrink: 0,
                }}
              >
                <img
                  src={participante.foto}
                  alt={participante.nombre}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h3
                className="fw-bold mb-1"
                style={{ fontSize: "60px", letterSpacing: "1px" }}
              >
                {participante.nombre}
              </h3>

              <p
                className="small fw-bold text-uppercase"
                style={{ opacity: 0.9, letterSpacing: "2px", fontSize: "20PX" }}
              >
                {participante.ocupacion}
              </p>

              <p className="small fw-bold mt-auto" style={{ opacity: 0.8 }}>
                UNIVERSIDAD TECNOLOGICA DE LEON
              </p>
            </div>

            <div
              className="text-center py-2 text-white small"
              style={{ backgroundColor: "#0d47a1", fontSize: "16px" }}
            >
              CONGRESO NACIONAL DE TIC
            </div>
          </div>
        </div>

        <div className="col-md-5 mt-10">
          <br></br>
          <br></br>
          <h3>Parte trasera</h3>
          <div
            className="card h-100 shadow-lg border-0"
            style={{ background: "#f5f5f5" }}
          >
            <div className="card-body d-flex flex-column p-4">
              <p className="small fw-bold mb-3" style={{ color: "#0d47a1" }}>
                UNIVERSIDAD TECNOLOGICA DE LEON
              </p>

              <h5
                className="fw-bold mb-3 pb-2 text-uppercase"
                style={{ borderBottom: "2px solid #00bcd4", color: "#0d47a1" }}
              >
                {participante.nombre} {participante.apellidoP}{" "}
                {participante.apellidoM}
              </h5>

              <p className="small mb-2" style={{ color: "#666" }}>
                <strong>Correo: </strong>
                <br></br>
                {participante.email}
              </p>

              <p className="small mb-3" style={{ color: "#666" }}>
                <strong>Ocupación: </strong>
                <br></br>

                {participante.ocupacion}
              </p>

              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      backgroundColor: "#e0e0e0",
                      border: "2px solid #00bcd4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"></img>
                  </div>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center gap-2">
                  <div className="d-flex align-items-center gap-2 small">
                    <span style={{ color: "#666" }}>
                      {participante.twitter}
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 small">
                    <span style={{ color: "#666", fontSize: "11px" }}>
                      {participante.email}
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="small text-muted mb-auto"
                style={{ fontSize: "11px", lineHeight: "1.4" }}
              >
                Congreso Nacional de TI. Tecnologias de la informacion y las
                comunicaciones.
                <br></br>
                Universidad Tecnologica de León.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
