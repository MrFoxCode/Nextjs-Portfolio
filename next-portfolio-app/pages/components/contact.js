import React from "react";
import config from "../config.json";


function Contact(){

//
// FORM SCRIPT
//

//---------------------------
    return(
        <div className="contact-container">

            <div className="contact-all">

              

                <div className="contact-left-container">

                <div className="contact-tittle-ontop">
                    <h3>Get in touch</h3>
                </div>
                    
                    <div className="contact-form">

                        <div className="full-name">
                            <h4>Name</h4>
                        <input  type={"text"} placeholder="Full Name"></input>
                        </div>

                        <div className="company">
                         <h4>Company</h4>   
                        <input  type={"text"} placeholder="Company Name"></input>
                        </div>

                        <div className="email">
                        <h4>Email</h4>
                        <input  type={"email"} placeholder="Your Email"></input>
                        </div>

                        <div className="subject">
                        <h4>Subject</h4>
                        <input  type={"text"} placeholder="Subject"></input>
                        </div>


                        <div className="submit-button">
                          <button type="submit">Send</button>  
                        </div>
                        
                    </div>

                </div>


                <div className="contact-right-container">

                    <div className="contact-socials-container">
                        
                        <h3>Or reach me out on my LinkedIn:</h3>
                        
                        <div className="contact-socials-button">
                        <a href={config.linkedinLink} target={"_blank"}><img src={config.linkedinLogo}></img>LinkedIn</a>
                        </div>
                    </div>   


                </div>
                




               
            </div>












        </div>
    );
}

export default Contact;