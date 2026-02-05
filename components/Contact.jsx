import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="flex items-center justify-center py-16 pb-24">
            <div className="max-w-4xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Reach me through,
                </h2>

                {/* Email - First on Mobile */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 mb-8 text-gray-300">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <HiMail size={28} className="text-[#87ceeb]" />
                        <a
                            href="mailto:tanikaigv05@gmail.com"
                            className="text-lg md:text-xl font-medium hover:text-[#4a9eff] transition-all duration-300"
                        >
                            tanikaigv05@gmail.com
                        </a>
                    </div>

                    {/* Separator - Hidden on Mobile */}
                    <span className="hidden md:inline text-2xl text-gray-500 mx-2">|</span>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhone size={24} className="text-[#87ceeb]" style={{ transform: 'scaleX(-1)' }} />
                        <span className="text-lg md:text-xl font-medium">+91 6381489330</span>
                    </div>
                </div>

                {/* LinkedIn and GitHub - Second Line */}
                <div className="flex justify-center items-center gap-12 mb-10">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/tanikaiselvan-g/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#87ceeb] hover:text-[#4a9eff] transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={60} />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Tanikaigv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#87ceeb] hover:text-[#4a9eff] transition-all duration-300 transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub size={60} />
                    </a>
                </div>

                {/* Hire Me Button - Third Line */}
                <div className="flex justify-center">
                    <a
                        href="https://drive.google.com/file/d/1EiE-k4NhqrhjyTE9QALI9M6-iXoUNS9H/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-[#4a9eff] text-[#87ceeb] bg-transparent rounded-lg font-semibold text-lg hover:bg-[#4a9eff] hover:text-white hover:scale-105 transition-all duration-300"
                    >
                        Hire Me !
                    </a>
                </div>
            </div>
        </section>
    );
}
