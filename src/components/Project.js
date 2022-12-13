import React from "react";

function Project({project}) {
    const { name, description, deployedLink, repoLink, image } = project
    return(
        <div>
            <img 
            src = {require(`../assets/images/${image}`)}
            alt = {name}
            width = "400" height="300"
            />
            <div>
                <h3>
                    <a href={deployedLink}>{name}</a>{" "}
                    <a href= {repoLink}>See the repo</a>
                    <p>{description}</p>
                </h3>
            </div>
        </div>
    )
}

export default Project; 