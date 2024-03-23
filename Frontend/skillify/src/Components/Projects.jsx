import React from 'react';

const Projects = ({ data }) => {
  const { projects } = data?.data;

  return (
    <div name='work' className=' px-[8rem]  h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-7xl mx-auto px-4 '>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Projects </p>     
         <div className=" flex flex-wrap justify-center py-[3rem] gap-8">
          {projects && projects.map((project, index) => (
            <div key={index} className="w-1/3 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{project?.projectName}</h2>
                <p className="text-gray-400 mb-4">{project?.projectDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project?.projectTechStack.map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 py-4 text-center">
                <button
                  onClick={() => window.open(project?.projectLink)}
                  className="text-gray-200 bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg font-bold transition duration-300 ease-in-out">
                  View Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
