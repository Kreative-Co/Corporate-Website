import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Work.css';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link } from "react-router-dom";
import One from "../images/Coffee-Work.jpg";
import Two from "../images/adidas.jpg";
import Three from "../images/Lion-Work.jpg";
import Four from "../images/beauty.jpg";
import Five from "../images/aloe-green.JPG";
import Six from "../images/mercedes.jpg";
import Seven from "../images/banking.JPG";
import Eight from "../images/Joker-Work.jpg";
import { Helmet } from 'react-helmet-async';



const Work = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <>


        <Helmet>
            <title> Work </title>
            <meta name="description" content="Portfolio page of LK Enterprise & Co" />
            <link rel="canonical" href="/work" />
        </Helmet>
        <div className="">
            <div className="main" style={{}}>
                <div className="main-work">

                    <div className=" container">
                        <div className="row">
                            <div className="col-sm" data-aos="fade-left">
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

                </div>

            </div>
            <div className="portfolio container-fluid">
                <div className="title">

                    <h1 className="display-1 text-center">Our Portfolio</h1>

                </div>
                <div className="row">
                    <div className="col-sm" data-aos="fade-up">
                        <div >
                            <img className="img-fluid" src={One} alt="Balte Coffee" />

                        </div>
                        <h2>Balte Coffee</h2>
                    </div>
                    <div className="col-sm" data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Two} alt="Adidas" />

                        </div>
                        <h2>Adidas</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm" data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Three} alt="Lion" />

                        </div>
                        <h2>National Geography</h2>
                    </div>
                    <div className="col-sm" data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Four} alt="Vogue Magazine" />

                        </div>
                        <h2>Beauty</h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm" data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Five} alt="The Joker" />

                        </div>
                        <h2>Aloe Vera</h2>

                    </div>
                    <div className="col-sm" data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Six} alt="Boy Toys" />

                        </div>
                        <h2>Boy Toys</h2>
                    </div>

                </div>
                <div className="row ">
                    <div className="col-sm " data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Seven} alt="Banking" />

                        </div>
                        <h2>Banking</h2>
                    </div>
                    <div className="col-sm" data-aos="fade-up">
                        <div>
                            <img className="img-fluid" src={Eight} alt="The Joker" />

                        </div>
                        <h2>The Joker</h2>
                    </div>

                </div>
              
            </div>
        </div>
    </>
}
export default Work;