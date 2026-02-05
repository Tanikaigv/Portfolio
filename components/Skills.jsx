"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Skills() {
    const logosRef = useRef([]);

    const skills = [
        { name: 'JavaScript', image: '/javascript.png', position: { top: '10%', left: '35%' } },
        { name: 'React', image: '/react.png', position: { top: '15%', left: '65%' } },
        { name: 'Next.js', image: '/Next js.png', position: { top: '25%', left: '10%' } },
        { name: 'HTML', image: '/html.png', position: { top: '25%', left: '85%' } },
        { name: 'CSS', image: '/css.png', position: { top: '55%', left: '18%' } },
        { name: 'Tailwind', image: '/tailwind.png', position: { top: '60%', left: '80%' } },
        { name: 'Express.js', image: '/Express js.png', position: { top: '85%', left: '25%' } },
        { name: 'MongoDB', image: '/mongo-db.png', position: { top: '80%', left: '60%' } },
        { name: 'Java', image: '/java.png', position: { top: '45%', left: '50%' } },
    ];

    useEffect(() => {
        logosRef.current.forEach((logo) => {
            if (!logo) return;

            gsap.to(logo, {
                y: gsap.utils.random(-50, 50), // more vertical movement
                x: gsap.utils.random(-50, 50), // more horizontal movement
                duration: gsap.utils.random(1, 1.5), // faster motion
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });
    }, []);

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Skilled In
                </h2>

                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mt-20">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => (logosRef.current[index] = el)}
                            className="absolute transition-all duration-300 hover:scale-110 will-change-transform"
                            style={{
                                top: skill.position.top,
                                left: skill.position.left,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <div className="relative w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
                                <Image
                                    src={skill.image}
                                    alt={skill.name}
                                    fill
                                    className="object-contain filter hover:brightness-110 transition-all"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
