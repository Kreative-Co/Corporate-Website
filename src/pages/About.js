
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/About.css'
import AOS from "aos";
import "aos/dist/aos.css";
import reactImage from "../images/web11.jpg";
import "@fontsource/marcellus"; // Defaults to weight 400.
import { Helmet } from 'react-helmet-async';





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
            <div className="main">
                <div className="main-about">
                    <div className="container">
                        <div className="row about-company">
                            <div className="col-sm" data-aos="fade-left">
                                <div className="info">
                                    <h1 className="display-1 text-light">
                                        About Us
                                    </h1>
                                    <h2 className="display-7 text-light">
                                        Since 2021
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** About */}
            <div className="about">

                <div className=" row">

                    <div className="col-lg-6">
                        <img className="img-fluid" src={reactImage} alt="about-image" data-aos="fade-right" />

                    </div>
                    <div className="col-lg-5" data-aos="fade-up">

                        <h1 className="display-2">
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
            </div>

            {/* Core Values */}
            <div className="container core-values">

                <div className="title">
                    <h1 className="display-1 text-center" data-aos="fade-up"  > What We Stand For  </h1>
                </div>

                <div className="row">
                    <div className="col-sm" data-aos="fade-up">
                        <h1>Integrity</h1>
                        <p>
                            Integrity is at the core of everything we do at our company. We believe that
                            honesty, transparency, and ethical behavior are essential to building
                            trust and establishing strong relationships with our customers, partners,
                            and employees.
                        </p>
                    </div>
                    <div className="col-sm" data-aos="fade-up">
                        <h1 className="text-dark">Work Ethic</h1>
                        <p className="text-dark">
                            We take pride in our strong work ethic and commitment to excellence.
                            We believe that hard work, dedication, and attention to detail are essential to
                            achieving success and delivering exceptional results for our customers.
                        </p>
                    </div>
                    <div className="col-sm" data-aos="fade-up">
                        <h1>Efficiency</h1>
                        <p>
                            We are committed to delivering efficient solutions that meet our customers'
                            needs quickly and effectively. We understand that time is a valuable commodity,
                            and we strive to provide solutions that help our customers save time and increase productivity.
                        </p>

                    </div>
                </div>
            </div>
            {/* Why choose us */}
            <div className="why">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 gauche" data-aos="fade-right">
                        </div>
                        <div className="col-lg-6 droite">
                            <div className="information">
                                <h1 className="" data-aos="fade-up">Why Choose Us</h1>

                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up">
                                        <h2>Customization</h2>
                                        <p>We create custom web design solutions tailored to
                                            the client's specific needs and goals.</p>

                                    </div>


                                    <div className="col-lg-6" data-aos="fade-up">
                                        <h2>Collaboration</h2>
                                        <p> We work closely with clients to ensure that their vision is fully realized and that their website meets their expectations.</p>

                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-lg-6" data-aos="fade-up">
                                        <h2>Long-term relationships</h2>
                                        <p>We are committed to building long-term relationships with clients,
                                            providing ongoing support and maintenance services to ensure the
                                            continued success of their website.</p>

                                    </div>

                                    <div className="col-lg-6" data-aos="fade-up">
                                        <h2>Value</h2>
                                        <p>We provide high-quality web design solutions at a
                                            competitive price, offering excellent value for clients
                                            ' investment.</p>


                                    </div>


                                </div>



                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>


    </>;
}

export default About;