import React from "react";
import config from "../config.json";


function Projects(){
    return(
        <div className="projects-container">
            
            <div className="projects-content">

            <div className="project-tittle-container">
                <h2>My Projects</h2>
            </div>

                <div className="projects-all-container">

                <div className="project1">
                        <img src={config.img_project2}></img>
                        <div className="tittle-and-data">
                        <h4>Oakleaf Bearers</h4>
                        <p className="data-container"> Made in 2022</p>
                        </div>
                        <p>
                         A website for a Online Gaming Community, to showcase everything they do
                         in their online adventures.   
                        </p>
                        <div className="project-buttons">
                        <a href="https://oakleaf.vercel.app/" target={"_blank"}><button> See project</button></a>
                        <a href="https://github.com/MrFoxCode/guild-next-app" target={"_blank"}><button>Github</button></a>
                        </div>
                    </div>
                    
                    <div className="project1">
                        <img src={config.img_project1}></img>
                        <div className="tittle-and-data">
                        <h4>CIDA BOT</h4>
                        <p className="data-container"> Made in 2021</p>
                        </div>
                        <p>A Moderation Bot based on a module of Node.JS for an online Community.
                        With custom commands that allows you to control things more easily.
                        </p>
                        <div className="project-buttons">
                        <a href="https://mrfoxcode.github.io/cida/" target={"_blank"}><button> See project</button></a>
                        <a href="https://github.com/MrFoxCode/CIDABot" target={"_blank"}><button>Github</button></a>
                        </div>
                    </div>

                    <div className="project1">
                        <img src={config.img_project3}></img>
                        <div className="tittle-and-data">
                        <h4>The Leaderboard</h4>
                        <p className="data-container"> Made in 2021</p>
                        </div>
                        <p>A casual leaderboard totally customizable, which
                        you can use to track points from those friendly matches.
                        </p>
                        <div className="project-buttons">
                        <a href="https://codepen.io/foxvulpes/full/JjJvvoa" target={"_blank"} ><button> See project</button></a>
                        <a href="https://codepen.io/foxvulpes/pen/JjJvvoa" target={"_blank"}><button>CodePen</button></a>
                        </div>
                    </div>

                    <div className="project1">
                        <img src={config.img_project4}></img>
                        <div className="tittle-and-data">
                        <h4>The Conversenator</h4>
                        <p className="data-container"> Made in 2021</p>
                        </div>
                        <p>A simple tool to convert values among three
                         kind of currency. One of my first projects.
                        </p>
                        <div className="project-buttons">
                        <a href="https://codepen.io/foxvulpes/full/NWgaGMB" target={"_blank"}><button>See project</button></a>
                        <a href="https://codepen.io/foxvulpes/pen/NWgaGMB" target={"_blank"} ><button>CodePen</button></a>
                        </div>
                    </div>

                    

                </div>
               <div className="more-projects">
               <a href="">More Projects</a>              
               </div>
                

            </div>

        </div>
    );

}

export default Projects;