import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

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
        <div className="new-contact">
        <div className="contact-intro">
            <h1 className="text-center">
                LET'S DISCUSS YOUR IDEAS
            </h1>
            <div className="contact-btn text-center">
                <Link to="/contact" className="button">  START NOW  </Link> 
                <Link to="/contact" className="button disappear"> FOLLOW US  </Link>
            </div>



        </div>

    </div>

    );
}


export default ContactForm;