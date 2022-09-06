import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
/* import { NavLink } from 'react-router-dom'; */


function NavbarReact() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="/">
            <img
              alt="logo"
              src="../logofender.png"
              width="100"
              height=""
              className="d-inline-block align-top"              
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href= '/'>Home</Nav.Link>
            <NavDropdown title="Guitarras" id="basic-nav-dropdown">
              <NavDropdown.Item href='/category/eléctrica'>Eléctricas</NavDropdown.Item>
              <NavDropdown.Item href='/category/acustica'>Acústicas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/Cart'><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;