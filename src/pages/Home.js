import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone, faLocation, faScrewdriverWrench, faCode} from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-bootstrap/Carousel';
import One from "../images/coffee-new.JPG";
import Three from "../images/lion-new.JPG";
import Four from "../images/beauty.jpg";
import Eight from "../images/Joker-Work.jpg";
import reactImage from "../images/photo1.avif";
import emailjs from "@emailjs/browser";
import expertImage from "../images/web11.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import "@fontsource/crimson-pro";
import 'swiper/swiper-bundle.css';
import { EffectCards } from 'swiper';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import "react-multi-carousel/lib/styles.css";
import ContactForm from './ContactForm';

const Home = () => {

    // Initializing AOS 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


   

    return <>

        <Helmet>
            <title> Home </title>
            <meta name="description" content="Home page of LK Enterprises & Co" />
            <link rel="canonical" href="/" />
        </Helmet>

        <div className="content">
            {/*Hero Section*/}
            <section className="main">
                <Carousel>
                    <Carousel.Item>
                        <section className="item1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm" data-aos="fade-left">
                                        <div className="info">
                                            <h1 className="display-1 text-light">
                                                Kreative & Co
                                            </h1>
                                            <h1 className="display-1 text-light">
                                                Web Agency
                                            </h1>
                                            <Link to="/work" className="btn ">Our Work</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel.Item>
                    <Carousel.Item>
                        <section className="item2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="info">
                                            <h1 className="display-1 text-light">
                                                Innovation
                                            </h1>
                                            <h1 className="display-1 text-light">
                                                Is Our Name </h1>
                                            <Link to="/work" className="btn">Our Work</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel.Item>
                    <Carousel.Item>
                        <section className="item3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="info">
                                            <h1 className="display-1 text-light">
                                                Creativity
                                            </h1>
                                            <h1 className="display-1 text-light">
                                                At Its Best
                                            </h1>
                                            <Link to="/work" className="btn">Our Work</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel.Item>
                </Carousel>
            </section>
            {/*About*/}
            <div className="about">
                <div className="">
                    <div className="row">
                        <div className="col-lg-6" >
                            <img className="img-fluid" src={reactImage} alt="" data-aos="fade-right" />
                        </div>
                        <div className="col-lg-5">
                            <h1 className="display-4" data-aos="fade-left" >
                                We Are A Web Development Agency
                            </h1>
                            <p className="dispaly-7" data-aos="fade-left">
                                Trust and Customer Satisfaction above all things:
                                Quality work, delivery on time, all the time.
                                Our mission is to help businesses improve with an online
                                presence and build long-term relationships with clients.
                            </p>
                            <Link className="button text-light" to="/about" data-aos="fade-left" >Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*Work*/}
            <div className="container-fluid work">
                <div className="title">
                    <h1 className="display-1 text-center" data-aos="fade-up">
                        Our Work Speaks for Itself
                    </h1>
                </div>

                <Container data-aos="fade-in">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="img-fluid" src={One} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Four} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Three} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Eight} /></SwiperSlide>
                    </Swiper>
                </Container>

                <div className="container">
                    <Link to="/work" className="btn">See All</Link>
                </div>
            </div>


            {/** Services New */}
            <div className="expertise">

                <div className="intro">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="offer">
                                <h2 className="dispaly-5" data-aos="fade-up"   >What We Offer</h2>
                                <h1 className="display-1" data-aos="fade-up">Our Expertise</h1>
                                <p data-aos="fade-up"  >
                                    The company specializes in the development and maintenance of websites,
                                    web applications, and user-interface designs.
                                    The company also provides hosting and domain
                                    alongside consulting services.
                                </p>
                                <Link className="button text-light" to="/services" data-aos="fade-up">See All</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 sec-right">

                            <img className="img-fluid" src={expertImage} alt="image-expertise" />

                        </div>
                    </div>
                </div>


                <div className="item">
                    <div className="container">
                        <div className="row first">
                            <div className="col-sm" data-aos="fade-up">
                                <FontAwesomeIcon icon={faFigma} className="icon" />
                                <h1>UX & UI Design</h1>
                                <p>
                                    User interfaces for machines and software, such as computers,
                                    home applications, mobile devices, and electronic devices,
                                    with a focus on maximizing usability and user experience.
                                </p>
                            </div>
                            <div className="col-sm" data-aos="fade-up">
                                <FontAwesomeIcon icon={faCode} className="icon" />
                                <h1>Websites & Web Applications</h1>
                                <p>
                                    Websties solutions from corporate business websites
                                    to e-commerce solutions for your business.
                                </p>
                            </div>
                            <div className="col-sm" data-aos="fade-up">
                                <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                                <h1>Maintenance Services</h1>
                                <p>
                                    Maintenance packages for websites and web applications, consisting of
                                    ensuring the solutions provided perform at peak performance and remain error-free.
                                </p>
                            </div>
                        </div>

                    </div>



                </div>


            </div>


            {/*Testimonials*/}

            <div className="title-testimonial">



                <h1 className="display-1 text-center" data-aos="fade-up">
                    What our clients think of us !
                </h1>

            </div>
            <div className="testim">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4"></div>
                        <div className="col-6 col-md-4"></div>

                        <div className="col-6 col-md-4 text" data-aos="fade-in">

                            <Carousel className="carousel">
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h2>Peter Jones</h2>
                                        <h4>Founder, Property & Co</h4>
                                        <p>
                                            LK Enterprises exceeded my expectations in every way. From the initial consultation
                                            to the final product, the team's expertise and attention to detail were
                                            evident throughout the entire process. They listened carefully to my
                                            vision for the website and executed it perfectly, creating a professional
                                            and user-friendly website.
                                        </p>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h2>Ventina Chiara</h2>
                                        <h4>Founder, La Dolce Vita </h4>
                                        <p>
                                            The team was professional, knowledgeable, and attentive to my needs throughout
                                            the entire process. They took the time to listen to my ideas and vision
                                            for the website and then brought it to life in a way that exceeded my
                                            expectations. Since the launch of the website, my
                                            restaurant has seen a significant increase in online traffic and
                                            reservations.
                                        </p>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h2>Jonas Franklin</h2>
                                        <h4>Founder, Fresh Feet</h4>
                                        <p>
                                            They took the time to understand my business needs and goals, and developed
                                            a website that perfectly captured my brand's aesthetic and values.
                                            Throughout the process, they communicated with me every step of the
                                            way and were always responsive to my questions and concerns. The end
                                            result is a beautifully designed and user-friendly website that has
                                            significantly increased traffic and sales to my online store.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm/>
           
        </div >

    </>;
}

export default Home;