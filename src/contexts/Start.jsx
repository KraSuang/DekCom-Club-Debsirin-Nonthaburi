import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../asset/css/animation/animation.css';
import packageJson from '../../package.json'

function Start() {
    const [buttonVisible, setButtonVisible] = useState(false)
    const [prepareFadeOut, setPrepareFadeOut] = useState(false)
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        const blinkingBox = document.getElementById("blinking-box");

        const textToType = "DekCom Club";
        let currentIndex = 0;

        function typeText() {
            if (currentIndex < textToType.length) {
                textElement.textContent = textToType.substring(0, currentIndex + 1);
                currentIndex++;

                blinkingBox.style.left = textElement.offsetWidth + 10 + "px";
                blinkingBox.style.top = 0;

                setTimeout(typeText, 100);
            } else {
                // Typing animation is complete, make the button visible
                setButtonVisible(true);
            }
        }

        const fadeElement = document.querySelector(".animate-fade-in");
        fadeElement.addEventListener("animationend", () => {
            typeText();
        });

    }, []);

    const handleButtonClick = () => {
        setFadeOut(true);

        setTimeout(() => {
            setPrepareFadeOut(true)
        }, 500);
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    };

    return (
        <>
            <div className={`flex flex-col relative w-full h-screen justify-center items-center max-[440px]:bg-thumbnail2 sm:bg-thumbnail bg-cover bg-center animate-fade-in overflow-hidden ${prepareFadeOut ? 'transition-all duration-[0.4s] opacity-40' : ''}`}>
                <div className={`flex flex-col w-full h-full relative justify-center items-center z-10 ${fadeOut ? 'transition-all duration-500 opacity-0' : ''}`}>
                    <div className={`typing-container`}>
                        <p id="typing-text" className={`font-oswald max-[440px]:text-[50px] md:text-[65px] lg:text-[85px] xl:text-[100px] text-white`}></p>
                        <span id="blinking-box" className={`animate-blink`}></span>
                    </div>
                    <div className={`flex w-fit h-[80px] relative items-center justify-center mb-auto ${fadeOut ? '' : ''}`}>
                        {buttonVisible ? (
                            <button
                                onClick={handleButtonClick}
                                className={`font-oswald max-[440px]:text-lg lg:text-2xl xl:text-3xl rounded-2xl bg-red-800 visit-fade-in cursor-pointer mt-6 px-5 py-3 text-white ${buttonVisible ? 'animate-visit-fade-in' : ''}`}>
                                <span>Visit the website</span>
                            </button>
                        ) : null}
                    </div>
                </div>
                <p className={`absolute text-white/50 font-oswald font-light bottom-9 opacity-100 ${fadeOut ? 'opacity-0' : ''}`}>Lastest Update : {packageJson.lastestUpdated} Time : {packageJson.lastUpdateTime} Version : {packageJson.version} {packageJson.status}</p>
                <p className={`absolute text-white/50 font-oswald font-light bottom-3 opacity-100 ${fadeOut ? 'opacity-0' : ''}`}>© Copyright 2023 DekCom Club</p>
            </div>
        </>
    );
}

export default Start;
