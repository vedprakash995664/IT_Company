import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CSS/Header.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="headerOuter" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="Images/logo1.png" alt="Logo" className="logo img-fluid" />
        </Navbar.Brand>

        {/* Mobile toggle (offcanvas only shows below lg) */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas only for mobile */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="offcanvasBg d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#action1" className="navItem">Home</Nav.Link>
              <Nav.Link href="#action2" className="navItem">Services</Nav.Link>
              <Nav.Link href="#action3" className="navItem">Portfolio</Nav.Link>
              <Nav.Link href="#action4" className="navItem">About Us</Nav.Link>
              <Nav.Link href="#action5" className="navItem">Contact Us</Nav.Link>
            </Nav>
            <div className="socialIcons d-flex align-items-center gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/ved-prakash-93436518a/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        {/* Regular nav links for desktop view */}
        <Navbar.Collapse id="navbarScroll" className="d-none d-lg-flex">
        <Nav className="m-auto">
  <Nav.Link as={Link} to="/" className="navItem">Home</Nav.Link>
  <Nav.Link as={Link} to="/services" className="navItem">Services</Nav.Link>
  <Nav.Link as={Link} to="#" className="navItem">Portfolio</Nav.Link>
  <Nav.Link as={Link} to="/about" className="navItem">About Us</Nav.Link>
  <Nav.Link as={Link} to="/contact" className="navItem">Contact Us</Nav.Link>
</Nav>


          <div className="socialIcons d-flex align-items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
