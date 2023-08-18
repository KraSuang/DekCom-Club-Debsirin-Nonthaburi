import icon from '../asset/image/dekcom-icon.jpg'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../asset/lang/lang'

function NavBar(){
    const { currentLanguage, setLanguage, getTranslation, getCurrentFont } = useLanguage();
    const location = useLocation();

    console.log("Current location:", location);
  
    const handleLanguageChange = (language) => {
      setLanguage(language);
    };
  
    const isActive = (language) => currentLanguage === language;
  
    const isCurrentPath = (path) => location.pathname === path;

    return(
        <div className={`flex w-full h-[60px] bg-background-home items-center justify-center px-20 fixed ${getCurrentFont(setLanguage)}`}>
            <div className='flex w-[200px] h-full justify-center items-center mr-auto'>
                <img className='w-[50px] h-[50px] rounded-full' src={icon} />
                <p className='text-white text-xl font-oswald mx-4'>DekCom Club</p>
            </div>
            <div className='flex items-center mx-2'>
                <NavLink className={`flex font-medium mx-4 duration-200 transition-colors hover:text-red-700 ${isActive('en') ? 'text-xl' : 'text-2xl'} ${isCurrentPath('/home') ? 'text-red-700' : 'text-white'}`} to="/home">
                    {getTranslation('home')}
                </NavLink>
                <NavLink className={`flex  font-medium mx-4 duration-200 transition-colors hover:text-red-700 ${isActive('en') ? 'text-xl' : 'text-2xl'} ${isCurrentPath('/project') ? 'text-red-700' : 'text-white'}`} to="/project">
                    {getTranslation('project')}
                </NavLink>
                <NavLink className={`flex  font-medium mx-4 duration-200 transition-colors hover:text-red-700 ${isActive('en') ? 'text-xl' : 'text-2xl'} ${isCurrentPath('/contact') ? ' text-red-700' : 'text-white'}`} to="/contact">
                    {getTranslation('contact')}
                </NavLink>
            </div>
            <div className='flex w-[200px] h-full justify-center items-center ml-auto'>
                <button className='w-fit' onClick={() => handleLanguageChange('en')}>
                    <p className={`font-oswald transition-all duration-100 text-xl ${isActive('en') ? 'text-red-700 scale-110' : 'text-white scale-100'}`}>EN</p>
                </button> 
                <div className='h-[40px] w-[1px] bg-amber-900/50 mx-4'></div>
                <button className='w-fit' onClick={() => handleLanguageChange('th')}>
                    <p className={`font-oswald transition-all duration-100 text-xl ${isActive('th') ? 'text-red-700 scale-110' : 'text-white scale-100'}`}>TH</p>
                </button>              
            </div>
        </div>
    )
}

export default NavBar