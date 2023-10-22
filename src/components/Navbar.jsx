import React, { useState } from 'react'
import Logo from '../asset/Main Logo.svg'
import { Link } from 'react-router-dom'
import { MdExpandMore } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Box, Drawer } from '@mui/material';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };


    return (
        <>
            <div className='w-full flex justify-between items-center sm:flex-nowrap flex-wrap'>
                <div className='md:w-[20%] w-[35%]'>
                    <img src={Logo} alt="" className='h-[4rem]' />
                </div>
                <div className='md:w-[80%] w-[65%] flex lg:justify-between justify-end lg:gap-0 sm:gap-10 gap-4 items-center'>
                    <div className='w-[73%] lg:flex font-manrope  justify-center lg:ml-10 hidden gap-6 text-lg items-center'>
                        <Link to="" >
                            <h1 className='hover:text-[#FE8F4F] '>Home</h1>
                        </Link>
                        <Link to="">
                            <h1 className='hover:text-[#FE8F4F] '>About</h1>
                        </Link>
                        <Link>
                            <h1 className='hover:text-[#FE8F4F] flex gap-1 items-center'>
                                Services<MdExpandMore className='mt-1' />
                            </h1>
                        </Link>
                        <Link to="">
                            <h1 className='hover:text-[#FE8F4F] '>Case Studies</h1>
                        </Link>
                        <Link to="">
                            <h1 className='hover:text-[#FE8F4F] '>Blogs</h1>
                        </Link>
                    </div>

                    <Link to="" className='gap-1.5 group flex items-center hover:scale-105 transition-all duration-200 bg-[#091438] sm:py-2.5 py-1.5 sm:px-4 px-2 text-white rounded-3xl'>
                        <button className='border-0 sm:text-base text-xs font-manrope' >Get in touch</button>
                        <FiArrowUpRight className='sm:text-lg text-sm group-hover:rotate-45 transition-all duration-200' />
                    </Link>


                    <div className='lg:hidden block'>
                        <HiOutlineMenuAlt3 onClick={() => setIsOpen(true)} className='sm:text-4xl text-2xl' />
                    </div>
                    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
                        <div className='sm:w-[15rem] w-[12rem] sm:text-3xl text-2xl h-full bg-[#faf0e4] px-3 flex flex-col gap-10 items-center pt-4 '>
                            <div>
                                <img src={Logo} className='h-[5rem]' alt="" />
                            </div>
                            <Box className='flex flex-col sm:gap-12 gap-8'>
                                <Link to="" >
                                    <h1 className='hover:text-[#FE8F4F] '>Home</h1>
                                </Link>
                                <Link to="">
                                    <h1 className='hover:text-[#FE8F4F] '>About</h1>
                                </Link>
                                <Link>
                                    <h1 className='hover:text-[#FE8F4F] flex gap-1 items-center'>
                                        Services<MdExpandMore className='mt-1' />
                                    </h1>
                                </Link>
                                <Link to="">
                                    <h1 className='hover:text-[#FE8F4F] '>Case Studies</h1>
                                </Link>
                                <Link to="">
                                    <h1 className='hover:text-[#FE8F4F] '>Blogs</h1>
                                </Link>
                            </Box>
                        </div>
                    </Drawer>
                </div>
            </div>
        </>
    )
}

export default Navbar
