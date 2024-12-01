import React from 'react';

const Portfolio = ({ projects, theme = 'dark' }) => {
  const textColor = theme === 'light' ? 'text-white' : 'text-gray-300';
  
  return (
    <div className="mt-4">
      <h2 className={`text-lg font-semibold mb-2 ${textColor}`}>Portfolio</h2>
      <div className="flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full ${
              theme === 'light' 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            {project}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;