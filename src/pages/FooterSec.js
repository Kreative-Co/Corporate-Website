import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { SocialIcon } from 'react-social-icons';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Footer.css';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../images/logo-new.png';


const FooterSec = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row" style={{ paddingBottom: "50px", position: "relative", left: "-15px" }}>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={Logo} />
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">

                        <h1>Our Company</h1>
                        <p>
                            At our company, we are committed to building long-term relationships with our customers.
                            Our mission is to provide exceptional products and services that
                            exceed our customers' expectations
                            and establish us as a trusted partner in their success.
                        </p>
                        <span class="icon-list">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </span>
                    </div>

                    <div className="col-lg-3">
                        <h1>Useful Links </h1>
                        <ul>
                            <li>
                                <Link className="footer-link" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/services">Services</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/work">Work</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/contact">Contact</Link>
                            </li>
                                                      

                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <h1>Portfolio</h1>
                        <ul>
                            <li>Boys Toys</li>
                            <li>Ceffie</li>
                            <li>Eternel Lounge</li>
                            <li>The Joker</li>
                            <li>National Geography</li>
                            <li>Balte Coffee</li>
                            <li>Green Space</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h1>What We Do</h1>
                        <ul>
                            <li>Websites & Web Applications</li>
                            <li>UI & UX Design</li>
                            <li>Maintenance Services</li>
                            <li>Hosting & Domain</li>
                            <li>Consulting Services</li>
                        </ul>
                    </div>
                </div>
                {/* Copyright Area*/}
                <div className="row copyright" >
                    <div className="col-lg-6">
                        <p>copyright 2023 LK, All Rights Reserved.
                        </p>
                    </div>
                   
                </div>
            </div>

        </div>

    );
}

export default FooterSec;