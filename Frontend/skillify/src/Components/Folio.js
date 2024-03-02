import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo, addUserToken, adduser } from '../store/userSlice';
import { addProject, addWorkExperience} from '../store/folioSlice';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { roles, skills, technologies } from '../utils';
import { useNavigate } from 'react-router-dom';

const Folio = () => {
const navigate = useNavigate();
const user = useSelector((store)=>store.user);
const dispatch = useDispatch();
const folio = useSelector(store => store.folio);
const projects = folio?.projects;
const jobExperience = folio?.workExperience


// here creating the folio

async function handleCreateFolio(){

  const folioBody = {
    achievements : achievements.current?.value,
    contactDetails: {
      phoneNo: phoneNo.current?.value,
      email: email.current?.value,
    },
    description : bio.current?.value,
    jobExperience : jobExperience,
    links : {
      linkedin : linkedinLink.current?.value,
      github : gitHubLink.current?.value,
      instagram : instagramLink.current?.value,
      twitter : twitterLink.current?.value
     },
     name : userName.current?.value,
     proficientSkill : selectedRole,
     projects : projects,
     resumeDrive : resumeDriveLink.current?.value,
     services : services.current?.value,
     studies : {
      higherEducation : higherEducation.current?.value,
      secondaryEducation : secondaryEducation.current?.value,
      primaryEducation : secondaryEducation.current?.value
    },
    techStack : skillSet,
  }

  
  const headers = {
    headers: {
      Authorization: user.token,
    },
  };
  const result = await axios.post("http://localhost:3000/folio/create", folioBody, headers );

  setSelectedRole(""); 
  setSkills([]);
  console.log(folioBody);
  userName.current.value = null;
  secondaryEducation.current.value = null;
  higherEducation.current.value = null;
  services.current.value = null;
  resumeDriveLink.current.value = null;
  achievements.current.value = null;
  bio.current.value = null;
  phoneNo.current.value = null;
  email.current.value = null;
  instagramLink.current.value = null;
  gitHubLink.current.value = null;
  linkedinLink.current.value = null;
  twitterLink.current.value = null;
  navigate("/");
}

  // here about section 
  
    const [selectedRole, setSelectedRole] = useState("");
    const userName = useRef(null);
    const userBased = useRef(null);
    const higherEducation = useRef(null);
    const secondaryEducation = useRef(null);
    function handleRoleChange(e) {
    setSelectedRole(e.target.value);
    };

    const studies = {
      higherEducation : higherEducation.current?.value,
      secondaryEducation : secondaryEducation.current?.value,
      primaryEducation : secondaryEducation.current?.value
    }

// here are user's social handles

 const instagramLink = useRef(null)
 const twitterLink = useRef(null)
 const linkedinLink = useRef(null)
 const gitHubLink = useRef(null)

 const links = {
  linkedin : linkedinLink.current?.value,
  github : gitHubLink.current?.value,
  instagram : instagramLink.current?.value,
  twitter : twitterLink.current?.value
 }
  
 // here user's project section's details 

  const projectName = useRef(null);
  const projectLink = useRef(null);
  const projectDescription = useRef(null);
  const [techStack, setTechStack] = useState([]);
  const [isProjectOk, setIsProjectOk] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

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

  function handleAddNewProject (){
    if(isProjectOk){
      if(projectName.current?.value === null){
          setIsEmpty(!isEmpty);
          console.log(isEmpty);
          return;
      }
      const addNewProject = {
        projectName : projectName.current?.value,
        projectLink : projectLink.current?.value,
        projectDescription : projectDescription.current?.value,
        projectTechStack : techStack,
      }
      dispatch(addProject(addNewProject));
      projectName.current.value = null;
      projectLink.current.value = null;
      projectDescription.current.value = null;
      setTechStack([]);
      if(isEmpty){
        setIsEmpty(!isEmpty);
      }
      projectName.current.focus();
    }
    setIsProjectOk(!isProjectOk);
  }
  // here user's work experience details
 
  const [stillWorking, setStillWorking] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isOkay, setIsOkay] = useState(false);
  const [isNull, setIsNull] = useState(false);
 
  const companyName = useRef(null);
  const position = useRef(null);
  const startDate = useRef(null);
  const endDate = useRef(null);
  const companyDescription = useRef(null);

  function handleAddNewExperience(){
    if(isOkay){
          if(companyName.current?.value === null||position.current?.value === null||startDate.current?.value === null){
              setIsNull(!isNull);
              return;
          }
      const newWorkExperience = {
        companyName: companyName.current?.value,
        jobRole: position.current?.value,
        jobDuration : startDate.current?.value +" - " +(endDate.current?.value ===""?"present":endDate.current?.value),
        jobDescription: companyDescription.current?.value,
        stillWorking: stillWorking,
        techStackUsed: selectedTechnologies,
      };
      dispatch(addWorkExperience(newWorkExperience));
      
      companyName.current.value = null;
      position.current.value = null;
      startDate.current.value = null;
      endDate.current.value = null;
      companyDescription.current.value = null;
      setStillWorking(!stillWorking);
      setSelectedTechnologies([]);
      if(isNull){
        setIsNull(!isNull);
      }
      companyName.current.focus();
    }
    setIsOkay(!isOkay);
  }

  function handleTechChange(e){
    const selectedTechnology = e.target.value;
    setSelectedTechnologies((prevTechnologies)=>{
      if(prevTechnologies.includes(selectedTechnology)){
        return prevTechnologies.filter((tech)=> tech !== selectedTechnology);
      }
      else{
        return [...prevTechnologies, selectedTechnology]
      }
    })
  }

  function handleCheckboxChange(){
    setStillWorking(!stillWorking);
  }

