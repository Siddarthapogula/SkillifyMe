import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import WorkExperience from './WorkExperience'
const Main = () => {

  const {id, name} = useParams();
  const [folio, setFolio] = useState(null);
  
  useEffect(()=>{
    async function getFolio(){
        const response = await axios.get(`http://localhost:3000/folio/?name=${name}&id=${id}`);
        const result = response?.data;
        setFolio(result);
    }
    getFolio();
  }, [id, name]);

  return (
    <div>
      {
        folio && (
        <div>
          <Navbar data = {folio} />
          <Home   data = {folio} />
          <About data = {folio} />
          <Skills data = {folio} />
          <WorkExperience data = {folio} />
          <Projects data = {folio} />
          <Contact data = {folio} />
        </div>
        )
      }
  </div>
  )
}

export default Main