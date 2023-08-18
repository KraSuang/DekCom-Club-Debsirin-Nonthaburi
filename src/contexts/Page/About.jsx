import { useLanguage } from "../../asset/lang/lang"
import Section from "../../components/Section";

function About(){

    const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

    return(
        <>
            <div className={`flex flex-col w-full mx-20 mt-[90px] items-center ${getCurrentFont(currentLanguage)}`}> 
               <div className="flex w-full h-[200px] justify-center items-center">
                    <p className={`text-white font-extralight text-[60px]`}>{getTranslation("about-title")}</p>
                    <p className={`ml-3 text-red-800 font-extralight text-[60px]`}>{getTranslation("about-title-2")}</p>
                </div>
                <p className={`text-white w-[1000px] text-center font-medium text-xl whitespace-wrap`}>{getTranslation("about-description")}</p>
                <p className={`text-white w-[1000px] text-center font-medium text-xl whitespace-wrap`}>{getTranslation("about-description-2")}</p>
                <p className={`text-white w-full text-center flex justify-center items-center font-medium text-[40px] h-[200px]`}>{getTranslation("department")}</p>
                <div className="flex my-9 w-full justify-center">
                    <div className="grid gap-6 grid-cols-5">
                        <Section image='bg-game' title={getTranslation('section-game-title')} description={getTranslation('section-game-description')}/>
                        <Section image='bg-multimedia' title={getTranslation('section-multimedia-title')} description={getTranslation('section-multimedia-description')}/>
                        <Section image='bg-program' title={getTranslation('section-program-title')} description={getTranslation('section-program-description')}/>
                        <Section image='bg-graphic' title={getTranslation('section-graphic-title')} description={getTranslation('section-graphic-description')}/>
                        <Section image='bg-robot' title={getTranslation('section-robot-title')} description={getTranslation('section-robot-description')}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About