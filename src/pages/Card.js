import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Services.css';
import { Container } from "react-bootstrap";

const Card = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="cards">

                <div className="row">
                    <motion.div
                        transition={{
                            layout: {
                                duration: 1,
                                type: 'spring',
                            }
                        }}
                        layout onClick={() => setIsOpen(!isOpen)} className="col-lg-7">
                        <motion.h2 layout="position">
                            UI UX DESIGN
                        </motion.h2>
                        {isOpen &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}>

                                <p>
                                    lorem ipsum dolor sit
                                </p>
                            </motion.div>
                        }

                    </motion.div>
                    <motion.div
                        transition={{
                            layout: {
                                duration: 1,
                                type: 'spring',
                            }
                        }}
                        layout onClick={() => setIsOpen(!isOpen)} className="col-lg-5">
                        <motion.h2 layout="position">
                            UI UX DESIGN
                        </motion.h2>
                        {isOpen &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}>

                                <p>
                                    lorem ipsum dolor sit
                                </p>
                            </motion.div>
                        }

                    </motion.div>

                </div>

                <div className="row">

                    <motion.div
                        transition={{
                            layout: {
                                duration: 1,
                                type: 'spring',
                            }
                        }}
                        layout onClick={() => setIsOpen(!isOpen)} className="col-lg-5">
                        <motion.h2 layout="position">
                            UI UX DESIGN
                        </motion.h2>
                        {isOpen &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}>

                                <p>
                                    lorem ipsum dolor sit
                                </p>
                            </motion.div>
                        }

                    </motion.div>
                    <motion.div
                        transition={{
                            layout: {
                                duration: 1,
                                type: 'spring',
                            }
                        }}
                        layout onClick={() => setIsOpen(!isOpen)} className="col-lg-7">
                        <motion.h2 layout="position">
                            UI UX DESIGN
                        </motion.h2>
                        {isOpen &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}>

                                <p>
                                    lorem ipsum dolor sit
                                </p>
                            </motion.div>
                        }

                    </motion.div>

                </div>



            </div>

        </>


    )


}

export default Card;