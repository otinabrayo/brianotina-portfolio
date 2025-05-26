import React from "react";

function TechStack({ items }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          {item.icon && React.createElement(item.icon)}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;