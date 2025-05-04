import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
   return (
      <div className="flex flex-co md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {projects.map((project) => (
               <PortfolioItem
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  description={project.description}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   );
}

export default Portfolio;