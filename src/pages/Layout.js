import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/black-logo.png';



const Layout = () => {
    return (
        <>


               {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                        <Navbar.Brand href="#" className="logo">KREATIVE & CO</Navbar.Brand>
                        <Navbar.Toggle className="toggle bg-light" aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    KREATIVE & CO
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3" >
                                    <Nav.Link href="#action1">
                                        <Link className="link" to="/">Home</Link>

                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Link className="link" to="/services">Services</Link>

                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Link className="link" to="/work">Work</Link>

                                    </Nav.Link>
                                    <Nav.Link href="#action2" >
                                        <Link className="link" to="/about">About</Link>

                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        <Link className="link" to="/contact">Contact</Link>

                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                </Navbar>
            ))}
       


            <Outlet />

        </>
    )
};

export default Layout;