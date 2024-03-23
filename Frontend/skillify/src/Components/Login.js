import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {addUserInfo, addUserToken, adduser} from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const user = useSelector(state => state.user);  
  const [isSign, setSign] = useState(true);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
  
    if (storedUser && storedToken) {
      dispatch(addUserInfo(JSON.parse(storedUser)));
      dispatch(addUserToken(storedToken));
      dispatch(adduser());
    }
  }, [dispatch]);
  if(user?.isLogged){
    navigate("/");
  }

  async function handleSignClick() {
    if (isSign) {
      const signInData = {
        username: (username.current.value),
        password: (password.current.value)
      };  
      const isUserResponse = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData),
      });
      const data = await isUserResponse.json();
      if(data?.result){
        dispatch(addUserInfo(signInData.username));
        dispatch(addUserToken(data?.token));
        dispatch(adduser());
        localStorage.setItem('user', JSON.stringify(signInData.username));
        localStorage.setItem('token', data?.token);
        navigate("/")
      }
    }
    
    else{
      const signUpData = {
        username: (username.current.value),
        email : (email.current.value),
        password: (password.current.value)
      };  
      const user = await axios.post('http://localhost:3000/user/signup', signUpData);
      const data = user.data
    }
  }
  
  return (
    <div>
      <Header/>
      <div className=' w-screen h-screen bg-white flex justify-center items-center'>

<form onSubmit={(e)=>e.preventDefault()} className=' text-white absolute  bg-black  
     md:w-4/12 w-full h-[90%] my-28 md:my-32 mx-auto right-0 left-0 rounded-sm p-16 bg-opacity-80'>

      <h1 className='  font-semibold text-3xl py-4'>{isSign ? "Sign in" : "Signup"}</h1>

      <input ref={username}  type='text' placeholder='User Name' 
      className=' bg-gray-800 p-2 my-4 w-full rounded-sm' />

      { !isSign && <input ref={email}  type='text' placeholder='Email Address' 
      className=' bg-gray-800 p-2 my-4 w-full rounded-sm' />}

      <input ref={password} type='password' placeholder='Password' 
      className='  bg-gray-800 p-2 my-4 w-full rounded-sm' />

      {/* <p className=' text-red-600 font-semibold '>{isValid}</p> */}

      <button className=' p-2 my-6   bg-red-700 py-2 w-full rounded-sm'
      onClick={()=>{
        handleSignClick();
      }} 
      >{isSign ? "Sign in" : "Sign up"}</button>
       <p className=' cursor-pointer hover:underline' onClick={()=>{
        setSign(!isSign)
       }}>
        {isSign? "New to SkillifyMe, Sign Up now " : "Already a user, Sign In now"}
       </p>
    </form>
      </div>
    </div>
  )
}

export default Login