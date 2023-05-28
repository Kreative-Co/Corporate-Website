import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/black-logo.png';
const Layout = () => {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#home" className="brand">
          <Link to="/"><img src={Logo} alt="logo-image" /> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="topnav-right">
            <Nav.Link href="#home">
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="nav-link" href="#link">
              <Link className="nav-link" to="/services"> Services</Link></Nav.Link>
            <Nav.Link className="nav-link" href="#link">
              <Link className="nav-link" to="/work">Work</Link>
            </Nav.Link>
            <Nav.Link className="nav-link" href="#link">
              <Link className="nav-link" to="/about">About</Link>
            </Nav.Link>
            <Nav.Link className="nav-link" href="#link">
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  )
};
export default Layout;