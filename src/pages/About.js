
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import '../style/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import reactImage from "../images/photo-5.avif";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';
//import "@fontsource/montserrat"; // Defaults to weight 400



const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <>

        <Helmet>
            <title> About Us </title>
            <meta name="description" content="About the web agency LK Enterprise & Co" />
            <link rel="canonical" href="/about" />
        </Helmet>

        <div className="company">
            <section className="main">
                <div className="intro">
                    <div className="row">
                        <div className="col-lg-7">

                            <h1>
                                ABOUT US.
                            </h1>
                            <Link to="/work" className="button">View Work</Link>
                            <Link to="/services" className="button disappear">Services</Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="video">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}></FontAwesomeIcon>

                            </div>


                            <p>
                            We are committed to building long-term relationships with our customers. 
                            </p>

                        </div>
                    </div>

                </div>



            </section>

            {/** About */}
            <div className="about">
            <div className="service-intro">
                    <div className="marquee-w">
                        <div className="marquee">
                            <span>LONG TERM RELATIONSHIPS</span>

                        </div>

                    </div>
                </div>

                <div className=" row">

                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="mission">
                        <h1>
                            Our Mission
                        </h1>
                        <p>
                            At our company, we are committed to building long-term relationships with our customers.
                            Our mission is to provide exceptional products and services that
                            exceed our customers' expectations
                            and establish us as a trusted partner in their success.

                        </p>
                        <p>
                            We believe that by taking the time to truly understand our customers'
                            unique needs and challenges, we can deliver customized solutions
                            that meet their specific requirements and help them achieve their goals.

                        </p>
                        </div>


                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                        <img className="img-fluid" src={reactImage} />




                    </div>


                </div>
            </div>

            {/* Core Values */}
            <div className=" core-values">

                <div className="title">
                    <h1 className="display-1 text-end" data-aos="fade-up"  > What We Stand For  </h1>
                </div>

                <Table responsive data-aos="fade-in">
                    <tbody>
                        <tr>
                            <td>INTEGRITY</td>
                            <td className="text-end"><FontAwesomeIcon icon={faArrowUpRightDots} /></td>
                        </tr>
                        <tr>
                            <td>WORK ETHIC</td>
                            <td className="text-end"><FontAwesomeIcon icon={faArrowUpRightDots} /></td>

                        </tr>
                      
                        <tr>
                            <td>EFFICIENCY</td>
                            <td className="text-end"><FontAwesomeIcon icon={faArrowUpRightDots} /></td>

                        </tr>
                    </tbody>
                </Table>

         
            </div>
            <ContactForm/>
        
        </div>


    </>;
}

export default About;