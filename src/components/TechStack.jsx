import React from "react";

function TechStack({ items }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="px-3 py-1.5 bg-gray-700 text-white rounded-full flex items-center gap-2"
        >
          {item.icon && React.createElement(item.icon)}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;