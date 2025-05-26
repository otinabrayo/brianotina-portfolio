import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2 mb-8 text-center justify-center">
        <span>📊</span> Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <PortfolioItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;