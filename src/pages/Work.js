import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import One from "../images/Brixton-Work.JPG";
import Five from "../images/Design-Work.JPG";
import Two from "../images/Lion-new-version.JPG";
import Three from "../images/Joker-new-version.JPG";
import Four from "../images/Banking-new-version.JPG";
import Six from "../images/space.JPG";
import Seven from "../images/Ok.JPG";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';
import uiux from "../images/Wooside-work.JPG";



const Work = () => {

    const line1 = "OUR"
    const line2 = "WORK"
    const design = "[BRIXTON PHOTOGRAPHY]"
    const drink = "[OK DRINK] "
    const woodside = "[WOOSIDE DESIGN]"
    const interior = "[SPACE DESIGN]"
    const nationalgeo = "[NATIONAL GEOGRAPHY]"
    const banking = "[BANKING]"
    const joker = "[THE JOKER]"

    const brixon = "BRIXON PHOTOGRAPY"

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

    const button ={
        hidden: {opacity:0},
        visible:{
            opacity:1,
            transition: {
                delay: 0.9,
                staggerChildren: 0.08,
            }
        }
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <>

        <Helmet>
            <title> Portfolio: Showcasing the Excellence of Kreative Enterprises </title>
            <meta name="description" content="Explore the impressive portfolio of Kreative Enterprises,
             where we showcase our creative excellence in web design. Discover a collection of stunning websites
             , captivating UI/UX designs, and successful digital projects that reflect our commitment to delivering
              outstanding results. Immerse yourself in our portfolio and envision the possibilities for
               your own digital success." />
            <link rel="canonical" href="/work" />
        </Helmet>
        <div className="">
            <section className="main">
                <div className="intro intro-work">
                    <div className="row ">
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
                            We take digital experiences to the next level.
                            </p>
                        </motion.div>
                    </div>
                    
                </div>
            </section>
            <div className="portfolio">
                <div className="service-intro">
                    <div className="marquee-w">
                        <div className="marquee">
                            <span>DISCUSS YOUR IDEAS</span>
                        </div>
                    </div>
                </div>
                <div className="row title">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="row">
                    <div className="col-lg-5 align-middle">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {woodside.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                            <br/>
                            

                           


                        </motion.h1>
                        
                    </div>
                    <div className="col-lg-7">
                        <motion.img
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="img-fluid" src={uiux} alt="Brixon Design" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 align-middle">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {drink.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                           


                        </motion.h1>
                       
                    </div>
                    <div className="col-lg-7">
                        <motion.img
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                         className="img-fluid" src={Seven} alt="Ok Drink" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 align-middle">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {interior.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                           


                        </motion.h1>
                      
                    </div>
                    <div className="col-lg-7">
                        <motion.img
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className="img-fluid" src={Six} alt="Space Design" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 align-middle">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {design.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                           


                        </motion.h1>
                        
                    </div>
                    <div className="col-lg-7">
                        <motion.img
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className="img-fluid" src={Five} alt="Art Gallery" />
                    </div>
                </div>
              
                <div className="row">
                    <div className="col-lg-5">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {nationalgeo.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                           


                        </motion.h1>
                      
                    </div>
                    <div className="col-lg-7">
                        <motion.img
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className="img-fluid" src={Two} alt="National Geography Design" />

                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-5">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {joker.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                           


                        </motion.h1>


                    </div>
                    <div className="col-lg-7">
                        <motion.img
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }} className="img-fluid" src={Three} alt="The Joker Design" />

                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-5">
                    <motion.h1
                            className="load-screen-message"
                            variants={sentence}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {banking.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                           


                        </motion.h1>

                       

                    </div>
                    <div className="col-lg-7">
                        <motion.img 
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}className="img-fluid" src={Four} alt="Banking Design" />

                    </div>

                </div>

            </div>

            <ContactForm />

        </div>
    </>
}
export default Work;