import { useLanguage } from "../asset/lang/lang"

const Section = ({ image, title, description }) => {

    const { currentLanguage } = useLanguage()

    const isActive = (language) => currentLanguage === language;

    return(
        <div className="flex relative rounded-2xl bg-black w-[300px] h-[300px] transition-all duration-300 group hover:scale-[1.05]">
            <div className={`bg-top ${image} w-full h-full bg-cover rounded-2xl opacity-70 transition-all duration-300 group-hover:opacity-40`}></div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 py-10">
                <p className={`text-white w-full text-center transition-all duration-300 ease-in-out ${isActive('en') ? 'text-[30px] font-[500] group-hover:text-[24px]' : 'text-[30px] font-[500] group-hover:text-[18px]'}`}>{title}</p>
                <p className={`text-white text-m transition-all duration-300 opacity-0 w-full h-0 group-hover:h-full group-hover:opacity-100`}>{description}</p>
            </div>
        </div>
    )
}

export default Section