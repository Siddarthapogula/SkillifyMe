import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import Header from './Header';
import Footer from './Footer'
import PortFolio from './PortFolio';

const Dashboard = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user?.isLogged){
      navigate('/');
    }else{
      navigate("/login")
    }
  },[user?.isLogged])
  
  return (
    <>
    <Header/>
    <div className=' bg-[#FBFFE7] w-screen h-screen'>
        {/* on landing seeing ka div */}
        <div className=' w-screen flex gap-[3rem] p-[3rem]'>
          <div className=' rounded-lg w-4/12 h-[28rem] bg-slate-400'>
          <PortFolio/>
          </div>
          <div className=' w-8/12 h-[28rem] rounded-lg p-4 gap-4 bg-slate-400'>
              <h1>Hello {user?.userInfo}..</h1>
              <h1>wellcome to skillifyMe</h1>
              <button className=' rounded-lg my-3 hover:bg-sky-800 bg-[#2A3467] p-2 font-bold text-white'
              onClick={()=>{
                navigate("/folio");
              }}
              >Get Started</button>
          </div>
        </div>
        {/* testimonials or duplicate portfolios */}
        <div></div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard