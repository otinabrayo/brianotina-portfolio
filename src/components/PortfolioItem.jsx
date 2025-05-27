import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, description }) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="block group border-2 border-stone-900 dark:border-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800"
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
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:underline">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Stack Tags with Icons */}
        <div className="flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-md"
            >
              {item.icon && React.createElement(item.icon)}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;