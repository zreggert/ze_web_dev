import { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const SideNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        console.log('state changed')
    };

    return (

    <div>
        {/* mobile navigation menu */}
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fix w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href="#hero" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href="#aboutme" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-200'>
                        <BsPerson  size={20} />
                        <span className='pl-4'>About Me</span>
                    </a>
                    <a href="#skills" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Skills</span>
                    </a>
                    <a href="#portfolio" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Portfolio</span>
                    </a>
                    <a href="#contact" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale=110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ) : (
                ''
            )
        }

        {/* side navigation buttons for large screens */}
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col ml-3'>
                <a href='#hero' className='rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-4 p-5 cursor-pointer hover:scale-150 hover:bg-opacity-80 duration-300'>
                    <AiOutlineHome />                    
                </a>
                <a href='#aboutme' className='rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-4 p-5 cursor-pointer hover:scale-150 hover:bg-opacity-80 duration-300'>
                    <BsPerson  />
                </a>
                <a href='#skills' className='rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-4 p-5 cursor-pointer hover:scale-150 hover:bg-opacity-80 duration-300'>
                    <AiOutlineProject />
                </a>
                <a href='#portfolio' className='rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-4 p-5 cursor-pointer hover:scale-150 hover:bg-opacity-80 duration-300'>
                    <GrProjects />
                </a>
                <a href='#contact' className='rounded-full shadow-lg bg-seafoam bg-opacity-50 shadow-gray-400 m-4 p-5 cursor-pointer hover:scale-150 hover:bg-opacity-80 duration-300'>
                    <AiOutlineMail />
                </a>
            </div>
        </div>
    </div>
    )
}

export default SideNav