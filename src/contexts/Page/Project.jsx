import { useLanguage } from "../../asset/lang/lang"
import ProjectPreview from "../../components/ProjectPreview";
import React, { useState } from "react"



import sennestia_pic from "../../asset/image/game.jpg"
import dekcom_keychains_2022_pic from "../../asset/image/keychain.png"
import food_waste_competitation_2021_pic from "../../asset/image/Multimedia.PNG"
import dream_traveler_pic from "../../asset/image/dreamtraveler_1.PNG"
import dream_traveler_2_pic from "../../asset/image/dreamtraveler_2.PNG"



import Sennestia from "../../components/Moral/Sennestia";
 


function Project(){

    const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

    const [isSennestiaOpen, setIsSennestiaOpen] = useState(false);

    function openSennestiaModal() {
        setIsSennestiaOpen(true);
      }
      
    return(
        <>
            <div className={`flex flex-col w-full h-fit mx-20 mt-[90px] items-center ${getCurrentFont(currentLanguage)}`}> 
               <div className="flex w-full h-[200px] justify-center items-center">
                    <p className={`text-white font-extralight text-[60px]`}>{getTranslation("project-title")}</p>
                    <p className={`ml-3 text-red-800 font-extralight text-[60px]`}>{getTranslation("project-title-2")}</p>
                </div>
                <div className="flex  w-full justify-center mb-20">
                    <div className="grid grid-cols-2 gap-10">
                        <ProjectPreview 
                            image={sennestia_pic} 
                            image_align={"center"}
                            visible_a={"visible"} 
                            visible_b={"hidden"} 
                            name="SENNESTIA | DEMO" 
                            title={getTranslation('sennestia-title')} 
                            description={getTranslation('sennestia-description')} 
                            status={getTranslation('sennestia-status')} 
                            status_detail={getTranslation('sennestia-status-2')}
                            url_visible={'hidden'}
                            more_detail_visible={'visible'}
                            more_detail_title={getTranslation('more-detail-title-B')}
                            onClick={openSennestiaModal}
                        />

                        <ProjectPreview 
                            url={"https://www.facebook.com/permalink.php?story_fbid=pfbid0Freu6ZytW3ayL9zycVBdPqi5Yxrx3YiHb9qQC4acNB4gnbAJ5mL5bC51RWtpY95Vl&id=100030100032666&from_close_friend=1&notif_id=1692382932584771&notif_t=close_friend_activity&ref=notif"}
                            image={dekcom_keychains_2022_pic} 
                            image_align={"center"}
                            visible_a={"visible"} 
                            visible_b={"hidden"} 
                            name="DECKOM | KEYCHAINS" 
                            title={getTranslation('dekcom-keychains-2022-title')} 
                            description={getTranslation('dekcom-keychains-2022-description')}
                        />
                        <ProjectPreview 
                            image={food_waste_competitation_2021_pic} 
                            image_align={"right"}
                            visible_a={"hidden"} 
                            visible_b={"visible"} 
                            name={getTranslation("food-waste-competittion-2021-name")} 
                            title={getTranslation('food-waste-competittion-2021-title')}
                            description={getTranslation('food-waste-competittion-2021-description')}
                            url_visible={'visible'}
                            url_link={'https://www.youtube.com/watch?v=PxtnASUlsO0'}
                            url_title={getTranslation('url-title-A')}
                            more_detail_visible={'hidden'}
                        />
                        <ProjectPreview 
                            image={dream_traveler_pic}
                            image_align={"center"}
                            visible_a={"visible"}
                            visible_b={"hidden"}
                            name={"DREAMTRAVELER"}
                            title={getTranslation('dream-traveler-title')}
                            description={getTranslation('dream-traveler-description')}
                            url_visible={'visible'}
                            url_link={'https://play.google.com/store/apps/details?id=com.Dekcom.DreamTraveler'}
                            url_title={getTranslation('url-title-B')}
                            more_detail_visible={'hidden'}
                        />
                        <ProjectPreview 
                            image={dream_traveler_2_pic}
                            image_align={"center"}
                            visible_a={"visible"}
                            visible_b={"hidden"}
                            name={"DREAMTRAVELER 2"}
                            title={getTranslation('dream-traveler-2-title')}
                            description={getTranslation('dream-traveler-2-description')}
                            url_visible={'visible'}
                            url_link={'https://play.google.com/store/apps/details?id=com.dekcomdsn.dt2'}
                            url_title={getTranslation('url-title-B')}
                            more_detail_visible={'hidden'}
                        />
                    </div>
                </div>
            </div>


            <Sennestia isOpen={isSennestiaOpen} onClose={() => setIsSennestiaOpen(false)} />

        </>
    )
}

export default Project