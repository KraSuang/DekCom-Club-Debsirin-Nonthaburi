import { useLanguage } from "../asset/lang/lang"

const Section = ({ image, title, description }) => {

    const { currentLanguage } = useLanguage()

    const isActive = (language) => currentLanguage === language;

    return(
        <div 
            className="flex relative rounded-2xl bg-black transition-all duration-300 group hover:scale-[1.05]
                max-[440px]:w-[160px] max-[440px]:h-[160px] 
                lg:w-[200px] lg:h-[200px]
                xl:w-[300px] xl:h-[300px]"
        >
            <div className={`bg-top ${image} w-full h-full bg-cover rounded-2xl opacity-70 transition-all duration-300 group-hover:opacity-40`}></div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 py-10">
                <p className={`text-white w-full text-center transition-all ease-in-out
                    lg:duration-200 
                    xl:duration-300 
                    ${isActive('en') ? 'font-[500] max-[440px]:text-xl max-[440px]:group-hover:text-sm lg:text-[23px] lg:group-hover:text-[17px] xl:text-[30px] xl:group-hover:text-[24px]' : 'max-[440px]:text-[20px] max-[440px]:group-hover:text-[14px] xl:text-[30px] font-[500] group-hover:text-[18px]'}`}>{title}</p>
                <p className={`text-white transition-all duration-300 opacity-0 w-full h-0 group-hover:h-full group-hover:opacity-100 ${isActive('en') ? 'font-medium max-[440px]:text-xs lg:text-[14px] xl:text-lg' : 'font-regular max-[440px]:text-xs xl:text-lg'}`}>{description}</p>
            </div>
        </div>
    )
}

export default Section