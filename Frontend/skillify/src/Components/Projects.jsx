// import React from 'react';


// const Projects = ({data}) => {
//   const {projects} = data?.data;

//   return (
//     <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
//             Projects
//           </p>
//           <p className='py-6'>// Check out some of my recent Projects</p>
//         </div>

// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

//   {
//     projects && 
//       projects.map((project, index) => {
//         return(
          
//               <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div ">
//               <div className="group-hover:opacity-100 ">
//                 <div className="text-2xl font bold text-white tracking-wider ">
//                   {project?.projectName}
//                 </div>
//                 <div className="text-md font bold text-white tracking-wider ">
//                   Description :{project?.projectDescription}
//                 </div>
//                 <div className="text-sm font bold text-white tracking-wider ">
//                   {
//                     project?.projectTechStack.map((tech, index) => {
//                       return(
//                         <p>{tech}</p>
//                       )
//                     })
//                   }
//                 </div>
//                 <div className="pt-8 text-center ">
//                   <a  target="_blank">
//                     <button
//                       onClick={() => window.open(project?.projectLink)}
//                       className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                       Code
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//         )
//       })
//   //   <div className="shadow-lg shadow-[#040c16] group container rounded-md 
//   //             flex justify-center text-center items-center mx-auto content-div ">
//   //   <div className="group-hover:opacity-100 ">
//   //     <div className="text-2xl font bold text-white tracking-wider ">
//   //       Skillify
//   //     </div>
//   //     <div className="text-md font bold text-white tracking-wider ">
//   //       Description : This is a clone of SkillifyMe a portfolio builder
//   //     </div>
//   //     <div className="text-sm font bold text-white tracking-wider ">
//   //       Tech stack used : reactjs, nodejs, mongodb, tailwind css
//   //     </div>
//   //     <div className="pt-8 text-center ">
//   //       <a  target="_blank">
//   //         <button
//   //           className="text-center rounded-lg px-4 py-3 m-2
//   //                      bg-white text-gray-700 font-bold text-lg">
//   //           Code
//   //         </button>
//   //       </a>
//   //       <a target="_blank">
//   //         <button
//   //           className="text-center rounded-lg px-4 py-3 m-2
//   //                      bg-white text-gray-700 font-bold text-lg">
//   //           Live
//   //         </button>
//   //       </a>
//   //     </div>
//   //   </div>
//   // </div>

//   }

          
//           {/* {project.map((item, index) => (
//   <div
//     key={index}
//     style={{ backgroundImage: `url(${item.image})` }}
//     className="shadow-lg shadow-[#040c16] group container rounded-md 
//               flex justify-center text-center items-center mx-auto content-div "
//   >
//     <div className="opacity-0 group-hover:opacity-100 ">
//       <span className="text-2xl font bold text-white tracking-wider ">
//         {item.name}
//       </span>
//       <div className="pt-8 text-center ">
//         <a href={item.github} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Code
//           </button>
//         </a>
//         <a href={item.live} target="_blank">
//           <button
//             className="text-center rounded-lg px-4 py-3 m-2
//                        bg-white text-gray-700 font-bold text-lg"
//           >
//             Live
//           </button>
//         </a>
//       </div>
//     </div>
//   </div>
// ))} */}


// </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from 'react';

const Projects = ({ data }) => {
  const { projects } = data?.data;

  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Projects </p>     
         <div className=" flex flex-wrap justify-center gap-8">
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
