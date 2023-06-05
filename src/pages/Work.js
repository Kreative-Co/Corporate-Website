import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import One from "../images/Brixon-Work.JPG";
import Five from "../images/Design-Work.JPG";
import Two from "../images/Lion-new-version.JPG";
import Three from "../images/Joker-new-version.JPG";
import Four from "../images/Banking-new-version.JPG";
import Six from "../images/Coffee-Work.JPG";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';



const Work = () => {

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
                            <h1>
                                OUR WORK
                            </h1>
                            <Link className="button" to="/work">View Work</Link>
                            <Link className="button disappear" to="/services">Services</Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="video">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}></FontAwesomeIcon>
                            </div>
                            <p>
                            We take digital experiences to the next level.
                            </p>
                        </div>
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
                        <h2>
                            [DESIGN] [WEB] 2023
                        </h2>
                        <h1>
                            BRIXON PHOTOGRAPY
                        </h1>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={One} alt="Brixon Design" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 align-middle">
                        <h2>
                            [DESIGN] [WEB] 2023
                        </h2>
                        <h1>
                            BALTE COFFEE
                        </h1>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={Six} alt="Coffee Shop" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 align-middle">
                        <h2>
                            [DESIGN] [WEB] 2023
                        </h2>
                        <h1>
                            ART GALLERY
                        </h1>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={Five} alt="Art Gallery" />
                    </div>
                </div>
              
                <div className="row">
                    <div className="col-lg-5">
                        <h2>
                            [DESIGN] [WEB] 2023

                        </h2>
                        <h1>
                            NATIONAL GEOGRAPHY
                        </h1>
                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={Two} alt="National Geography Design" />

                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <h2>
                            [DESIGN] [WEB] 2023

                        </h2>

                        <h1>
                            THE JOKER
                        </h1>


                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={Three} alt="The Joker Design" />

                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-5">
                        <h2>
                            [DESIGN] [WEB] 2023

                        </h2>

                        <h1 className>
                            BANKING
                        </h1>


                    </div>
                    <div className="col-lg-7">
                        <img className="img-fluid" src={Four} alt="Banking Design" />

                    </div>

                </div>

            </div>

            <ContactForm />

        </div>
    </>
}
export default Work;