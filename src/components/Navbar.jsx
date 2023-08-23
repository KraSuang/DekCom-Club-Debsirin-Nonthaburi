import icon from '../asset/image/dekcom-icon.jpg'
import React, { useState ,useEffect, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../asset/lang/lang'
import { motion } from 'framer-motion'
import { FaFacebook, FaGithub, FaInstagram, FaYoutube, FaBars } from "react-icons/fa";
import '../asset/css/animation/fade-in-navbar.css'


const NavBar = ({ navbarisAppear, PageChange }) => {
    const { currentLanguage, setLanguage, getTranslation, getCurrentFont } = useLanguage();
    const [ isPageChange, setIsPageChange ] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    console.log("Current location:", location);
    
    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    const onUpdate = (update) => {
        navbarisAppear(update)
    }

    useEffect(() => {
        const fadeElement = document.querySelector('.animate-navbar-fade-in');
        if (fadeElement) {
            fadeElement.addEventListener('animationend', () => {
                // setTimeout(() => {
                //     navbarisAppear(true)
                // }, 1200);
                navbarisAppear(true)
            });
        }
    }, [navbarisAppear]);

    console.log(isPageChange)

    const isActive = (language) => currentLanguage === language;

    const isCurrentPath = (path) => location.pathname === path;

    const handleAboutClick = () => {
        PageChange(true)
        setIsPageChange(true)
        setTimeout(() => {
            navigate("/home");
            setIsPageChange(false)
            PageChange(false)
        }, 400);
    };

    const handleProjectClick = () => {
        PageChange(true)
        setIsPageChange(true)
        setTimeout(() => {
            navigate("/project");
            setIsPageChange(false)
            PageChange(false)
        }, 400);
    };

    return (
        <>
            <div className={`w-full animate-navbar-fade-in bg-background-home items-center justify-center fixed 
                max-[440px]:hidden 
                lg:flex lg:px-6 lg:h-[50px]
                xl:flex xl:px-20 xl:h-[60px]
                ${getCurrentFont(setLanguage)}`}
            >
                <motion.div
                    className={`flex w-[400px] h-full justify-center items-center mr-auto`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                >
                    <img 
                        className='rounded-full
                            lg:w-[40px] lg:h-[40px]
                            xl:w-[50px] xl:h-[50px]' 
                        src={icon} 
                        alt="DekCom-Icon" />
                    <p className='text-white font-oswald mx-4
                        lg:text-lg
                        xl:text-xl
                    '>DekCom Club</p>
                </motion.div>
                <div className={`flex relative items-center mx-2 ${navbarisAppear ? 'animate-navbar-component-fade-in' : 'opacity-0 hidden'}`}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }}   
                        transition={{ duration: 0.7, delay: 0.9 }}   
                    >
                        <button className={`flex mx-4 duration-500 transition-colors ${isPageChange ? 'text-white' : ''} hover:text-red-700 ${isActive('en') ? 'lg:text-lg xl:text-xl font-medium' : 'text-2xl font-regular'} ${isCurrentPath('/home') ? 'text-red-700' : 'text-white'}`} onClick={handleAboutClick}>
                            {getTranslation('home')}
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}    
                        transition={{ duration: 0.7, delay: 1.1 }}   
                    >
                        <button className={`flex mx-4 duration-500 transition-colors ${isPageChange ? 'text-white' : ''} hover:text-red-700 ${isActive('en') ? 'lg:text-lg xl:text-xl font-medium' : 'text-2xl font-regular'} ${isCurrentPath('/project') ? 'text-red-700' : 'text-white'}`} onClick={handleProjectClick}>
                            {getTranslation('project')}
                        </button>
                    </motion.div>
                </div>
                <div className={`flex w-[400px] h-full justify-start items-center ml-auto`}>
                    <motion.div
                        className='flex w-fit h-full items-center mx-4'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.3 }}
                    >
                        <a className='lg:text-[22px] xl:text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/Dekcom.dsn'>
                            <FaFacebook />
                        </a>
                        <a className='lg:text-[22px] xl:text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/dsn.dekcom/?hl=en'>
                            <FaInstagram />
                        </a>
                        <a className='lg:text-[22px] xl:text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://github.com/DSN-DekCom-Club'>
                            <FaGithub />
                        </a>
                        <a className='lg:text-[22px] xl:text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UC1DFECmeq9avfpLmWxQ3v2A'>
                            <FaYoutube />
                        </a>
                    </motion.div>
                    <motion.div
                        className='flex w-full'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.5 }}
                    >
                        <button className='w-fit' onClick={() => handleLanguageChange('en')}>
                            <p className={`font-oswald transition-all duration-100 lg:text-lg xl:text-xl ${isActive('en') ? 'text-red-700 scale-110' : 'text-white scale-100'}`}>EN</p>
                        </button>
                        <div className='lg:h-[35px] xl:h-[40px] w-[1px] bg-amber-900/50 mx-4'></div>
                        <button className='w-fit' onClick={() => handleLanguageChange('th')}>
                            <p className={`font-oswald transition-all duration-100 lg:text-lg xl:text-xl ${isActive('th') ? 'text-red-700 scale-110' : 'text-white scale-100'}`}>TH</p>
                        </button>
                    </motion.div>
                </div>
            </div>










            <div className={`w-full h-[60px] animate-navbar-fade-in bg-background-home items-center justify-between px-4 fixed sm:hidden max-[440px]:flex ${getCurrentFont(setLanguage)}`}>
                <motion.div
                    className={`flex w-fit h-full items-center mr-auto`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    onUpdate={onUpdate(true)}
                >
                    <img className='w-[50px] h-[50px] rounded-full' src={icon} alt="DekCom-Icon" />
                </motion.div>
                <motion.div
                    className={`flex h-full justify-center items-center mr-auto`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                >
                    <p className='text-white text-xl font-oswald mx-4'>DekCom Club</p>
                </motion.div>
                <motion.div
                    className='flex w-fit'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                >
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white px-4 py-4 text-sm font-medium text-white bg-opacity-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                <FaBars/>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-4 w-40 origin-top-right divide-y divide-white/20 rounded-2xl bg-background-preview shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`flex mx-3 duration-200 my-3 transition-colors hover:text-red-700 ${isActive('en') ? 'text-lg font-medium' : 'text-xl font-regular'} ${isCurrentPath('/home') ? 'text-red-700' : 'text-white'}`} onClick={handleAboutClick}>
                                                {getTranslation('home')}
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button className={`flex mx-3 duration-200 my-3 transition-colors hover:text-red-700 ${isActive('en') ? 'text-lg font-medium' : 'text-xl font-regular'} ${isCurrentPath('/project') ? 'text-red-700' : 'text-white'}`} onClick={handleProjectClick}>
                                                {getTranslation('project')}
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className='px-1 py-1'>
                                    <div className='flex w-full justify-center'>
                                        <button className='w-fit' onClick={() => handleLanguageChange('en')}>
                                            <p className={`font-oswald transition-all duration-100 text-xl ${isActive('en') ? 'text-red-700 scale-110' : 'text-white scale-100'}`}>EN</p>
                                        </button>
                                        <div className='h-[40px] w-[1px] bg-white/20 mx-4'></div>
                                        <button className='w-fit' onClick={() => handleLanguageChange('th')}>
                                            <p className={`font-oswald transition-all duration-100 text-xl ${isActive('th') ? 'text-red-700 scale-110' : 'text-white scale-100'}`}>TH</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-1 py-1">
                                    <div className='flex w-full mt-4 mb-6 justify-between px-3'>
                                        <a className='text-[30px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/Dekcom.dsn'>
                                            <FaFacebook />
                                        </a>
                                        <a className='text-[30px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/dsn.dekcom/?hl=en'>
                                            <FaInstagram />
                                        </a>
                                    </div>
                                    <div className='flex w-full mt-6 my-4 justify-between px-3'>
                                        <a className='text-[30px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://github.com/DSN-DekCom-Club'>
                                            <FaGithub />
                                        </a>
                                        <a className='text-[30px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UC1DFECmeq9avfpLmWxQ3v2A'>
                                            <FaYoutube />
                                        </a>
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </motion.div>
            </div>
        </>
    )
}

export default NavBar