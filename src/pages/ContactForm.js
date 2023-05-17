import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone, faLocation} from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";

const ContactForm = () => {

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
        <div className="container">
            <div className="row contact-form">
                <div className="col-lg-5">
                    <h1 className="display-1" data-aos="fade-up">
                        Let's talk
                    </h1>

                    <p data-aos="fade-up"><FontAwesomeIcon icon={faPhone} /> 0027 590 5100</p>
                    <p data-aos="fade-up"><FontAwesomeIcon icon={faMailBulk} /> linokhan1@gmail.com</p>
                    <p data-aos="fade-up"><FontAwesomeIcon icon={faLocation} /> 53 Commercial Street, Cape Town Western Cape, South Africa 8001</p>

                </div>
                <div className="col-lg-7">
                    <form ref={form} onSubmit={sendEmail}>
                        <input data-aos="fade-left" type="text" name="user_name" placeholder='Name' />
                        <input data-aos="fade-left" type='email' name="user_email" placeholder='Email' />
                        <textarea data-aos="fade-left" name="message" placeholder='Message'></textarea>
                        <input data-aos="fade-left" type='submit' value="SEND" className='btn' />
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ContactForm;