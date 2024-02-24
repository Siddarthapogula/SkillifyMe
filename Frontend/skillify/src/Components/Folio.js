import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo, addUserToken, adduser } from '../store/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const Folio = () => {
  const roles = [
    'Software Engineer', 'Software Developer', 'Android Developer', 'iOS Developer',
    'Frontend Developer', 'Backend Developer', 'Blockchain', 'Data Analyst',
    'Technical Support', 'UI Designer', 'UX Designer', 'DevOps Engineer', 'Data Scientist',
    'Product Manager', 'Recruiter', 'Office Manager', 'Manager', 'CMO', 'CEO', 'CFO', 'CTO', 'Founder'
  ];

  const technologies = [
    ".NET","Amazon CloudWatch", "Angular", "AWS Lambda","Bootstrap", "C++","Docker","Express.js","Firebase","Git",
    "HTML5","Java","Kubernetes", "Linux","MongoDB", "Node.js","Objective-C","Python", "postgresql","React","Rust",  "redux", "SQL","Tailwind CSS","TensorFlow", "typescript", "Unity",
    "Vue.js", "Webpack", "XML","YAML","Zookeeper",
  ];

  const [selectedRole, setSelectedRole] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [techStack, setTechStack] = useState([]);
  function handleTechChange(e){
    const selectedTechnology = e.target.value;
    console.log(selectedTechnology);
    setSelectedTechnologies((prevTechnologies)=>{
      console.log(prevTechnologies)
      if(prevTechnologies.includes(selectedTechnology)){
        return prevTechnologies.filter((tech)=> tech !== selectedTechnology);
      }
      else{
        return [...prevTechnologies, selectedTechnology]
      }
    })
  }

  function handleTechStackChange(e){
    const selectedTechStack = e.target.value;
    setTechStack((prevTechStack)=>{
      if(prevTechStack.includes(selectedTechStack)){
        return prevTechStack.filter((tech)=> tech!==selectedTechStack);
      }
      else{
        return[...prevTechStack, selectedTechStack];
      }
    })
  }
  console.log(selectedTechnologies);




  const [stillWorking, setStillWorking] = useState(false);
  function handleCheckboxChange(){
    setStillWorking(!stillWorking);
  }
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
  
    if (storedUser && storedToken && !user.isLogged) {
      dispatch(addUserInfo(JSON.parse(storedUser)));
      dispatch(addUserToken(storedToken));
      dispatch(adduser());
    }
  }, [dispatch]);

  function handleRoleChange(e) {
    setSelectedRole(e.target.value);
  };
  return (
    <>
      <Header/>
      <div className=' bg-[#FBFFE7] w-screen h-full'>
        {/* top level div */}
        <div className=' py-[2rem]'>
        {/* 1st section i.e about user */}

        <div className=' flex justify-center '>
        <div className='flex justify-center  w-10/12 h-[30%] '>
          <div className=' w-[30%]  bg-[#2A3467] opacity-70'>
            <div className=' pl-3 pt-3'>
            <div className=' text-white font-[400] text-lg'>About</div>
            <div className=' text-white '>Tell us about yourself</div>
            </div>
          </div>
          <form className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white font-[400] text-lg'>Your name *</div>
            <input className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>
             {/* address */}
            <div className=' text-white font-[400] text-lg'>Where are you based? *</div>
            <input className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>

            <div className=' text-white font-[400] text-lg'>Higher Education *</div>
            <input className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>

            <div className=' text-white font-[400] text-lg'>Secondary Education *</div>
            <input className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>
             
             {/* select your primary role ka accordian type */}
            <div className=' text-white font-[400] text-lg'>Select your primary role *</div>
            <select
              className="appearance-none  flex justify-between text-lg font-[350]   border w-[95%]  px-3  py-[0.6rem] rounded-sm leading-5 focus:outline-none focus:ring focus:border-bg-[#2A3467]   transition duration-150 ease-in-out"
              value={selectedRole}
              onChange={handleRoleChange}>
              <option value="" disabled className=' text-lg'> select your roleㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ▼</option>
              {roles.map((role) => (
                <option className=' bg-[#a3aacc] text-lg   text-white  m-[1rem] hover:bg-[#354fa5]' key={role} value={role}>{role}</option>
              ))} 
            </select>
          </form>
        </div>
        </div>
        {/* second section i.e user social handles */}

        <div className=' flex justify-center '>
        <div className='flex justify-center  w-10/12 h-[30%]'>
          <div className=' w-[30%]  bg-[#2A3467] opacity-70'>
            <div className=' pl-3 pt-3'>
            <div className=' text-white font-[400] text-lg'>Social Profiles</div>
            <div className=' text-white '>Where can people find you online?</div>
            </div>
          </div>
          <form className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white   font-[400] text-lg'> <FontAwesomeIcon icon={  faLinkedin} /> Linkedin</div>
            <input className='  bg-gray-200 w-[95%] mb-2  font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'> <FontAwesomeIcon icon={  faGithub} /> Github</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'> <FontAwesomeIcon icon={  faInstagram} /> Instagram</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'> <FontAwesomeIcon icon={  faTwitter} /> Twitter</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
          </form>
        </div>
        </div>

        {/* 3rd section i.e work experience section */}

        <div className=' flex justify-center '>
        <div className='flex justify-center  w-10/12 h-[30%]'>
          <div className=' w-[30%]  bg-[#2A3467] opacity-70'>
            <div className=' pl-3 pt-3'>
            <div className=' text-white font-[400] text-lg'>Work Experience</div>
            <div className=' text-white '>What other positions have you held?</div>
            </div>
          </div>
          <form className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white   font-[400] text-lg'>Company*</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>position*</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>Start date*</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>End date*</div>
            <input className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>

            <div className='text-white font-[400] text-lg py-2'>
            <label className="flex items-center ">
              <input
                type="checkbox"
                checked={stillWorking}
                onChange={handleCheckboxChange}
                className="appearance-none rounded-md  checked:bg-[#a3e635] border border-white w-4 h-4 mr-2"
              />
              Still working here
            </label>
        </div>   
              <div className=' text-white   font-[400] text-lg'>Description*</div>
            <textarea className=' bg-gray-200 mb-2 w-[95%] font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[400px]'
          placeholder="Enter your description here..."/>

        <div>
        <div className=' text-white font-[400] text-lg'>Select Technologies *</div>
          <select  value={selectedTechnologies} 
          className="appearance-none mb-2  flex justify-between text-lg font-[350]   border w-[95%]  px-3  py-[0.6rem] rounded-sm leading-5 focus:outline-none focus:ring focus:border-bg-[#2A3467]   transition duration-150 ease-in-out"

          onChange={handleTechChange}>
            <option>Select Used Technologies</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          
          {selectedTechnologies.length > 0 && (
            <div className=' mb-5'>
               <div className=' text-white font-[400] text-base'>Used Technologies : </div>
                {selectedTechnologies.map((tech) => (
               <span key={tech} className=' text-white font-[200] text-base'>{tech}ㅤ</span>
                ))}
            </div>
          )}
        </div>
                  
          </form>
        </div>
        </div>

        {/* 4th section i.e project section */}

        <div className=' flex justify-center '>
        <div className='flex justify-center  w-10/12 h-[30%]'>
          <div className=' w-[30%]  bg-[#2A3467] opacity-70'>
            <div className=' pl-3 pt-3'>
            <div className=' text-white font-[400] text-lg'>Projects</div>
            <div className=' text-white '>Projects you have done</div>
            </div>
          </div>
          <form className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white   font-[400] text-lg'>Project name*</div>
            <input className='  bg-gray-200 pb-2 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>projectLink*</div>
            <input className='  bg-gray-200 pb-2 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>

              <div className=' text-white   font-[400] text-lg'>Project Description*</div>
            <textarea className=' bg-gray-200 pb-2 w-[95%] font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[400px]'
          placeholder="Enter your description here..."/>

        <div>
        <div className=' text-white font-[400] text-lg'>Project TechStack *</div>
          <select  value={techStack} 
          className="appearance-none pb-2  flex justify-between text-lg font-[350]   border w-[95%]  px-3  py-[0.6rem] rounded-sm leading-5 focus:outline-none focus:ring focus:border-bg-[#2A3467]   transition duration-150 ease-in-out"

          onChange={handleTechStackChange}>
            <option>Select Used Technologies</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          
          {techStack.length > 0 && (
            <div>
               <div className=' pb-2 text-white font-[400] text-base'>Used Technologies : </div>
                {techStack.map((tech) => (
               <span key={tech} className=' text-white font-[200] text-base'>{tech}ㅤ</span>
                ))}
            </div>
          )}
        </div>
                  
          </form>
        </div>
        </div>

        {/* miscellaneous part like services, achievements, resumedrive, */}
        
        <div className=' flex justify-center '> 
        <div className='flex justify-center  w-10/12 h-[30%]'>
          <div className=' w-[30%]  bg-[#2A3467] opacity-70'>
            <div className=' pl-3 pt-3'>
            <div className=' text-white font-[400] text-lg'>Career Highlights</div>
            <div className=' text-white '>Sharing more details about yourself will help you stand out more.</div>
            </div>
          </div>
          <form className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white   font-[400] text-lg'>Achievements*</div>
            <textarea className=' bg-gray-200 w-[95%]  font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[400px]'
              placeholder="-e.g. I launced 3 successful ABC apps which in total reached 2M+ users and generated $100K+ revenue. I built every thing from the front-end to the back-end and everything in between."/>          
            <div className=' text-white   font-[400] text-lg'>Sevices*</div>
            <textarea className=' bg-gray-200 w-[95%] font-[350] text-lg p-2 pb-[0.5rem] rounded-sm resize-none overflow-y-auto max-h-[200px]'
          placeholder="Enter your services here, like web development, content writer..."/>
              <div className=' text-white   font-[400] text-lg'>Resume Drive Link *</div>
              <input className='  bg-gray-200 w-[95%] pb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
              <div className=' text-white   font-[400]  text-lg'>Your bio*</div>
            <textarea className=' bg-gray-200 w-[95%] font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[200px]'
          placeholder="Tell us about yourself. You can write your own bio or click the 'Generate Bio' button below to use AI assistance."/>
          </form>
        </div>
        </div>
        
        {/* contact details part, includes phone no & email address. */}
        <div className=' flex justify-center '>
        <div className='flex justify-center pb-2 w-10/12 h-[30%] '>
          <div className=' w-[30%]  bg-[#2A3467] opacity-70'>
            <div className=' pl-3 pt-3'>
            <div className=' text-white font-[400] text-lg'>Contact Details</div>
            <div className=' text-white '> Provide your essential contact information to help others get in touch with you</div>
            </div>
          </div>
          <form className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white font-[400] text-lg'>Your Phone no *</div>
            <input className='  bg-gray-200 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
             {/* address */}
            <div className=' text-white font-[400] text-lg'>Your email*</div>
            <input className='  bg-gray-200 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
          
          </form>
        </div>
        </div>

      </div>

              <button className=' items-center'>-Create Your PortFolio-</button>
      </div>
    </>
  )
}

export default Folio