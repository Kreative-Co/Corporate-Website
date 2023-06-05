import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faHandshakeSimple, faCirclePlay, faScrewdriverWrench, faCode, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import AOS from "aos";
import "aos/dist/aos.css";
import sectionImage from "../images/photo-5.avif";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';
import 'swiper/swiper-bundle.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const now = 60;

    return <>

        <Helmet>
            <title>Services: Website Development, Maintenance, and UX/UI Design by Kreative Enterprises </title>
            <meta name="description" content="Discover the comprehensive services offered by Kreative Enterprises,
             including expert website development, meticulous maintenance, and cutting-edge UX/UI design.
              Our team of skilled professionals is dedicated to delivering tailored solutions
               that elevate your online presence, enhance user experience, and ensure seamless
                functionality. Partner with us to transform your digital landscape and unlock 
                the full potential of your business." />
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
                            Our company offers exceptional web design services
                            tailored to meet the unique needs of businesses and individuals alike.
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
                        <img className="img-fluid" src={sectionImage} alt="service image" />

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