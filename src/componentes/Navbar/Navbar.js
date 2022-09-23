import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavbarReact() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
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
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Guitarras" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/eléctrica'>Eléctricas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/acústica'>Acústicas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/'>Todos los Modelos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="#action/3.4">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/Cart'><CartWidget/></Nav.Link>
             
             <div className='nav-icons'>
            <Nav.Link href='https://www.youtube.com/fendermusical'><img src='../youtubeicon.png' alt='icon'width="25px"></img></Nav.Link>
            <Nav.Link href='https://www.instagram.com/fender/'><img src='../instaicon.png' alt='icon'width="25px"></img></Nav.Link>
            <Nav.Link href='https://www.facebook.com/Fender'><img src='../faceicon.png' alt='icon' width="25px"></img></Nav.Link>
            <Nav.Link href='https://twitter.com/Fender?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src='../twittericon.png' alt='icon'width="25px"></img></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;