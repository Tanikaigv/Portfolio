"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Hero() {
    const heading1Ref = useRef(null);
    const heading2Ref = useRef(null);

    useEffect(() => {
        // Typewriting animation for Hero text
        const text1 = "Hi, I'm Tanikaiselvan G";
        const text2 = "Fullstack Developer | MERN enthusiast";

        // Clear the text initially
        if (heading1Ref.current) heading1Ref.current.textContent = "";
        if (heading2Ref.current) heading2Ref.current.textContent = "";

        // First line typewriting
        const chars1 = text1.split("");
        chars1.forEach((char, index) => {
            gsap.to(heading1Ref.current, {
                duration: 0.05,
                delay: index * 0.05,
                onStart: () => {
                    if (heading1Ref.current) {
                        heading1Ref.current.textContent += char;
                    }
                }
            });
        });

        // Second line typewriting (starts after first line completes)
        const chars2 = text2.split("");
        const firstLineDelay = chars1.length * 0.05 + 0.3;
        chars2.forEach((char, index) => {
            gsap.to(heading2Ref.current, {
                duration: 0.05,
                delay: firstLineDelay + index * 0.05,
                onStart: () => {
                    if (heading2Ref.current) {
                        heading2Ref.current.textContent += char;
                    }
                }
            });
        });
    }, []);

    return (
        <section id="hero" className="mt-6 flex items-center md:items-start justify-center px-4 py-20 md:py-0 md:pt-38 lg:pt-30">
            <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Section - Text Content */}
                <div className="text-center md:text-left space-y-3 md:space-y-4">
                    <h1
                        ref={heading1Ref}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0078D4] min-h-[3rem]"
                    >
                        {/* Text will be added by GSAP */}
                    </h1>
                    <p
                        ref={heading2Ref}
                        className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 min-h-[2rem]"
                    >
                        {/* Text will be added by GSAP */}
                    </p>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-400 italic">
                        Experienced in building scalable web applications with modern tech frameworks
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-5 mt-4">
                        <a
                            href="#projects"
                            className="inline-block text-base sm:text-lg md:text-lg lg:text-xl text-white underline underline-offset-4 hover:text-[#0078D4] transition-colors duration-300"
                        >
                            View my works →
                        </a>
                        <span className="text-white text-xl">|</span>
                        <a
                            href="https://www.linkedin.com/in/tanikaiselvan-g/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:opacity-80 transition-opacity duration-300"
                            aria-label="LinkedIn Profile"
                        >
                            <svg
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                fill="white"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <span className="text-white text-xl">|</span>
                        <a
                            href="https://leetcode.com/u/user9445lp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:opacity-80 transition-opacity duration-300"
                            aria-label="LeetCode Profile"
                        >
                            <svg
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                fill="white"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Section - Profile Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        {/* Solid border segments (0-90deg and 180-270deg) */}
                        <div className="absolute inset-0 rounded-full" style={{
                            border: '5px solid #87CEEB',
                            clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 100%, 0% 100%, 0% 50%)'
                        }}></div>

                        {/* Dotted border segments (90-180deg and 270-360deg) */}
                        <div className="absolute inset-0 rounded-full" style={{
                            border: '5px dotted #87CEEB',
                            clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%, 50% 50%, 0% 50%, 0% 0%, 50% 0%)'
                        }}></div>

                        {/* Image container */}
                        <div className="absolute inset-[5px] rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                            <Image
                                src="/profile.png"
                                alt="Tanikaiselvan G"
                                width={320}
                                height={320}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'center 20%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
