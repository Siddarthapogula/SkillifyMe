import React from 'react';

const WorkExperience = ({ data }) => {
    const {jobExperience} = data?.data;
    console.log(jobExperience);
  return (
{/* <div name='work' className=' px-4 py-8  md:h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Work Experience </p>     
              
    {jobExperience.map((job, index) => (
        <div key={index} className=" rounded-lg shadow-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-300 mb-2">{job.companyName}</h2>
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <p>{job.jobRole}</p>
            <p>{job.jobDuration}</p>
          </div>
          <p className="text-gray-400 mb-4">{job.jobDescription}</p>
          <div>
            <p className="text-gray-400 mb-2">Tech Stack Used:</p>
            <div className="flex flex-wrap">
              {job.techStackUsed.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full mr-2 mb-2">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
        
    </div>
</div> */}




  );
};

export default WorkExperience;

