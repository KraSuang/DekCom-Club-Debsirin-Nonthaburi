import { useLanguage } from "../../asset/lang/lang"
import Section from "../../components/Section";
import { motion } from "framer-motion"

const About = ({ isNavbarAppear, AboutChange }) => {

    const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

    const isActive = (language) => currentLanguage === language;

    console.log("Navbar Appear is", isNavbarAppear)

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
                delay: isNavbarAppear ? 0.2 : 1.9,
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

    return (
        <>
            <div
                className={`flex flex-col w-full h-fit items-center
                    max-[440px]:mx-2 max-[440px]:mt-[60px]
                    lg:mx-14 
                    xl:mx-20 xl:mt-[90px]
                    ${getCurrentFont(currentLanguage)}`}
            >
                <div
                    className="flex w-full justify-center items-center
                        max-[440px]:h-[100px] 
                        lg:h-[150px]
                        xl:h-[200px]"
                >
                    <motion.p
                        className={`text-white font-extralight 
                            max-[440px]:text-[30px] 
                            lg:text-[48px]
                            xl:text-[60px]`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={AboutChange ? 'hidden' : 'Ivisible'}
                        exit="hidden"
                        variants={AnimationVariants}
                    >{getTranslation("about-title")}</motion.p>

                    <motion.p
                        className={`ml-3 text-red-800 font-extralight 
                            max-[440px]:text-[30px] 
                            lg:text-[48px]
                            xl:text-[60px]`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={AboutChange ? 'hidden' : 'IIvisible'}
                        exit="hidden"
                        variants={AnimationVariants}
                    >{getTranslation("about-title-2")}</motion.p>
                </div>
                <motion.p
                    className={`text-white text-center whitespace-wrap
                        max-[440px]:w-[350px] max-[440px]:text-sm
                        lg:w-[800px] lg:text-lg
                        xl:w-[1000px] xl:text-2xl 
                        ${isActive('en') ? 'font-medium' : 'font-regular'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={AboutChange ? 'hidden' : 'IIIvisible'}
                    exit="hidden"
                    variants={AnimationVariants}
                >{getTranslation("about-description")}</motion.p>

                <motion.p
                    className={`text-white text-center whitespace-wrap
                        max-[440px]:w-[350px] max-[440px]:text-sm
                        lg:w-[800px] lg:text-lg
                        xl:w-[1200px] xl:text-2xl 
                        ${isActive('en') ? 'font-medium' : 'font-regular'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={AboutChange ? 'hidden' : 'IVvisible'}
                    exit="hidden"
                    variants={AnimationVariants}
                >{getTranslation("about-description-2")}</motion.p>

                <motion.p
                    className={`text-white w-full text-center flex justify-center items-center 
                        max-[440px]:text-base max-[440px]:h-[100px]
                        lg:text-[30px] lg:h-[150px]
                        xl:text-[40px] xl:h-[200px] 
                        ${isActive('en') ? 'font-medium' : 'font-regular'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={AboutChange ? 'hidden' : 'Vvisible'}
                    exit="hidden"
                    variants={AnimationVariants}
                >{getTranslation("department")}</motion.p>

                <div className="flex max-[440px]:my-0 xl:my-9 w-full justify-center">
                    <motion.div
                        className="grid gap-6 
                            max-[440px]:grid-cols-2 
                            lg:grid-cols-5 lg:mb-20
                            xl:grid-cols-5 xl:mb-0"
                        initial={{ opacity: 0, y: -20 }}
                        animate={AboutChange ? 'hidden' : 'VIvisible'}
                        exit="hidden"
                        variants={AnimationVariants}
                    >
                        <Section
                            image='bg-game'
                            title={getTranslation('section-game-title')}
                            description={getTranslation('section-game-description')}
                        />
                        <Section
                            image='bg-multimedia'
                            title={getTranslation('section-multimedia-title')}
                            description={getTranslation('section-multimedia-description')}
                        />
                        <Section
                            image='bg-program'
                            title={getTranslation('section-program-title')}
                            description={getTranslation('section-program-description')}
                        />
                        <Section
                            image='bg-graphic'
                            title={getTranslation('section-graphic-title')}
                            description={getTranslation('section-graphic-description')}
                        />
                        <Section
                            image='bg-robot'
                            title={getTranslation('section-robot-title')}
                            description={getTranslation('section-robot-description')}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About