import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = ({data}) => {
  const resumeDrive = data?.data.resumeDrive
  const links = data?.data?.links
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center bg-[#0a192f] text-gray-300'>
      {/* menu */}
      <ul className='hidden md:flex gap-5'>
        <li>
          <Link  className=' hover:cursor-pointer' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className=' hover:cursor-pointer' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className=' hover:cursor-pointer' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className=' hover:cursor-pointer' to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link className=' hover:cursor-pointer' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`${links?.linkedin}`}
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`${links?.linkedin}`}
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`${links?.instagram}`}
            >
              Email <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[0px] duration-300 bg-[#000000]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`${links?.twitter}`}
            >
              Email <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={`${resumeDrive}`}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
