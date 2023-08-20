import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Contact.css';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay, faMailBulk, faPhone, faMapLocation, faClock } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
const Contact = () => {
    const line1 = "LET'S"
    const line2 = "TALK"
    const line3 = "FOLLOW US"

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

    // Email
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ni8hifm', 'template_gkzkq4u', form.current, 'xBUmFOBzOS0lwWZLY')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                alert("Your message has been sent!")

            }, (error) => {
                console.log(error.text);
            });
    };


    return <>


        <Helmet>
            <title> Contact Kreative Enterprises: Reach Out for Professional Web Design Solutions </title>
            <meta name="description" content="Get in touch with Kreative Enterprises to discuss your web design needs.
             Our expert team is ready to provide professional solutions tailored to your business.
              Contact us today to start a conversation and take the first step towards an exceptional online presence.
             We look forward to hearing from you!" />
            <link rel="canonical" href="/contact" />
        </Helmet>

        <div className="contact-page">
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

                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
                            className="col-lg-4">
                            <div className="video" id="video-contact">
                                <FontAwesomeIcon className="icon" icon={faCirclePlay}></FontAwesomeIcon>
                            </div>


                            <p>
                                We would love to hear from you! Feel free to reach out
                                to us with any questions, inquiries, or project ideas.
                            </p>

                        </motion.div>
                    </div>

                </div>



            </section>

            {/** Form Section */}
            <div className="contact-formulaire">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>
                            CONTACT US
                        </h1>

                        <form ref={form} onSubmit={sendEmail}>
                            <input data-aos="fade-left" type="text" name="user_name" placeholder='Name' />
                            <input data-aos="fade-left" type='email' name="user_email" placeholder='Email' />
                            <textarea data-aos="fade-left" name="message" placeholder='Message'></textarea>
                            <input data-aos="fade-left" type='submit' value="Send" className='button' />
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="info-contact">
                            <h2>Info</h2>

                            <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faPhone} /> 0027 590 5100</p>
                            <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faMailBulk} /> linokhan@kreative-enterprises.com</p>
                            <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faMapLocation} /> Cape Town, South Africa 8001</p>
                            <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faClock} />Mon - Fri 8 AM - 5 PM</p>

                        </div>
                    </div>


                </div>
            </div>
            <div className="new-contact">
                <div className="contact-intro">
                    <motion.h1
                        variants={sentence}
                        initial="hidden"
                        whileInView="visible"
                        className="text-center">
                        {line3.split("").map((char, index) => {
                            return (
                                <motion.span key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.h1>
                    <div className="text-center" data-aos="fade-in">

                        <span >
                            <a href="https://www.facebook.com/profile.php?id=100092579767183"> <FontAwesomeIcon className="contact-icon" icon={faFacebookSquare} /></a>
                            <a href="https://www.instagram.com/kreative__co/">   <FontAwesomeIcon className="contact-icon" icon={faInstagramSquare} /></a>
                            <a href="https://www.linkedin.com/company/kreative-co-1"><FontAwesomeIcon className="contact-icon" icon={faLinkedinIn}> </FontAwesomeIcon></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>;
}


export default Contact;