import React from "react"
import Title from "./Title";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <div className="w-full flex justify-start pl-4">
            <img
                src="./assets/logo.png"
                className="mb-2 w-15 h-15 rounded-full border-2 border-stone-900 dark:border-white"
                alt="logo"
            />
        </div>
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
            Brian Otina
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
            Data Engineer & Web Developer
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
            👋 Hi, I'm Brian Otina, a passionate Data Engineer and Web Developer with a strong
            focus on back-end development. I have a solid foundation in Python, SQL, and Django
            REST Framework, and I'm always eager to learn new technologies and improve my skills.
            <br/>
            🎓 I'm a skilled and motivated back-end developer specializing in creating scalable,
            high-performance APIs with Python and Django REST Framework. My expertise lies in SQL,
            and I’m passionate about optimizing databases for maximum efficiency.
            <br/>
            Visit {' '}
            <a className="text-cyan-600 hover:underline underline-offset-5 decoration-zinc-600"
                href="https://github.com/otinabrayo"
                rel='noreferrer noopener'
                target="_blank"
                >
                my Github Page
            </a> {' '}
            for more projects information.
        </p>
        <Title id="projects">Projects</Title>
        <p className="text-sm max-w-xl mb-6 font-bold">
            Here are some of the projects I've worked on:
        </p>
    </div>
  )
}

export default Intro;