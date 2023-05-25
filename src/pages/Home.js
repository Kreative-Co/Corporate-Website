import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faArrowUpRightDots, faCode, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import Table from 'react-bootstrap/Table';
import { faMailBulk, faPhone, faLocation, faPlus, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-bootstrap/Carousel';
import One from "../images/Coffee-Work-min.jpg";
import Two from "../images/aloe-green-min.JPG"
import Three from "../images/lion-new-min.JPG";
import Four from "../images/beauty-min.jpg";
import Five from "../images/mercedes-min.jpg";
import Eight from "../images/Joker-Work-min.jpg";
import reactImage from "../images/photo1.avif";
import expertImage from "../images/web11.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCards } from 'swiper';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import "react-multi-carousel/lib/styles.css";
import ContactForm from './ContactForm';
import "@fontsource/marcellus";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/merriweather-sans"; // Defaults to weight 400
import "@fontsource/merriweather-sans/400.css"; // Specify weight
import "@fontsource/merriweather-sans/400-italic.css"; // Specify weight and style
import "@fontsource/mukta"; // Defaults to weight 400
import "@fontsource/mukta/400.css"; // Specify weight



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
                <div className="intro" >
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-7">

                            <h1>
                                DIGITIZE IDEAS.
                            </h1>
                            <div className="intro-button">
                                <Link className="button" to="/work">View Work</Link>
                                <Link className="button disappear" to="/work">Contact Us</Link>

                            </div>

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
                    <div className="intro-image" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-8">

                            </div>
                            <div className="col-lg-3">
                                <div className="span">

                                </div>


                            </div>
                        </div>

                    </div>
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
                <div className="our-services">
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-up">
                            <span>
                                <h1 className="display-1 ">
                                    OUR SERVICES.

                                </h1>
                            </span>

                            <p>
                                Every one of us love something different. So explore the world through
                                the lens of visual capabilities, and find what you love.
                            </p>

                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                    <div className="new-item">
                        <Table responsive data-aos="fade-in" >
                            <tbody>
                                <tr>

                                    <td>UI/UX Design</td>
                                    <td>
                                        <Link className="icon-link" to="/servives">  <FontAwesomeIcon icon={faArrowUpRightDots} /></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Web Development</td>

                                    <td>
                                        <Link className="icon-link" to="/services">
                                            <FontAwesomeIcon icon={faArrowUpRightDots} />

                                        </Link>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    
                                        <td>
                                            <Link className="icon-link" to="services">
                                                <FontAwesomeIcon icon={faArrowUpRightDots} />
                                            </Link>
                                        </td>
                                    
                                </tr>
                                <tr>
                                    <td>Consulting</td>
                                    <td>
                                        <Link className="icon-link"  to="/services">
                                            <FontAwesomeIcon icon={faArrowUpRightDots} />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="creative" data-aos="zoom-in">
                        <span>
                            <h1> A creative
                                mind knows how to do the right thing
                                at the <FontAwesomeIcon icon={faArrowUpRightDots} /> right place and at the  right time
                            </h1>
                        </span>
                    </div>



                </div>

            </div>

          

            {/*Work*/}
            <div className="container-fluid work">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-7">
                        <h1>BEST PROJECT.</h1>


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
                        <SwiperSlide><img className="img-fluid" src={One} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Two} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Four} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Five} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Three} /></SwiperSlide>
                        <SwiperSlide><img className="img-fluid" src={Eight} /></SwiperSlide>
                    </Swiper>
                </Container>

            </div>





            {/* New Contact */}

      <ContactForm/>

            {/*Testimonials

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

            <ContactForm />
*/}
        </div >

    </>;
}

export default Home;