import NavBar from "../components/Navbar"
import { Routes, Route } from "react-router-dom"
import About from "./Page/About"
import Project from "./Page/Project"
// import Contact from "./Page/Contact"
import { LanguageProvider } from '../asset/lang/lang';
import { useState } from "react";
function Home() {

    const [navbarAppear, setNavbarAppear] = useState(false)
    const [isPageChange, setIsPageChange] = useState(false)

    return(
            <LanguageProvider>
                <div className="flex flex-col w-full h-screen relative bg-black overflow-hidden">
                    <div className="flex w-full h-fit relative z-20">
                        <NavBar navbarisAppear={setNavbarAppear} PageChange={setIsPageChange}/>
                    </div>
                    <div className="flex transform w-full h-screen max-[440px]:overflow-y-scroll lg:overflow-y-scroll xl:overflow-auto z-10 overflow-x-hidden">
                        <Routes>
                            <Route path="/home" element={<About isNavbarAppear={navbarAppear} AboutChange={isPageChange}/>}/>
                            <Route path="/project" element={<Project isNavbarAppear={navbarAppear} ProjectChange={isPageChange}/>}/>
                            {/* <Route path="/contact" element={<Contact/>}/> */}
                        </Routes>
                    </div>
                    <div className="flex w-full h-full fixed z-0 items-center max-[440px]:bg-thumbnail2 sm:bg-thumbnail bg-cover bg-center opacity-40 justify-center"></div>
                    {/* <div className="flex w-full h-full fixed z-0 items-center justify-center">
                        <img className="flex z-0 opacity-40 xl:scale-[1.48] lg:scale-[1.59]" src={banner}/>
                    </div> */}
                </div>
            </LanguageProvider>
    )
}   

export default Home