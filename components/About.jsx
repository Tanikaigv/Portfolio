export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-32 md:pt-44 pb-20">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Who am I ?</h2>

                {/* Tagline */}
                <p className="text-center text-[#45AFFF] italic text-base md:text-lg mb-12 mx-auto max-w-3xl ">
                    Mechanical Engineering student aspiring to build a career in software development, currently gaining hands-on experience by developing scalable web and AI-powered applications using modern technologies.
                </p>

                {/* About Content - Bullet Points */}
                <div className="bg-[#262629] opacity-80 rounded-lg shadow-lg shadow-[#0078D4]/20 p-6 md:p-8 mb-10">
                    <ul className="space-y-4 text-gray-200">
                        <li className="flex items-start">
                            <span className="text-[#0078D4] mr-3 mt-1 text-xl">•</span>
                            <span className="text-base md:text-lg leading-relaxed">
                                I'm currently pursuing <span className="font-semibold text-white">B.E. Mechanical Engineering</span> at Sri Eshwar College of Engineering (2022–2026), while actively transitioning my career toward software development.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#0078D4] mr-3 mt-1 text-xl">•</span>
                            <span className="text-base md:text-lg leading-relaxed">
                                I work as a <span className="font-semibold text-white">Full Stack Developer</span>, building modern web applications using current technologies and focusing on scalable real-world solutions.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#0078D4] mr-3 mt-1 text-xl">•</span>
                            <span className="text-base md:text-lg leading-relaxed">
                                During my internship, I had the opportunity to work on <span className="font-semibold text-white">production-level applications</span>, contributing to real projects and development workflows.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#0078D4] mr-3 mt-1 text-xl">•</span>
                            <span className="text-base md:text-lg leading-relaxed">
                                I have experience building <span className="font-semibold text-white">REST APIs</span> and integrating <span className="font-semibold text-white">AI-powered features</span> into applications to create smarter and more useful solutions.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#0078D4] mr-3 mt-1 text-xl">•</span>
                            <span className="text-base md:text-lg leading-relaxed">
                                I genuinely enjoy solving real-world problems through software and continuously improving my skills by building practical applications.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <a
                        href="https://drive.google.com/file/d/1EiE-k4NhqrhjyTE9QALI9M6-iXoUNS9H/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-[#0078D4] text-[#0078D4] bg-transparent rounded-lg font-semibold text-base md:text-lg hover:bg-[#3399E6] hover:text-white transition-all duration-300 inline-block text-center"
                    >
                        View Resume
                    </a>
                    <a
                        href="#contact"
                        className="text-[#3399E6] text-base md:text-lg font-medium hover:underline underline-offset-4 transition-all duration-300"
                    >
                        Reach me →
                    </a>
                </div>
            </div>
        </section>
    );
}
