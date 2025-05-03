import React from "react"

function PortfolioItem({title, imgUrl, stack, link, description}) {
    return (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
            transform transition-transform duration-400 hover:scale-[1.02]
            border-2 hover:bg-zinc-600 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-50 md:h-60 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="underline text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
                    {title}
                </h3>
                <p className="text-sm max-w-xl mb-6 font-bold dark:stone-600">
                    {description}
                </p>
            </div>
            <div className="w-full p-4">
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;
