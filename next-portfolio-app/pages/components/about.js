import React from "react";
import config from "../config.json";

function About(){
    return(
        <div className="about-container">

        <div className="about-content">
            <div className="aboutleft-container">
                <div className="profilePic-container">
                <img src={config.profilePic}></img>
                </div>
                <div className="aboutTittle-container">
                <h3>Rondnelle Leandro dos Santos</h3>
                <h4>Front-End Developer</h4>
                </div>

                <div className="socials-container">
                    <a href={config.linkedinLink}><img src={config.linkedinLogo}></img></a>
                    <a href=""><img src={config.emailLogo}></img></a>
                    <a href={config.githubLink}><img src={config.githubLogo}></img></a>
                </div>

                <div className="summary-container">
                    <h4>Summary</h4>
                    <p>
                    "I love to learn new skills everyday, especially when these new skills can teach me something new that allows me to
                    evolve, not only professionally but also as person".
                    </p>
                </div>
                
                

            </div>
            <div className="aboutright-container">
            <h2>My Skills</h2>

            <div className="about-stacks-container">
                <div>
                    <img src={config.javaScriptLogo}></img>
                    <h4>JavaScript</h4>
                    <p>+2 years</p>
                </div>

                <div>
                    <img src={config.htmlLogo}></img>
                    <h4>HTML</h4>
                    <p>+1 Year</p>
                </div>

                <div>
                    <img src={config.cssLogo}></img>
                    <h4>CSS</h4>
                    <p>+1 Year</p>
                </div>
            </div>

            <div className="about-stacks-container2">
                <div>
                    <img src={config.reactLogo}></img>
                    <h4>ReactJS</h4>
                    <p>+6 Months</p>
                </div>

                <div>
                    <img src={config.nextLogo}></img>
                    <h4>NextJS</h4>
                    <p>+6 Months</p>
                </div>

                <div>
                    <img src={config.nodeLogo}></img>
                    <h4>NodeJS</h4>
                    <p>+6 Months</p>
                </div>
                <div>
                    <img src={config.sassLogo}></img>
                    <h4>SASS</h4>
                    <p>+1 Year</p>
                </div>
            </div>

            <div className="about-stacks-container3">
                <div>
                    <img src={config.gitLogo}></img>
                    <h4>Git</h4>
                    <p>+7 Months</p>
                </div>

                <div>
                    <img src={config.figmaLogo}></img>
                    <h4>Figma</h4>
                    <p>+8 Months</p>
                </div>

                <div>
                    <img src={config.githubLogo}></img>
                    <h4>GitHub</h4>
                    <p>+2 Years</p>
                </div>
            </div>


                
            </div>

        </div>   

        </div>
    );

}

export default About;