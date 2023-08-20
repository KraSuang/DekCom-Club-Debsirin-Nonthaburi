import icon from '../asset/image/dekcom-icon.jpg'
// import { Switch } from '@headlessui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../asset/lang/lang'
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

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
            <div className='flex w-[400px] h-full justify-center items-center mr-auto'>
                <img className='w-[50px] h-[50px] rounded-full' src={icon} alt="DekCom-Icon"/>
                <p className='text-white text-xl font-oswald mx-4'>DekCom Club</p>
            </div>
            <div className='flex items-center mx-2'>
                <NavLink className={`flex mx-4 duration-200 transition-colors hover:text-red-700 ${isActive('en') ? 'text-xl font-medium' : 'text-2xl font-regular'} ${isCurrentPath('/home') ? 'text-red-700' : 'text-white'}`} to="/home">
                    {getTranslation('home')}
                </NavLink>
                <NavLink className={`flex mx-4 duration-200 transition-colors hover:text-red-700 ${isActive('en') ? 'text-xl font-medium' : 'text-2xl font-regular'} ${isCurrentPath('/project') ? 'text-red-700' : 'text-white'}`} to="/project">
                    {getTranslation('project')}
                </NavLink>
                {/* <NavLink className={`flex  font-medium mx-4 duration-200 transition-colors hover:text-red-700 ${isActive('en') ? 'text-xl' : 'text-2xl'} ${isCurrentPath('/contact') ? ' text-red-700' : 'text-white'}`} to="/contact">
                    {getTranslation('contact')}
                </NavLink> */}
            </div>
            <div className='flex w-[400px] h-full justify-start items-center ml-auto'>
                <div className='flex w-fit h-full items-center mx-4'>
                    <a className='text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/Dekcom.dsn'><FaFacebook/></a>
                    <a className='text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/dsn.dekcom/?hl=en'><FaInstagram/></a>
                    <a className='text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://github.com/DSN-DekCom-Club'><FaGithub/></a>
                    <a className='text-[26px] transition-all duration-300 text-white hover:text-red-700 hover:scale-105 mx-3' target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/channel/UC1DFECmeq9avfpLmWxQ3v2A'><FaYoutube/></a>
                </div>
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