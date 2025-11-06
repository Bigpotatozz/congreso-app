import { Container, Nav, Navbar } from "react-bootstrap";
import Inicio from "./components/inicio/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">CTI 2025</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/participantes">Listado participantes</Nav.Link>
              <Nav.Link href="/registro">Registro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
