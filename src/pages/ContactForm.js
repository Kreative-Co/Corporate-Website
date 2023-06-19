import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../App.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

const ContactForm = () => {


    const line1 = "LET'S DISCUSS YOUR IDEAS"

    const sentence = {
        hidden: { opacity: 1 },
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



    // AOS init
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

    return (
        <div className="new-contact">
            <div className="contact-intro">
                <motion.h1
                    className="text-center"
                    variants={sentence}
                    initial="hidden"
                    whileInView="visible"
                >
                    {line1.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                    <br />
                </motion.h1>
                <div className="contact-btn text-center" data-aos="fade-in">

                    <Link to="/contact" className="button">  START NOW  </Link>

                    <Link to="/contact" className="button disappear"> FOLLOW US  </Link>
                </div>
            </div>
        </div>
    );
}


export default ContactForm;