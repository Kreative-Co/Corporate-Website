import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {  Link } from "react-router-dom";
import '../Footer.css';


const FooterSec = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
               
                <div className="row">
                   <div className="col-lg-6">
                    
                    <p>
                       &copy; 2023 Kreative & Co, All Rights Reserved.
                        
                    </p>
                    
                </div>
                <div className="col-lg-6">
                    <div className="text-end">
                        <ul>
                            <li><Link className="nav-link" to="/">Home</Link>   </li>
                            <li><Link className="nav-link" to="/services">Services</Link>   </li>
                            <li><Link className="nav-link" to="/work">Work</Link>   </li>
                            <li><Link className="nav-link" to="/about">About</Link>   </li>
                            <li><Link className="nav-link" to="/contact">Contact</Link>   </li>

                        </ul>
                   

                    </div>
               
                </div>
                   
                </div>
            </div>

        </div>

    );
}

export default FooterSec;