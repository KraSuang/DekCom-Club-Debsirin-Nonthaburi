import { useLanguage } from "../../asset/lang/lang"
import ProjectPreview from "../../components/ProjectPreview";
import React, { useState } from "react"
import { motion } from "framer-motion"



import sennestia_pic from "../../asset/image/game.jpg"
import dekcom_keychains_2022_pic from "../../asset/image/keychain.png"
import food_waste_competitation_2021_pic from "../../asset/image/Multimedia.PNG"
import dream_traveler_pic from "../../asset/image/dreamtraveler_1.PNG"
import dream_traveler_2_pic from "../../asset/image/dreamtraveler_2.PNG"



import Sennestia from "../../components/Moral/Sennestia";
 


const Project = ({ isNavbarAppear, ProjectChange }) => {

    const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

    const [isSennestiaOpen, setIsSennestiaOpen] = useState(false);

    const AnimationVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.4
            }
         },
        Ivisible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: isNavbarAppear ? 0.0 : 1.7,
            },
        },
        IIvisible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: isNavbarAppear ? 0.1 : 1.8,
            },
        },
        IIIvisible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: isNavbarAppear ? 0.3 : 2.1,
            },
        },
        IVvisible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: isNavbarAppear ? 0.3 : 2.0,
            },
        },
        Vvisible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: isNavbarAppear ? 0.4 : 2.1,
            },
        },
        VIvisible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: isNavbarAppear ? 0.5 : 2.2,
            },
        },
    };

    function openSennestiaModal() {
        setIsSennestiaOpen(true);
      }
      
    return(
        <>
            <div className={`flex flex-col w-full h-fit mt-[90px] items-center 
                max-[440px]:mx-6
                xl:mx-20 
                ${getCurrentFont(currentLanguage)}`}> 
               <div className="flex w-full justify-center items-center
                    max-[440px]:h-[100px]
                    lg:h-[150px]
                    xl:h-[200px]">
                    <motion.p 
                        className={`text-white font-extralight 
                            max-[440px]:text-[30px] 
                            lg:text-[48px]
                            xl:text-[60px]`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={ProjectChange ? 'hidden' : 'Ivisible'}
                        exit="hidden"
                        variants={AnimationVariants}
                    >{getTranslation("project-title")}</motion.p>

                    <motion.p 
                        className={`ml-3 text-red-800 font-extralight 
                            max-[440px]:text-[30px] 
                            lg:text-[48px]
                            xl:text-[60px]`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={ProjectChange ? 'hidden' : 'IIvisible'}
                        exit="hidden"
                        variants={AnimationVariants}
                    >{getTranslation("project-title-2")}</motion.p>

                </div>
                <motion.div 
                    className="flex  w-full justify-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                        animate={ProjectChange ? 'hidden' : 'IIIvisible'}
                        exit="hidden"
                        variants={AnimationVariants}
                    >
                    <div className="grid gap-10 
                        max-[440px]:grid-cols-1
                        lg:grid-cols-2
                        xl:grid-cols-2
                    ">
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
                </motion.div>
            </div>


            <Sennestia isOpen={isSennestiaOpen} onClose={() => setIsSennestiaOpen(false)} />

        </>
    )
}

export default Project