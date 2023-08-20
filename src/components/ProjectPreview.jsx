import { useLanguage } from "../asset/lang/lang";

const ProjectPreview = ({ image, image_align, name, visible_a, visible_b, title, description, status, status_detail, onClick, url_visible, url_link, url_title, more_detail_visible, more_detail_title}) => {
    
    const { currentLanguage, getCurrentFont } = useLanguage();

    const isActive = (language) => currentLanguage === language;
    
    return(
        <div className={`flex w-[700px] h-[280px] bg-background-preview/60 items-center content-center rounded-2xl transition-all duration-300 group hover:bg-background-preview/100 group hover:scale-[1.03] ${getCurrentFont(currentLanguage)}`}>
            <img src={image} class={`w-[300px] h-[300px] object-cover object-${image_align} transition-transform duration-300 group-hover:scale-[1.03] rounded-2xl`} loading="lazy" alt="thumbnail"/>
            <div className="flex flex-col px-6 py-4 w-full h-full justify-center ">
                <p className={`text-white ${visible_a} font-oswald font-semibold text-[26px]`}>{name}</p>
                <p className={`text-white ${visible_b} font-semibold text-[26px]`}>{name}</p>
                <p className="text-white font-medium text-md">{title}</p>
                <p className={`text-white h-full ease-in-out my-4 ${isActive('en') ? 'text-md font-medium' : 'text-sm font-regular'}`}>{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <p className={`text-white ${isActive('en') ? 'text-lg font-medium' : 'text-md font-regular'}`}>{status}</p>
                        <p className={`ml-1 text-white ${isActive('en') ? 'text-lg font-medium' : 'text-md font-regular'}`}>{status_detail}</p>
                    </div>
                    <a className={`${url_visible} text-red-600 text-[20px] transition-all duration-300 cursor-pointer hover:text-white hover:scale-105`} target="_blank" rel="noreferrer" href={url_link}>{url_title}</a>
                    <button className={`${more_detail_visible} text-red-600 text-[20px] transition-all duration-300 cursor-pointer hover:text-white hover:scale-105`} onClick={onClick}>
                        {more_detail_title}
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default ProjectPreview