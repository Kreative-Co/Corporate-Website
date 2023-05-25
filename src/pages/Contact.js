import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Contact.css';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faSquareGithub, faFacebookSquare, faSquareTwitter, faBehanceSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay,  faMailBulk, faPhone, faLocation, faMapLocation, faClock } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet-async';
import emailjs from "@emailjs/browser";
const Contact = () => {
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
            <title> Contact </title>
            <meta name="description" content="Contact page of LK Enterprise & Co" />
            <link rel="canonical" href="/contact" />
        </Helmet>

        <div className="contact-page">
        <section className="main">
                <div className="intro">
                    <div className="row">
                        <div className="col-lg-7">

                            <h1>
                                LET'S TALK
                            </h1>
                           
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
                  
                </div>



            </section>
          
            {/** Form Section */}
            <div className="contact-formulaire">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>
                            CONTACT US
                        </h1>
                        <p>
                            Feel free to contact us any time. We will get back to you 
                            as soon as we can!
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                        <input data-aos="fade-left" type="text" name="user_name" placeholder='Name' />
                        <input data-aos="fade-left" type='email' name="user_email" placeholder='Email' />
                        <textarea data-aos="fade-left" name="message" placeholder='Message'></textarea>
                        <input data-aos="fade-left" type='submit' value="Send" className='btn' />
                    </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="info-contact">
                        <h2>Info</h2>
                        
                        <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faPhone} /> 0027 590 5100</p>
                        <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faMailBulk} /> linokhan1@gmail.com</p>
                        <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faMapLocation} /> Cape Town, South Africa 8001</p>
                        <p data-aos="fade-up"><FontAwesomeIcon className="form-icon" icon={faClock} />Mon - Fri 8 AM - 5 PM</p>

                        </div>
                        </div>
                      

                </div>
            </div>
            <div className="new-contact">
                <div className="contact-intro">
                    <h1 className="text-center">
                        FOLLOW US
                    </h1>

                    <div className="text-center">
                    <span>
                            <FontAwesomeIcon className="contact-icon" icon={faFacebookSquare}/>
                            <FontAwesomeIcon className="contact-icon" icon={faInstagramSquare}/>
                            <FontAwesomeIcon className="contact-icon" icon={faBehanceSquare}/>
                            <FontAwesomeIcon className="contact-icon" icon={faTwitterSquare}/>
                            <FontAwesomeIcon className="contact-icon" icon={faPinterestSquare}/>
                            <FontAwesomeIcon className="contact-icon" icon={faSquareGithub}/>

                        </span>
                    
                    </div>
                    
                       
                    
                  


                </div>
               
            </div>

            {/** Section */}



            {/*<div id="container-fluid" className="container-fluid become-client">
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
            </div>*/}
        </div>
    </>;
}


export default Contact;