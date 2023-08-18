import { useLanguage } from "../../asset/lang/lang"
import ProjectPreview from "../../components/ProjectPreview";

function Project(){

    const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

    return(
        <>
            <div className={`flex flex-col w-full mx-20 mt-[90px] items-center ${getCurrentFont(currentLanguage)}`}> 
               <div className="flex w-full h-[200px] justify-center items-center">
                    <p className={`text-white font-extralight text-[60px]`}>{getTranslation("project-title")}</p>
                    <p className={`ml-3 text-red-800 font-extralight text-[60px]`}>{getTranslation("project-title-2")}</p>
                </div>
                <div className="flex  w-full justify-center">
                    <div className="grid grid-cols-2 gap-6">
                        <ProjectPreview />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project