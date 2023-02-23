import React from "react";

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
        
            {/*             
            <div className="navbutton-container">
                <button> Contact Me</button>
            </div> */}







        </div>
    );

}

export default Navbar;