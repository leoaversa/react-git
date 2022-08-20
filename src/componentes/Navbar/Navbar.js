import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';

function NavbarReact() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Yerba Clásica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Roja
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blanca</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;