// here miscellaneous details 

  const services = useRef(null);
  const achievements = useRef(null);
  const resumeDriveLink = useRef(null);
  const bio = useRef(null);
  const [skillSet, setSkills] = useState([]);

  function handleSKills(e){
    const selectedSkill = e.target.value;
    setSkills((prevSkill)=>{
      if(prevSkill.includes(selectedSkill)){
        return prevSkill.filter((tech)=> tech!==selectedSkill);
      }
      else{
        return[...prevSkill, selectedSkill];
      }
    })
  }

//here user contact details

  const phoneNo = useRef(null);
  const email = useRef(null);

  const contactDetails = {
    phoneNo : phoneNo.current?.value,
    email : email.current?.value
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
  
    if (storedUser && storedToken && !user.isLogged) {
      dispatch(addUserInfo(JSON.parse(storedUser)));
      dispatch(addUserToken(storedToken));
      dispatch(adduser());
    }
  }, [dispatch]);

 
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
            <input ref={userName} className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>
             {/* address */}
            <div className=' text-white font-[400] text-lg'>Where are you based? *</div>
            <input ref={userBased} placeholder='e.g-mumbai' className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>

            <div className=' text-white font-[400] text-lg'>Higher Education *</div>
            <input ref={higherEducation} className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>

            <div className=' text-white font-[400] text-lg'>Secondary Education *</div>
            <input ref={secondaryEducation} className='  bg-gray-200 w-[95%] font-[350] mb-2 text-lg px-3  py-[0.3rem] rounded-sm'/>
             
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
            <input ref={linkedinLink} className='  bg-gray-200 w-[95%] mb-2  font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'> <FontAwesomeIcon icon={  faGithub} /> Github</div>
            <input ref={gitHubLink} className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'> <FontAwesomeIcon icon={  faInstagram} /> Instagram</div>
            <input ref={instagramLink} className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'> <FontAwesomeIcon icon={  faTwitter} /> Twitter</div>
            <input ref={twitterLink} className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
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
          <form onSubmit={(e)=>e.preventDefault()} className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white   font-[400] text-lg'>Company*</div>
            <input ref={companyName} className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>position*</div>
            <input placeholder='e.g-data analyst' ref={position} className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>Start date*</div>
            <input ref={startDate} placeholder='e.g-jun-2020' className='   bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>End date*</div>
            <input ref={endDate} placeholder='e.g-dec-2023(skip, if you are currently working in this company)' className='  bg-gray-200 w-[95%] mb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>

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
              <div  className=' text-white   font-[400] text-lg'>Description*</div>
            <textarea ref={companyDescription} className=' bg-gray-200 mb-2 w-[95%] font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[400px]'
          placeholder="Enter your description here..."/>

        <div>
        <div className=' text-white font-[400] text-lg'>Select Technologies *</div>
          <select value={selectedTechnologies} 
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
        {isNull && <p className=' w-[40%] my-2 text-lg text-white bg-gradient-to-r from-black to-[#2A3467] rounded-sm '>Please enter the essential fields</p>}
        <button className=' px-2 p-[0.3rem] bg-[#0000FF] text-white rounded-sm ' onClick={()=>{
                    handleAddNewExperience();}}>{isOkay?"Add Another Experience*":"Ok*"}</button>
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
          <form onSubmit={(e)=>e.preventDefault()} className='  w-[70%] bg-[#2A3467]  opacity-70 py-[2rem] border-b-[1px] border-white'>
            <div className=' text-white   font-[400] text-lg'>Project name*</div>
            <input ref={projectName} className='  bg-gray-200 pb-2 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white   font-[400] text-lg'>projectLink*</div>
            <input ref={projectLink} className='  bg-gray-200 pb-2 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>

              <div  className=' text-white   font-[400] text-lg'>Project Description*</div>
            <textarea ref={projectDescription}
            className=' bg-gray-200  w-[95%] font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[400px]'
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

        {isEmpty && <p className=' w-[40%] my-2 text-lg text-white bg-gradient-to-r from-black to-[#2A3467] rounded-sm '>Please enter the essential fields</p>}
        <button className='my-2 px-2 p-[0.3rem] bg-[#0000FF] text-white rounded-sm ' onClick={()=>{
                    handleAddNewProject();}}>{isProjectOk?"Add Another Project*":"Ok*"}</button>
                  
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
            <textarea
            ref={achievements}
            style={{ overflowY: 'hidden' }}
            className='   bg-gray-200 w-[95%]  font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[400px]'
              placeholder="-e.g. I launced 3 successful ABC apps which in total reached 2M+ users and generated $100K+ revenue. I built every thing from the front-end to the back-end and everything in between."/>          
            <div className=' text-white   font-[400] text-lg'>Sevices*</div>
            <textarea ref={services} className=' bg-gray-200 w-[95%] font-[350] text-lg p-2 pb-[0.5rem] rounded-sm resize-none overflow-y-auto max-h-[200px]'
          placeholder="Enter your services here, like web development, content writer..."/>


          <div className=' py-2 text-white font-[400] text-lg'>Your skills *</div>
          <select  value={techStack} 
          className="  appearance-none pb-2  flex justify-between text-lg font-[350]   border w-[95%]  px-3  py-[0.6rem] rounded-sm leading-5 focus:outline-none focus:ring focus:border-bg-[#2A3467]   transition duration-150 ease-in-out"

          onChange={handleSKills}>
            <option>Select Skills</option>
            {skills.map((tech) => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          
          {skillSet.length > 0 && (
            <div className=' py-4'>
               <div className='py-4 pb-2 text-white font-[400] text-base'>Skills Selected : </div>
                {skillSet.map((tech) => (
               <span key={tech} className=' text-white font-[200] text-base'>{tech}ㅤ</span>
                ))}
            </div>
          )}

              <div className=' text-white   font-[400] text-lg'>Resume Drive Link *</div>
              <input ref={resumeDriveLink} className='  bg-gray-200 w-[95%] pb-2 font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
              <div className=' text-white   font-[400]  text-lg'>Your bio*</div>
            <textarea ref={bio} className=' bg-gray-200 w-[95%] font-[350] text-lg p-2 pb-[8.5rem] rounded-sm resize-none overflow-y-auto max-h-[200px]'
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
            <input ref={phoneNo} className='  bg-gray-200 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>
            <div className=' text-white font-[400] text-lg'>Your email*</div>
            <input ref={email} className='  bg-gray-200 w-[95%] font-[350] text-lg px-3  py-[0.3rem] rounded-sm'/>

        {isEmpty && <p className=' w-[40%] my-2 text-lg text-white bg-gradient-to-r from-black to-[#2A3467] rounded-sm '>Please enter the essential fields</p>}

            <button onClick={(e)=>{
              e.preventDefault();
              handleCreateFolio();
            }} className=' px-4 my-4 py-2 text-white rounded-md ml-[10rem] bg-[#0000FF] items-center'>Create Your PortFolio</button>
          
          </form>
        </div>
        </div>


      </div>
      </div>
    </>
  )
}

export default Folio