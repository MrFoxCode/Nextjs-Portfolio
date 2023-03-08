import React from "react";
import { Link } from "react-scroll";
import config from "../config.json";

function Navbar(){

    return(
        <div className="navbar-container">

            <div className="navtittle-container">
                <img src={config.navLogo}></img>
                <h2>Dev. Rondnelle</h2>                
            </div>


            <div className="navlinks-container">
                <ul className="nav-links">
                    
                <Link to ={"homeS"} duration={300} smooth={true}><li>Home</li></Link>
                <Link to ={"aboutS"} duration={300} smooth={true}><li>About Me</li></Link>
                <Link to ={"projectS"} duration={300} smooth={true}><li>Project</li></Link>
                <Link to ={"contactS"} duration={300} smooth={true}><li>Contact</li></Link>
                                     
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