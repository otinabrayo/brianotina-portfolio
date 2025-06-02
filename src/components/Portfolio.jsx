import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 py-5">
      <Title id="portfolio">📊 Projects</Title>
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