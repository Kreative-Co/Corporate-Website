
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../style/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import process1 from "../images/process1.png";
import process2 from "../images/process2.png";
import process3 from "../images/process3.png";
import process4 from "../images/process4.png";
import process5 from "../images/process5.png";
import process6 from "../images/process6.png";
import process7 from "../images/process7.png";
import process8 from "../images/process8.png";
import process9 from "../images/process9.png";
import reactImage from "../images/photo-5.avif";

import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import "@fontsource/marcellus";
//import "@fontsource/montserrat"; // Defaults to weight 400


const line1 = "ABOUT"
const line2 = "US"
const about = " At our company, we are committed to building long-term relationships with our customers. Our mission is to provide exceptional products and services that exceed our customers' expectations and establish us as a trusted partner in their success."
const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
}
const button = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.9,
            staggerChildren: 0.08,
        }
    }
}

const about_sentence = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.08,
        },
    },
}
const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
}
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <>

        <Helmet>
            <title> About Kreative Enterprises: Empowering Businesses with Innovative Web Design Solutions </title>
            <meta name="description" content="Discover the story behind Kreative Enterprises, a leading web design
             agency dedicated to empowering businesses with innovative digital solutions.
              Learn about our team of talented designers, our passion for creativity,
               and our commitment to delivering exceptional web design services.
                Explore how our expertise and industry knowledge can elevate your
                 online presence and drive your business forward. Partner with Kreative 
                 Enterprises and unlock the potential of impactful web design." />
            <link rel="canonical" href="/about" />
        </Helmet>

        <div className="company">
            <section className="main">
                <div className="intro">
                    <div className="row">
                        <div className="col-lg-7">

                            <motion.h1
                                className="load-screen-message"
                                variants={sentence}
                                initial="hidden"
                                animate="visible"
                            >
                                {line1.split("").map((char, index) => {
                                    return (
                                        <motion.span key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                                <br />
                                {line2.split("").map((char, index) => {
                                    return (
                                        <motion.span key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}


                            </motion.h1>
                            <motion.button
                                className="load-screen-message"
                                variants={button}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link className="button" to="/work">
                                    VIEW WORK
                                </Link>
                            </motion.button>
                            <motion.button
                                className="load-screen-message"
                                variants={button}
                                initial="hidden"
                                animate="visible">
                                <Link className="button disappear" to="/services">SERVICES</Link>
                            </motion.button>
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
                            className="col-lg-4">
                            <div className="video">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}></FontAwesomeIcon>

                            </div>
                            <p>
                                We are committed to building long-term relationships with our customers.
                            </p>

                        </motion.div>
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
                    <div className="col-lg-6" >
                        <motion.img

                            initial={{ opacity: 0, scale: 0.3 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className="img-fluid" src={reactImage} alt="about image" />
                    </div>
                </div>
                <div className="row process">
                    <div className="title" data-aos="fade-up">

                        <h1 className="text-light">
                            HOW WE WORK
                        </h1>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <img className="testing" src={process1} alt="client discovery image" />
                            <h1 className="text-white">Client Consulation & Discovery</h1>
                            <h6>Kreative Co</h6>

                        </div>

                        <div className="col-sm">
                            <img className="testing" src={process2} alt="strategy image" />
                            <h1 className="text-white">Strategy and Planning</h1>
                            <h6>Kreative Co</h6>

                        </div>

                        <div className="col-sm">
                            <img className="testing" src={process3} alt="initial payment image" />
                            <h1 className="text-white">Initial Payment 50%</h1>
                            <h6>Kreative Co</h6>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <img className="testing" src={process4} alt="devlopment image" />
                            <h1 className="text-white">Development / Creation</h1>
                            <h6>Kreative Co</h6>

                        </div>
                        <div className="col-sm">
                            <img className="testing" src={process5} alt="testing image" />
                            <h1 className="text-white">Testing and Quality Assurance</h1>
                            <h6>Kreative Co</h6>

                        </div>
                        <div className="col-sm">
                            <img className="testing" src={process6} alt="payment milestone image" />
                            <h1 className="text-white">Milestone Payment 25%</h1>
                            <h6>Kreative Co</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <img className="testing" src={process7} alt="launch image" />
                            <h1 className="text-white">Launch and Implemention</h1>
                            <h6>Kreative Co</h6>
                        </div>
                        <div className="col-sm">
                            <img className="testing" src={process8} alt="post-launch image" />
                            <h1 className="text-white">Post-Launch Support and Optimization</h1>
                            <h6>Kreative Co</h6>
                        </div>
                        <div className="col-sm">
                            <img className="testing" src={process9} alt="final payment image" />
                            <h1 className="text-white">Final Payment 25%</h1>
                            <h6>Kreative Co</h6>
                        </div>
                    </div>


                </div>
            </div>
            <div className="core-values">
                <div className="title">
                    <h1 className="display-1 text-end" data-aos="fade-up"  > What We Stand For  </h1>
                </div>
                <MDBAccordion flush initialActive={1} className="bg-dark">
                    <MDBAccordionItem collapseId={1} headerTitle='INTEGRITY' className="accordionItem">
                        Integrity is at the core of everything we do at our company. We believe that honesty,
                        transparency, and ethical behavior are essential to building trust and establishing
                        strong relationships with our customers, partners, and employees.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle='WORK ETHIC'>
                        We take pride in our strong work ethic and commitment to excellence. We believe that hard work,
                        dedication, and attention to detail are essential to achieving success and delivering exceptional
                        results for our customers.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle='EFFICIENCY'>
                        We are committed to delivering efficient solutions that meet our customers' needs quickly and
                        effectively. We understand that time is a valuable commodity, and we strive to provide solutions
                        that help our customers save time and increase productivity.
                    </MDBAccordionItem>
                </MDBAccordion>

            </div>




            <ContactForm />

        </div>


    </>;
}

export default About;