import { useLanguage } from "../../asset/lang/lang"
import Section from "../../components/Section";
import game from "../../asset/image/game.jpg"

function Contact(){

    const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

    return(
        <>
            <div className={`flex flex-col w-full mx-20 mt-[90px] items-center ${getCurrentFont(currentLanguage)}`}> 
               <div className="flex w-full h-[200px] justify-center items-center">
                    <p className={`text-white font-extralight text-[60px]`}>{getTranslation("about-title")}</p>
                    <p className={`ml-3 text-red-800 font-extralight text-[60px]`}>{getTranslation("about-title-2")}</p>
                </div>
            </div>
        </>
    )
}

export default Contact