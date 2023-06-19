import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss';
import { useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/black-logo.png';
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";


const Layout = () => {

  // Initializing AOS 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 1.6

        }}
      >
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
      </motion.div>

      <Outlet />
    </>
  )
};
export default Layout;