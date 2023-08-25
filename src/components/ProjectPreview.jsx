import { useLanguage } from "../asset/lang/lang";

const ProjectPreview = ({ image, image_align, name, visible_a, visible_b, title, description, status, status_detail, onClick, url_visible, url_link, url_title, more_detail_visible, more_detail_title }) => {

    const { currentLanguage, getCurrentFont } = useLanguage();

    const isActive = (language) => currentLanguage === language;

    return (
        <>
            <div className={`max-[440px]:hidden flex bg-background-preview/60 items-center content-center rounded-2xl transition-all duration-300 group hover:bg-background-preview/100 group hover:scale-[1.03]
                lg:w-[700px] lg:h-[280px]
                ${getCurrentFont(currentLanguage)}`}
            >
                <img
                    src={image}
                    class={`object-cover object-${image_align} transition-transform duration-300 group-hover:scale-[1.03] rounded-2xl
                    lg:w-[300px] lg:h-[300px]
                `}
                    loading="lazy"
                    alt="thumbnail" />
                <div className="flex flex-col px-6 py-4 w-full h-full justify-center ">
                    <p className={`text-white ${visible_a} font-oswald font-semibold 
                    lg:text-[20px]
                    2xl:text-[26px]`}
                    >{name}</p>

                    <p className={`text-white ${visible_b} font-semibold 
                    lg:text-[20px]
                    2xl:text-[26px]`}
                    >{name}</p>

                    <p className="text-white font-medium 
                    lg:max-text-xs
                    xl:text-sm
                    2xl:text-base"
                    >{title}</p>

                    <p className={`text-white h-full ease-in-out max-my-4 ${isActive('en') ? 'max-[440px]:max-text-xs lg:max-text-sm xl:max-text-base font-medium' : 'max-text-sm font-regular'}`}>{description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className={`text-white ${isActive('en') ? 'lg:text-sm xl:text-lg font-medium' : 'text-base font-regular'}`}>{status}</p>
                            <p className={`ml-1 text-white ${isActive('en') ? 'lg:text-sm xl:text-lg font-medium' : 'text-base font-regular'}`}>{status_detail}</p>
                        </div>
                        <a className={`${url_visible} text-red-600  lg:text-[16px] xl:text-[20px] transition-all duration-300 cursor-pointer hover:text-white hover:scale-105`} target="_blank" rel="noreferrer" href={url_link}>{url_title}</a>
                        <button 
                            className={`${more_detail_visible} text-red-600 transition-all duration-300 cursor-pointer hover:text-white hover:scale-105
                                lg:text-[16px]
                               2xl:text-[20px]`} 
                            onClick={onClick}>
                                {more_detail_title}
                        </button>
                    </div>
                </div>
            </div>







            <div className={`max-[440px]:flex hidden pt-6 flex-col bg-background-preview/60 items-center content-center rounded-2xl transition-all duration-300 group hover:bg-background-preview/100 group hover:scale-[1.03]
                ${getCurrentFont(currentLanguage)}`}
            >
                <img
                    src={image}
                    className={`object-cover w-[300px] h-[300px] object-${image_align} transition-transform duration-300 group-hover:scale-[1.03] rounded-2xl`}
                    loading="lazy"
                    alt="thumbnail" />
                <div className="flex flex-col px-6 py-4 w-full h-full justify-center ">
                    <p 
                        className={`text-white ${visible_a} font-oswald font-semibold text-[18px]`}
                    >{name}</p>

                    <p 
                        className={`text-white ${visible_b} font-semibold text-[18px]`}
                    >{name}</p>

                    <p 
                        className="text-white font-medium text-xs"
                    >{title}</p>

                    <p className={`text-white h-full ease-in-out my-4 ${isActive('en') ? 'max-[440px]:text-xs xl:text-base font-medium' : 'text-sm font-regular'}`}>{description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <p className={`text-white ${isActive('en') ? 'text-base font-medium' : 'text-sm font-regular'}`}>{status}</p>
                            <p className={`ml-1 text-white ${isActive('en') ? 'text-base font-medium' : 'text-sm font-regular'}`}>{status_detail}</p>
                        </div>
                        <a className={`${url_visible} text-red-600 text-[20px] transition-all duration-300 cursor-pointer hover:text-white hover:scale-105`} target="_blank" rel="noreferrer" href={url_link}>{url_title}</a>
                        <button className={`${more_detail_visible} text-red-600 text-[20px] transition-all duration-300 cursor-pointer hover:text-white hover:scale-105`} onClick={onClick}>
                            {more_detail_title}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPreview