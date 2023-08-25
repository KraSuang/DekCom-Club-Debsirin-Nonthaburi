import { useLanguage } from "../asset/lang/lang"

const Section = ({ image, title, description }) => {

    const { currentLanguage } = useLanguage()

    const isActive = (language) => currentLanguage === language;

    return(
        <div 
            className="flex relative rounded-2xl bg-black transition-all duration-300 group hover:scale-[1.05]
                max-[440px]:w-[160px] max-[440px]:h-[160px]
                sm:w-[250px] sm:h-[250px] 
                xl:w-[250px] xl:h-[250px]
                2xl:w-[250px] 2xl:h-[250px]
                full:w-[300px] full:h-[300px]"
        >
            <div className={`bg-top ${image} w-full h-full bg-cover rounded-2xl opacity-70 transition-all duration-300 group-hover:opacity-40`}></div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 py-10">
                <p className={`text-white w-full text-center transition-all ease-in-out
                    lg:duration-200 
                    xl:duration-300 
                    ${isActive('en') ? 
                        'font-[500] max-[440px]:text-xl max-[440px]:group-hover:text-sm lg:text-[26px] lg:group-hover:text-[17px] xl:text-[26px] xl:group-hover:text-[20px] full:text-[30px] full:group-hover:text-[24px]'
                         : 
                        'max-[440px]:text-[20px] max-[440px]:group-hover:text-[14px lg:text-[26px] lg:group-hover:text-[22px] 2xl:text-[26px] 2xl:group-hover:text-[22px] full:text-[30px] full:group-hover:text-[24px] font-[500]'}`}>{title}</p>
                <p className={`text-white transition-all duration-300 opacity-0 w-full h-0 group-hover:h-full group-hover:opacity-100 
                    ${isActive('en') ? 
                        'font-medium max-[440px]:text-xs lg:text-[14px] xl:text-base full:text-lg' 
                        : 
                        'font-regular max-[440px]:text-xs lg:text-xs xl:text-sm 2xl:text-base full:text-lg'}`}>{description}</p>
            </div>
        </div>
    )
}

export default Section