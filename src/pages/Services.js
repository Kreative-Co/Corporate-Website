import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faHandshakeSimple, faCirclePlay, faScrewdriverWrench, faCode, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from "aos";
import "aos/dist/aos.css";
import sectionImage from "../images/photo-5.avif";
import { Helmet } from 'react-helmet-async';
import ContactForm from './ContactForm';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';


const Services = () => {

    const [isOpen, setIsOpen] = useState(false);

    const line1 = "WHAT"
    const line2 = "WE DO"

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
    const now = 60;

    return <>

        <Helmet>
            <title>Services: Website Development, Maintenance, and UX/UI Design by Kreative Enterprises </title>
            <meta name="description" content="Discover the comprehensive services offered by Kreative Enterprises,
             including expert website development, meticulous maintenance, and cutting-edge UX/UI design.
              Our team of skilled professionals is dedicated to delivering tailored solutions
               that elevate your online presence, enhance user experience, and ensure seamless
                functionality. Partner with us to transform your digital landscape and unlock 
                the full potential of your business." />
            <link rel="canonical" href="/services" />
        </Helmet>

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
                        <motion.button
                            className="load-screen-message"
                            variants={button}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link className="button" to="/work">
                                VIEW WORK
                            </Link>
                        </motion.button>
                        <motion.button
                            className="load-screen-message"
                            variants={button}
                            initial="hidden"
                            animate="visible">
                            <Link className="button disappear" to="/contact">Contact Us</Link>
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}

                        className="col-lg-4">
                        <div className="video" id="video-service">
                            <FontAwesomeIcon className="icon" icon={faCirclePlay}></FontAwesomeIcon>
                        </div>
                        <p>
                            Professional Web Design Agency Transforming Online Presence.
                        </p>
                    </motion.div>
                </div>

            </div>



        </section>
        <div className="service">

            <div className="service-intro">
                <div className="marquee-w">
                    <div className="marquee">
                        <span>CUSTOM DESIGN</span>

                    </div>

                </div>
            </div>


            <div className="section">


                <div className="row" data-aos="fade-up">
                    <div className="col-lg-6">
                        <p>
                            By investing in our design solutions, you position your business for long-term success,
                            a loyal customer base, and driving growth in your industry.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-1 text-end">
                            SERVICES
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="data">

                            <div className="progress-sec">
                                <h2>UX & UI</h2>
                                <ProgressBar className='progress' variant="warning" now={100} />
                            </div>
                            <div className="progress-sec">
                                <h2>Marketing Website</h2>
                                <ProgressBar className='progress' variant="warning" now={100} />
                            </div>
                            <div className="progress-sec">
                                <h2>Branding</h2>
                                <ProgressBar className='progress' variant="warning" now={100} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <motion.img

                            initial={{ opacity: 0, scale: 0.3 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className="img-fluid" src={sectionImage} alt="service image" />
                    </div>
                </div>
            </div>
            {/** Services List */}
            <div class="services-list">



                <MDBAccordion flush initialActive={1} className="bg-dark">
                    <MDBAccordionItem collapseId={1} headerTitle='UI & UX DESIGN' className="accordionItem">
                        User interfaces for web products that increase conversion, reduce cost of maintenance and build consistent user experience.
                        Our UI & UX design experts work closely with clients to understand their target audience,
                        business goals, and brand identity. Through meticulous research and user-centric design principles,
                        we create intuitive interfaces and seamless user experiences that leave a lasting impression on visitors
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle='WEB DESIGN'>
                        Our agency builds corporate business websites and landing pages
                        that help to tell brand stories, increase conversion and build trust.
                        We believe in pushing boundaries and creating websites that are not only
                        visually stunning but also highly functional and scalable.
                        Our team of skilled designers and developers employs the latest technologies
                        and industry best practices to build custom websites tailored to the unique
                        needs of each client. We strive to strike the perfect balance between aesthetics
                        and functionality, delivering websites that are not only visually appealing but
                        also optimized for performance and user engagement.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle='BRANDING'>
                        Our agency helps new businesses to establish a distinctive and compelling
                        brand identity to effectively engage their target audience.
                        Branding is a crucial aspect of any business's identity, and our agency excels
                        at creating cohesive and impactful brand experiences. We collaborate closely
                        with clients to develop brand strategies that reflect their core values and
                        resonate with their target market. Our branding services encompass logo design,
                        color palette selection, typography, and visual guidelines, ensuring consistency
                        across all digital touchpoints.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle='SEO SERVICES'>
                        We specialize in driving targeted organic traffic to your website, helping you climb
                         the search engine rankings and outshine your competitors. Our expert team combines
                          strategic keyword research, on-page optimization, authoritative link building,
                           and technical SEO enhancements to ensure your website not only meets search
                            engine algorithms but also provides a seamless user experience. Whether you're
                             a startup, SMB, or enterprise, we tailor our strategies to your unique goals,
                              enhancing your online visibility, boosting brand credibility, and delivering
                               measurable results. Experience the power of SEO with Kreative Co and 
                               watch your online presence flourish.
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>
            {/** Unique Solution */}
            <div className="container-fluid service-why">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="right">
                            <h1 className="display-2">
                                WHY CHOOSE US
                            </h1>
                            <MDBAccordion flush initialActive={1} className="bg-dark">
                                <MDBAccordionItem collapseId={1} headerTitle='CUSTOMIZATION' className="accordionItem">
                                    We create custom web design solutions tailored to the client's specific needs and goals.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={2} headerTitle='VALUE'>
                                    We provide high-quality web design solutions at a competitive price, offering excellent value for clients ' investment.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={3} headerTitle='COLLABORATION'>
                                    We work closely with clients to ensure that their vision is fully realized and that their website meets their expectations.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={3} headerTitle='lONG-TERM RELATIONSHIP'>
                                    We are committed to building long-term relationships with clients, providing ongoing support and maintenance services to ensure the continued success of their website.
                                </MDBAccordionItem>
                            </MDBAccordion>

                        </div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    </>;
};
export default Services;