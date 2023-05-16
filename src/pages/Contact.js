import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Contact.css';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';



const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

   
    return <>


        <Helmet>
            <title> Contact </title>
            <meta name="description" content="Contact page of LK Enterprise & Co" />
            <link rel="canonical" href="/contact" />
        </Helmet>

        <div className="contact-page">
            <div className="main">
                <div className="container">
                    <div className="row title" data-aos="fade-left">
                        <div className="col-sm">
                            <div className="info">
                                <h1 className="display-1 text-light">
                                    Contact Us

                                </h1>
                                <h1 className="display-1 text-light">
                                    Today
                                </h1>
                            </div>


                        </div>



                    </div>
                </div>
            </div>


            {/** Form Section */}
            <ContactForm/>

            {/** Section */}

            <div id="container-fluid" className="container-fluid become-client">
                <div className="row ">
                    <div className="col-sm left">

                    </div>
                    <div className="col-sm ">
                        <div className="right">
                            <h1 className="display-2" data-aos="fade-left">
                                Become A Client
                            </h1>
                            <p className="" data-aos="fade-left">
                                Our clients get the best results when they have our team
                                dedicated to their business for extended periods of time.
                                This is why we are looking for ongoing collaboration where
                                our professionals are like your team members who just happen
                                to be remote. Ready to move forward?
                            </p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </>;
}


export default Contact;