import NavBar from "../components/Navbar"
import banner from "../asset/image/Club_Banner.png"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Page/About"
import Project from "./Page/Project"
import Contact from "./Page/Contact"
import { LanguageProvider } from '../asset/lang/lang';
function Home() {
    return(
        <BrowserRouter>
            <LanguageProvider>
                <div className="flex flex-col w-full h-full relative bg-black overflow-hidden">
                    <div className="flex w-full h-fit relative z-20">
                        <NavBar/>
                    </div>
                    <div className="flex transform w-full h-screen pb-8 z-10 overflow-y-scroll">
                        <Routes>
                            <Route path="/home" element={<About/>}/>
                            <Route path="/project" element={<Project/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                    <div className="flex w-full h-full fixed z-0 items-center justify-center">
                        <img className="flex z-0 w-full h-fit opacity-40 scale-150 translate-y-[30px]" src={banner}/>
                    </div>
                </div>
            </LanguageProvider>
        </BrowserRouter>
    )
}   

export default Home