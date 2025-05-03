import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return (
        <div className="flex flex-co md:flex-row my-20 justify-center">
            <div className="w-full md:w-7/12">
                <Title id="timeline">Timeline</Title>
                {timeline.map((project) => (
                    <TimelineItem
                        year={project.year}
                        title={project.title}
                        duration={project.duration}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
     );
}

export default Timeline
;