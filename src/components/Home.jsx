import React from 'react'
import MyImage from "../assets/myImage1.jpg";
import {MdKeyboardArrowRight,} from "react-icons/md";
import {Link} from "react-scroll";
const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full '>

                <h2 className=' text-4xl sm:text-7xl  font-bold text-white py-4'>
                    I'm a Software Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I'm a Front End Developer with a passion for creating interactive, engaging and responsive websites.  I am a highly skilled and passionate front-end developer in building dynamic and responsive web applications. 
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to blue-500 cursor-pointer'>Portfolio<span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1'/></span></Link>
                </div>
            </div>

            <div>
                <img src={MyImage} alt='my_dp'className='h-80 w-70 rounded-2xl mx-auto md:w-80 h-60' />
            </div>
        </div>
    </div>
  )
}

export default Home;
