import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, Link } from "react-router-dom";
import { faMailBulk, faPhone, faHandshakeSimple, faLocation, faScrewdriverWrench, faCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import {faFigma } from '@fortawesome/free-brands-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from "aos";
import "aos/dist/aos.css";
import sectionImage from "../images/web5.webp";
import emailjs from "@emailjs/browser";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';



const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const now = 60;

    return <>

        <Helmet>
            <title> Services </title>
            <meta name="description" content="Services of LK Enterprises & Co" />
            <link rel="canonical" href="/services" />
        </Helmet>


        <div className="service">
            <section className="main" >
                <div className="container">
                    <div className="row">
                        <div className="col-sm" data-aos="fade-left">
                            <div className="info">
                                <h1 className="display-1 text-light">
                                    What We
                                </h1>
                                <h1 className="display-1 text-light">
                                    Excel At!
                                </h1>
                                <Link to="/contact" className="btn">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section">
                <div className="row">
                    <div className="col-sm left" data-aos="fade-up">
                        <div className="data">
                            <h1>
                                Let Us Know Why You are the Best
                            </h1>
                            <p>
                                By investing in our design solutions, you position your business for long-term success,
                                a loyal customer base, and driving growth in your industry.
                            </p>
                            <div className="progress-sec">
                                <h2>Web Design</h2>
                                <ProgressBar className='progress' variant="warning" now={90} />
                            </div>
                            <div className="progress-sec">
                                <h2>Development</h2>
                                <ProgressBar className='progress' variant="warning" now={90} />
                            </div>
                            <div className="progress-sec">
                                <h2>Consulting</h2>
                                <ProgressBar className='progress' variant="warning" now={75} />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm droite" data-aos="fade-left">
                        <img className="img-fluid" src={sectionImage} />
                    </div>
                </div>
            </div>
            {/** Services List */}
            <div class="container services-list">


                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                        <div className=" card card-service border-r-0 p-4 p-lg-5 mb-5 animate__animated animate__flipInY" data-aos="fade-up">
                            <FontAwesomeIcon icon={faCode} className="icons" />
                            <h1>Websites & Web Application</h1>
                            <p>
                                Websties solutions from corporate business websites
                                to e-commerce solutions for your business.
                            </p>
                            <Link to="/contact" className="button">Contact Us</Link>

                        </div>
                        <div className=" card card-service border-r-0 p-4 p-lg-5 mb-5 animate__animated animate__flipInY" data-aos="fade-up">
                            <FontAwesomeIcon icon={faFigma} className="icons" />
                            <h1>UI & UX Design</h1>
                            <p>
                                User interfaces for machines and software, such as computers,
                                home applications, with a focus on maximizing usability and user experience.
                            </p>
                            <Link to="/contact" className="button">Contact Us</Link>

                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 order-md-3 order-lg-2">
                        <div className=" card card-service border-r-0 p-4 p-lg-5 mb-5 animate__animated animate__flipInY" data-aos="fade-up">
                            <FontAwesomeIcon icon={faHandshakeSimple} className="icons" />

                            <h1>Consulting Services</h1>
                            <p>
                                Consulting services to businesses and individuals on a given topic or area.
                            </p>
                            <Link to="/contact" className="button">Contact Us</Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 order-md-2 order-lg-3">
                        <div className=" card card-service border-r-0 p-4 p-lg-5 mb-5 animate__animated animate__flipInY" data-aos="fade-up">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="icons" />
                            <h1>Maintenance Services</h1>
                            <p>
                                Maintenance packages for websites and web applications, consisting of ensuring the solutions provided perform at peak performance and remain error-free.
                            </p>
                            <Link to="/contact" className="button">Contact Us</Link>

                        </div>
                        <div className=" card card-service border-r-0 p-4 p-lg-5 mb-5 animate__animated animate__flipInY" data-aos="fade-up">
                            <FontAwesomeIcon icon={faCode} className="icons" />
                            <h1>Hosting & Domain</h1>
                            <p>
                                Hosting and domain packages for clients’ websites.
                            </p>
                            <Link to="/contact" className="button">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/** Unique Solution */}
            <div id="container-fluid" className="container-fluid">
                <div className="row ">
                    <div className="col-sm left">
                    </div>
                    <div className="col-sm ">
                        <div className="right">
                            <h1 className="display-2" data-aos="fade-left">
                                Unique Solutions for Your Business
                            </h1>
                            <p className="" data-aos="fade-left">
                                Our custom-made designs are tailored to your business needs, goals, and branding.
                                We provide solutions that help businesses stand out from the competition,
                                build brand recognition,  and ultimately drive revenue.
                            </p>
                        </div>



                    </div>
                </div>
            </div>

            <ContactForm/>

        </div>
    </>;
};

export default Services;