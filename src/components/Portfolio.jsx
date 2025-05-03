import React from "react";
import projects from "../data/projects"; // Assuming you have a portfolioData.js file in the data folder
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
   return (
      <div className="flex flex-co md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
               <PortfolioItem
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   );
}

export default Portfolio;