import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.scss';
import SectionHeader from './SectionHeader';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightDots, faScrewdriverWrench, faCircle } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import uiux from "../images/Wooside-work.JPG";
import vogue from "../images/Vogue.JPG";
import web_design from "../images/Web-Design.jpg";
import consult from "../images/consult.jpeg";
import One from "../images/Coffee-Work.JPG";
import Two from "../images/aloe-green-min.JPG"
import Three from "../images/lion-new-min.JPG";
import Four from "../images/beauty-min.jpg";
import Five from "../images/mercedes-min.jpg";
import Eight from "../images/Joker-Work-min.jpg";
import Six from "../images/Brixon-Work.JPG";
import Seven from "../images/Design-Work.JPG";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCards } from 'swiper';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import "react-multi-carousel/lib/styles.css";
import ContactForm from './ContactForm';
import "@fontsource/syncopate";
import "@fontsource/montserrat"; // Defaults to weight 400
import { motion } from 'framer-motion';
import "@fontsource/archivo"; // Defaults to weight 400
import "@fontsource/archivo/400.css"; // Specify weight
import "@fontsource/archivo/400-italic.css"; // Specify weight and style

const Home = () => {
    const line1 = "DIGITIZE"
    const line2 = "IDEAS."
    const line = "LET'S DICUSS YOUR IDEAS"
    const about_line = "About"
    const about_line1 = "Web design agency specializing in "
    const about_line2 = "providing exceptional UI & UX design,"
    const about_line3 = "branding solutions, and custom web"
    const about_line4 = "design services to startups and small"
    const about_line5 = "businesses."
    const about_line6 = "digital goals."

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

    const about_sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.08,

            }
        }
    }
    const about_sentence1 = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
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

    const about_sentence2 = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.08,
            },
        },
    }
    const about_sentence3 = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.08,
            },
        },
    }
    const about_sentence4 = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.08,
            },
        },
    }
    const about_sentence5 = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.08,
            },
        },
    }
    const about_sentence6 = {
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
    // Initializing AOS 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <>

        <Helmet>
            <title> Kreative Enterprises: Professional Web Design Agency Transforming Online Presence</title>
            <meta name="description" content="Kreative Enterprises: Unlocking the Power of Creativity in Web Design.
             We are a dynamic web design agency that specializes in crafting visually stunning and user-friendly websites.
              From concept to execution, our team of talented designers and developers will bring your brand to life online. 
            Discover the limitless possibilities with Kreative Enterprises" />
            <link rel="canonical" href="/" />
        </Helmet>
        <div className="content">
            {/*Hero Section*/}
            <section className="main " >
                <div className="intro" >
                    <div className="row" >
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
                            <div className="intro-button">

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
                                    <Link className="button disappear" to="/contact">Contact Us</Link>
                                </motion.button>
                            </div>
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
                                Digital product and brand agency for startups and small businesses!
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}

                        className="intro-image">

                        <div className="row">
                            <div className="col-lg-8">

                            </div>
                            <div className="col-lg-3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                    className="span">
                                </motion.div>


                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
            {/** Services */}
            <div className="new-services">
                <div className="service-intro">
                    <div className="marquee-w">
                        <div className="marquee">
                            <span>DISCUSS YOUR IDEAS</span>
                        </div>
                    </div>
                </div>
                <section className={"about-us"}>
                    <SectionHeader title="about" />

                    <motion.p
                        variants={about_sentence1}
                        initial="hidden"
                        whileInView="visible">

                        {about_line1}
                        <br />
                    </motion.p>
                    <motion.p
                        variants={about_sentence2}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {about_line2}
                        <br />
                    </motion.p>
                    <motion.p
                        variants={about_sentence2}
                        initial="hidden"
                        whileInView="visible"
                    >

                        {about_line3}
                        <br />
                    </motion.p>
                    <motion.p
                        variants={about_sentence2}
                        initial="hidden"
                        whileInView="visible"
                    >

                        {about_line4}
                        <br />
                    </motion.p>
                    <motion.p
                        variants={about_sentence2}
                        initial="hidden"
                        whileInView="visible"
                    >

                        {about_line5}
                        <br />
                    </motion.p>
                </section>
                <div className="our-services">
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-6" >
                            <h1 className="hide">
                                SERVICES
                            </h1>
                            <p>
                                By investing in our design solutions, you position your business for long-term success, a loyal customer base, and driving growth in your industry.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <span>
                                <h1
                                    className="display-1 reveal">
                                    SERVICES
                                </h1>
                            </span>
                        </div>
                    </div>
                    <div className="new-item">

                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h1 className="ui-title hide"> UI/UX DESIGN</h1>
                                        <img className="ui-ux" src={uiux} alt="UI/UX Design" />
                                    </div>
                                    <div className="col-lg-4">
                                        <h1 className="ui-title reveal"> UI/UX DESIGN</h1>
                                    </div>
                                </div>
                                <div className="row premier">
                                    <div className="col-lg-7">
                                        <h1 className="web"> WEB DEVELOPMENT</h1>
                                    </div>
                                    <div className="col-lg-4 design">
                                        <FontAwesomeIcon className="react" icon={faReact} />
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-lg-7">
                                        <h1 className="web"> WEB MAINTENANCE </h1>

                                    </div>
                                    <div className="col-lg-4 design ">
                                        <FontAwesomeIcon className="react" icon={faScrewdriverWrench} />

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 consulting">
                                {/* <span className="circle text-center">
                                    <FontAwesomeIcon className="dot circle-left" icon={faCircle} />
                                    <FontAwesomeIcon className="dot circle-center" icon={faCircle} />
                                    <FontAwesomeIcon className="dot circle-right" icon={faCircle} />
                                </span>*/}
                                <h1> BRAND IDENTITY </h1>

                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="creative">
                        <span>
                            <h1 id="creative-text"> We understand that each business is distinct, with its own goals, <FontAwesomeIcon id="creative-icon" icon={faArrowUpRightDots} />  target audience, and branding requirements.
                            </h1>
                        </span>
                    </motion.div>
                </div>
            </div>
            {/*Work*/}
            <div className="container-fluid work">
                <div className="row" >
                    <div className="col-lg-7">
                        <h1>PROJECT.</h1>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
                <Container>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        data-aos="zoom-in"
                    >
                        <SwiperSlide><img className="img-fluid" src={uiux} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Five} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Three} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Eight} /></SwiperSlide>
                    </Swiper>
                </Container>
            </div>
            {/* New Contact */}
            <ContactForm />
        </div >
    </>;
}
export default Home;