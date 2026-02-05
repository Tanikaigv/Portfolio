import Image from "next/image";

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* Left Section - Image and Visit Site */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6">
                        {/* Image Placeholder */}
                        <div className="w-full max-w-sm lg:max-w-none aspect-square bg-gradient-to-br from-[#262629] to-[#1a1a1c] rounded-xl flex items-center justify-center border-2 border-[#0078D4]/30 shadow-lg shadow-[#0078D4]/10 overflow-hidden p-6">
                            <Image
                                src="/appxcess_technologies_logo.jpg"
                                alt="Appxcess Technologies Logo"
                                width={400}
                                height={400}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Visit Site Link */}
                        <a
                            href="https://appxcess.com/"
                            className="text-[#3399E6] text-lg font-medium hover:underline underline-offset-4 transition-all duration-300"
                        >
                            Visit site
                        </a>
                    </div>

                    {/* Right Section - Scrollable Content */}
                    <div className="lg:col-span-8 flex flex-col">
                        {/* Scrollable Content Container */}
                        <div className="bg-[#262629]/80 rounded-xl p-6 md:p-8 shadow-lg shadow-[#0078D4]/10 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {/* Job Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-[#0078D4]/30 pb-4">
                                Full Stack Engineer Intern — <span className="text-[#3399E6]">Appxcess Technologies</span>
                            </h3>

                            {/* Introduction Paragraph */}
                            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                                During my 9-month internship at Appxcess Technologies, I worked on multiple real-time full stack applications, contributing to both frontend and backend development in production environments.
                            </p>

                            {/* Bullet Points */}
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start">
                                    <span className="text-[#3399E6] mr-3 mt-1 text-xl flex-shrink-0">•</span>
                                    <span className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        I gained hands-on experience in building <span className="font-semibold text-white">scalable applications</span>, developing <span className="font-semibold text-white">RESTful APIs</span>, and ensuring seamless integration between frontend interfaces and backend services.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#3399E6] mr-3 mt-1 text-xl flex-shrink-0">•</span>
                                    <span className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        I also worked on implementing <span className="font-semibold text-white">AI-powered features</span> within applications, including integrating <span className="font-semibold text-white">Retrieval-Augmented Generation (RAG)</span> pipelines to enable intelligent chatbot responses based on custom data sources.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#3399E6] mr-3 mt-1 text-xl flex-shrink-0">•</span>
                                    <span className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        Additionally, I integrated third-party services such as <span className="font-semibold text-white">Meta APIs</span> to enable automation and cross-platform communication, including connecting chatbot solutions directly with Facebook pages for real-time user interaction.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#3399E6] mr-3 mt-1 text-xl flex-shrink-0">•</span>
                                    <span className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        Through this experience, I strengthened my understanding of <span className="font-semibold text-white">secure authentication systems</span>, <span className="font-semibold text-white">API workflows</span>, <span className="font-semibold text-white">production deployment practices</span>, and collaborative development in real-world projects.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Certificate Link */}
                        <a
                            href="https://drive.google.com/file/d/1djLm8G82Jxscx7K9P1foGfeaH6iuKbaQ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 text-[#3399E6] text-base text-center md:text-lg font-medium hover:underline underline-offset-4 transition-all duration-300"
                        >
                            View Completion Acknowledgement →
                        </a>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1a1a1c;
                    border-radius: 4px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #0078D4;
                    border-radius: 4px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #3399E6;
                }
            `}</style>
        </section>
    );
}
