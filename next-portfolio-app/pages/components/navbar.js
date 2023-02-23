import React from "react";
import config from "../config.json";

function Navbar(){

    return(
        <div className="navbar-container">

            <div className="navtittle-container">
                <img></img>
                <h2> Tittle Tittle</h2>                
            </div>


            <div className="navlinks-container">
                <ul className="nav-links">
                    <a><li>Home</li></a>
                    <a><li>About</li></a>                    
                    <a><li>Projects</li></a>                    
                    <a><li>Contact</li></a>                    
                    </ul>
            </div>
        
                         
            <div className="lang-container">                
                <img src={config.globeLogo}></img>
                <ul>
                    <li>EN</li>
                </ul>
            </div> 







        </div>
    );

}

export default Navbar;