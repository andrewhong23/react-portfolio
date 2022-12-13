import React, { useState } from "react";
import Project from "../components/Project" 


function Portfolio () {
    const [projects] = useState ([
        
        {
            name: "JDA Bank",
            description: "A website that allows user to transfer money back and forth to one another.",
            deployedLink: "https://jda-bank.herokuapp.com/login", 
            repoLink: "https://github.com/Nivix047/JDA-Bank",
            image: "new-jda-screen.jpg"
        },
        {
            name: "Note Taker",
            description: "An app that will allow a user to take notes and save them to one place!",
            deployedLink: "https://andrews-note-taker.herokuapp.com/", 
            repoLink: "https://github.com/andrewhong23/note-taker",
            image: "note-taking-screen-shot.jpg"
        },
        {
            name: "Tech Blog Website",
            description: "A blog website that users can create and comment on posts that are all about tech!",
            deployedLink: "https://andrew-techblog.herokuapp.com/", 
            repoLink: "https://github.com/andrewhong23/tech-blog",
            image: "tech-blog-screenshot.jpg"
        }
    ])
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="d-flex justify-content-around">
            {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}

            </div>
        </section>
    )
}

export default Portfolio; 