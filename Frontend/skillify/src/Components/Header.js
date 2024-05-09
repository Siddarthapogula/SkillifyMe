import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { adduser, removeUserInfo, removeUserToken } from '../store/userSlice'

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  function handleSignOut(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(adduser());
    dispatch(removeUserInfo());
    dispatch(removeUserToken());
  }
  return (
    <div className='flex justify-between w-screen h-[5rem] bg-slate-300'>
        <Link to='/' className=' p-[1.25rem] ml-[2.5rem] rounded-lg m-1 w-40 '>
          {/* <img src='' /> */}
          <h1 className='text-3xl '>SkillifyMe</h1>
        </Link>
        <div className=' p-[1.25rem] mr-[2.5rem] rounded-lg m-1 bg-[#EB455F] w-[16rem] flex justify-between items-center'>
            {user?.isLogged && <button className=' ml-[1.5rem]  cursor-pointer'><FontAwesomeIcon icon={faSearch}  /></button> }
            <FontAwesomeIcon className=' ml-[2.5rem]  cursor-pointer' icon={faQuestion}/>
            {user?.isLogged?<FontAwesomeIcon className=' mr-[1.5rem]  cursor-pointer' icon={faUser}/>:
            <div>
             <button className=' mr-[1.5rem]'>Get Started</button>
            </div>
            }
            {user?.isLogged && <button onClick={()=>{
              handleSignOut();
            }}>sign out</button>} 

            
        </div>
    </div>
  )
}

export default Header