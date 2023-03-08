import React from "react";
import config from "../config.json";


function Contact(){

//
// FORM SCRIPT
//



function sendEmail (){
    
let getName = document.getElementById("inputname");
let getCompany = document.getElementById("inputcompany");
let getEmail = document.getElementById("inputemail");
let getSubject = document.getElementById("inputsubject");


if(!getName.value || !getCompany.value || !getEmail.value || !getSubject.value){
console.log("there's nothing here");

 


}else{
    
    
    
    
    
    
    //Clean Inputs
    getName.value ="";
    getCompany.value ="";
    getEmail.value ="";
    getSubject.value ="";
    console.log("email sent!");
}


}

//---------------------------
    return(
        <div className="contact-container" id="contactS">

            <div className="contact-all">

              

                <div className="contact-left-container">

                <div className="contact-tittle-ontop">
                    <h3>Get in touch</h3>
                </div>
                    
                    <div className="contact-form">

                        <div className="full-name">
                            <h4>Name</h4>
                        <input id = "inputname" type={"text"} placeholder="Full Name"></input>
                        </div>

                        <div className="company">
                         <h4>Company</h4>   
                        <input  id = "inputcompany" type={"text"} placeholder="Company Name"></input>
                        </div>

                        {/* <div className="Phone">
                        <h4>Phone Number</h4>
                        <input  type={"tel"} placeholder="Your Phone Number"></input>
                        </div>  */}

                        <div className="email">
                        <h4>Email</h4>
                        <input id = "inputemail" type={"email"} placeholder="Your Email"></input>
                        </div>

                        <div className="subject">
                        <h4>Message</h4>
                        <textarea  id = "inputsubject" type={"text"} placeholder="Message"></textarea>
                        </div>


                        <div className="submit-button">
                          <button onClick={sendEmail} type="submit">Send</button>  
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