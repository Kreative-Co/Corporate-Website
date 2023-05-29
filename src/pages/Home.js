import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import One from "../images/Coffee-Work-min.jpg";
import Two from "../images/aloe-green-min.JPG"
import Three from "../images/lion-new-min.JPG";
import Four from "../images/beauty-min.jpg";
import Five from "../images/mercedes-min.jpg";
import Eight from "../images/Joker-Work-min.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCards } from 'swiper';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import "react-multi-carousel/lib/styles.css";
import ContactForm from './ContactForm';
import "@fontsource/montserrat"; // Defaults to weight 400


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
                                <Link className="button disappear" to="/contact">Contact Us</Link>
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
                                        <Link className="icon-link" to="/services"><FontAwesomeIcon icon={faArrowUpRightDots} /></Link>
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
                                            <Link className="icon-link" to="/services">
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

            
        </div >

    </>;
}

export default Home;