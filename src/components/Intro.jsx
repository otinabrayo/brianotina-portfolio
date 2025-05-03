import React from "react"

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
            Brian Otina
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
            Data Engineer & Web Developer
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
            This is my complete bio <br/>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem sint veniam dolorem aliquid dolore est id
            laudantium magni quis, magnam eos quasi, quam quibusdam sit ut
            voluptate assumenda sapiente quod. <br/>
            <a className="text-cyan-600 hover:underline underline-offset-3 decoration-red-600"
                href="https://github.com/otinabrayo"
                rel='noreferrer noopener'
                target="_blank"
                >
                My Github Page
            </a> {' '}
            for more projects.
        </p>
    </div>
  )
}

export default Intro;