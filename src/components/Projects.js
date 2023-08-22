import React from "react";
import "../Styles.css/Projects.css"
import github_logo from "../images/github-logo.png"


function Projects () {
    return(
        <div className="Projects" id="Projects" >
            
                
                <div className="project_description" >
                    <h3>
                        Projects 🤖
                    </h3>
                    <p>
                    Welcome to my projects showcase! Here, you'll find a collection of my coding endeavors that reflect my passion and creativity. Each project is a testament to my commitment to crafting innovative solutions. Click on the below title to visit my GitHub repository, explore the code, and witness my journey as a developer.
                    <br />  
                    <br />
                    Dive in and explore the world of code:
                    <br/>
                    <br/>
                    <a href="https://github.com/ivan0627" id="githubLink">My Github</a>
                    </p>
                </div>
                <div className="project_images">
                
                    <img id="githubLogo" src={github_logo} alt='github logo'/>
                

                </div>
        </div>
    )
}

export default Projects