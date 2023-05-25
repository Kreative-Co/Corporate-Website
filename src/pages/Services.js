import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faHandshakeSimple, faCirclePlay, faScrewdriverWrench, faCode, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faFigma, faReact } from '@fortawesome/free-brands-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import { Accordion } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import sectionImage from "../images/photo-5.avif";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCards } from 'swiper';

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

        <section className="main">
            <div className="intro">
                <div className="row">
                    <div className="col-lg-7">

                        <h1>
                            WHAT WE DO
                        </h1>
                        <Link className="button" to="/work">View Work</Link>
                        <Link className="button disappear" to="/contact">Contact Us</Link>


                    </div>
                    <div className="col-lg-4">
                        <div className="video">
                            <FontAwesomeIcon className="icon" icon={faCirclePlay}></FontAwesomeIcon>

                        </div>


                        <p>
                            The art of visual communication, creatively impacting the world
                            arround us-one good design at a time, design like ou mean it!
                        </p>

                    </div>
                </div>

            </div>



        </section>
        <div className="service">




            <div className="section">
            <div className="service-intro">
                    <div className="marquee-w">
                        <div className="marquee">
                            <span>CUSTOM DESIGN</span>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 left" data-aos="fade-up">
                        <div className="data">
                            <h1>
                                OUR EXPERTISE
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

                    <div className="col-lg-5 droite">
                        <img className="img-fluid" src={sectionImage} alt="service-image" />

                    </div>
                </div>
            </div>
            {/** Services List */}
            <div class="services-list">
          

                <div className="row">
                    <div className="col-sm">
                        <FontAwesomeIcon icon={faCode} className="icons" />
                        <h1>Websites & Web Application</h1>
                        <p>
                            Websties solutions from corporate business websites
                            to e-commerce solutions for your business.
                        </p>

                    </div>
                    <div className="col-sm">
                        <FontAwesomeIcon icon={faFigma} className="icons" />
                        <h1>UI & UX Design</h1>
                        <p>
                            User interfaces for machines and software, such as computers,
                            home applications, with a focus on maximizing usability and user experience.
                        </p>

                    </div>
                    <div className="col-sm">
                        <FontAwesomeIcon icon={faHandshakeSimple} className="icons" />

                        <h1>Consulting Services</h1>
                        <p>
                            Consulting services to businesses and individuals on a given topic or area.
                        </p>

                    </div>
                    <div className="col-sm">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="icons" />
                        <h1>Maintenance Services</h1>
                        <p>
                            Maintenance packages for websites and web applications, consisting of ensuring the solutions provided perform at peak performance and remain error-free.
                        </p>

                    </div>
                </div>



                {/*} <div className="row align-items-center justify-content-center">
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
                </div>*/}
            </div>
            {/** Unique Solution */}
            <div className="container-fluid service-why">
                <div className="row ">

                    <div className="col-lg-12 ">
                        <div className="right">
                            <h1 className="display-2 text-end" data-aos="fade-left">
                                WHY CHOOSE US
                            </h1>
                            <Table responsive data-aos="fade-in" >
                                <tbody>
                                    <tr>
                                        <td>Customization</td>
                                        <td>

                                            <FontAwesomeIcon icon={faArrowUpRightDots} />


                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Collaboration</td>
                                        <td> <FontAwesomeIcon icon={faArrowUpRightDots} />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>Long-term relationships</td>
                                        <td><FontAwesomeIcon icon={faArrowUpRightDots} /></td>

                                    </tr>
                                    <tr>
                                        <td>Value</td>
                                        <td><FontAwesomeIcon icon={faArrowUpRightDots} /></td>

                                    </tr>

                                </tbody>

                            </Table>


                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />

        </div>
    </>;
};

export default Services;