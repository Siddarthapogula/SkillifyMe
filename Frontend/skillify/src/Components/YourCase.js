import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const achievements = useRef();
  const phoneNo = useRef();
  const email = useRef();
  const bio = useRef();
  const jobExperience = [
    {
      company: 'Company 1',
      position: 'Software Developer',
      startDate: 'January 2020',
      endDate: 'Present'
    },
    {
      company: 'Company 2',
      position: 'Software Developer',
      startDate: 'January 2018',
      endDate: 'December 2019'
    }
  ];
  const selectedRole = 'Mern';
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a description of Project 1',
      link: 'https://www.example.com/project1'
    },
    {
      name: 'Project 2',
      description: 'This is a description of Project 2',
      link: 'https://www.example.com/project2'
    },
    {
      name: 'Project 3',
      description: 'This is a description of Project 3',
      link: 'https://www.example.com/project3'
    }
  ];
  const resumeDriveLink = useRef();
  const services = useRef();
  const higherEducation = useRef();
  const secondaryEducation = useRef();
  const primaryEducation = useRef();
  const skillSet = ['Mern', 'C++'];
  const linkedinLink = useRef();
  const gitHubLink = useRef();
  const instagramLink = useRef();
  const twitterLink = useRef();

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white py-16">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={projectVariants}
                className="text-3xl font-medium text-center mb-10 font-serif"
              >
                siddarth 
              </motion.h1>
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={projectVariants}
                className="text-xl font-light text-center mb-10 font-sans"
              >
                fullstack developer
              </motion.h2>
              <div className="flex justify-center">
                <a href={linkedinLink.current?.value} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5">
                  LinkedIn
                </a>
                <a href={gitHubLink.current?.value} target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mr-5">
                  GitHub
                </a>
                <a href={instagramLink.current?.value} target="_blank" rel="noopener noreferrer" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mr-5">
                  Instagram
                </a>
                <a href={twitterLink.current?.value} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-medium text-center mb-10 font-serif">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={projectVariants}
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-medium mb-2 font-sans">{project.name}</h3>
                <p className="text-gray-700 mb-4 font-sans">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-medium text-center mb-10 font-serif">Job Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobExperience.map((job, index) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={projectVariants}
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-medium mb-2 font-sans">{job.position}</h3>
                <p className="text-gray-700 mb-4 font-sans">{job.company}</p>
                <p className="text-gray-700 mb-4 font-sans">{job.startDate} - {job.endDate}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-medium text-center mb-10 font-serif">Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-medium mb-2 font-sans">Higher Education</h3>
              <p className="text-gray-700 mb-4 font-sans">{higherEducation.current?.value}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-medium mb-2 font-sans">Secondary Education</h3>
              <p className="text-gray-700 mb-4 font-sans">{secondaryEducation.current?.value}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-medium mb-2 font-sans">Primary Education</h3>
              <p className="text-gray-700 mb-4 font-sans">{primaryEducation.current?.value}</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-medium text-center mb-10 font-serif">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillSet.map((skill, index) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={projectVariants}
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-medium mb-2 font-sans">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;