import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import Header from './Header';
import Footer from './Footer'
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
          <div className=' w-4/12 h-[28rem] bg-slate-400'>
            PORTFOLIOS
          </div>
          <div className=' w-8/12 h-[28rem] bg-slate-400'>
              <h1>Hello {user?.userInfo?.username}..</h1>
              <h1>wellcome to skillify</h1>
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