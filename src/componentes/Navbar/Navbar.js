import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function NavbarReact() {
  return (
    <Navbar bg="dark opacity" variant="dark" expand="lg" className='fixed-top '>
      <Container>
      <Navbar.Brand as={NavLink} to='./'>
            <img
              alt="logo"
              src="../logofender.png"
              width="100"
              className="d-inline-block align-top inner"              
            />
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link as={NavLink} to='./'>Home</Nav.Link>
            <NavDropdown title="Guitarras" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/eléctrica'>Eléctricas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/acústica'>Acústicas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/'>Todos los Modelos</NavDropdown.Item>
              
              
            </NavDropdown>
            <Nav.Link as={NavLink} to='/Cart'><CartWidget/></Nav.Link>
             
             <div className='nav-icons'>
            <Nav.Link href='https://www.youtube.com/fendermusical'><img className='inner' src='../youtubeicon.png' alt='icon'width="25px"></img></Nav.Link>
            <Nav.Link href='https://www.instagram.com/fender/'><img className='inner' src='../instaicon.png' alt='icon'width="25px"></img></Nav.Link>
            <Nav.Link href='https://www.facebook.com/Fender'><img className='inner' src='../faceicon.png' alt='icon' width="25px"></img></Nav.Link>
            <Nav.Link href='https://twitter.com/Fender?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img className='inner' src='../twittericon.png' alt='icon'width="25px"></img></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;