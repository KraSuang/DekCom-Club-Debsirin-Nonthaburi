import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import '../asset/css/animation/animation.css';



function Start() {
    const [buttonVisible, setButtonVisible] = useState(false);

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

    return (
        <>
            <div className='flex flex-col relative w-full h-screen justify-center items-center bg-thumbnail bg-cover bg-center animate-fade-in overflow-hidden'>
                <div className="flex flex-col w-full h-full relative justify-center items-center z-10">
                    <div className="typing-container">
                        <p id="typing-text" className="font-oswald text-[100px] text-white"></p>
                        <span id="blinking-box" className="animate-blink"></span>
                    </div>
                    <div className='flex w-fit h-[80px] relative items-center justify-center'>
                        <Link
                            to="/home"
                            className={`font-oswald text-3xl rounded-2xl bg-red-800 visit-fade-in cursor-default mt-6 px-5 py-3 text-white ${buttonVisible ? 'animate-visit-fade-in' : ''}`}>
                            <span>Visit the website</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Start;
