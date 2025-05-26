import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border-2 border-stone-900 dark:border-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:underline">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;