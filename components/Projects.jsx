"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
    const [expandedCard, setExpandedCard] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Chatbot Dev",
            image: "/chatbotdev-thumbnail.png",
            githubLink: "https://github.com/Tanikaigv/Chatbot_dev",
            techStack: ["Next.js", "FastAPI", "Pinecone", "RAG", "Groq API"],
            description: "A SaaS-based chatbot generation platform that allows users to create custom chatbots using their own website or document data. The system uses RAG architecture to retrieve relevant information and generate accurate responses. Chatbots can be embedded into websites and integrated with platforms like Facebook pages for real-time interaction.",
            outcome: "Enabled automated customer interaction through embeddable AI chatbots while ensuring secure domain validation and scalable response generation."
        },
        {
            id: 2,
            title: "BookMyShow Clone",
            image: "/bookmyshowclone-thumbnail.png",
            githubLink: "https://github.com/Tanikaigv/book-my-show-clone",
            techStack: ["React.js", "TMDB API"],
            description: "A full-stack application that allows users to browse movies, view show details. Movie data is dynamically fetched using the TMDB API, and the platform provides a responsive interface with reusable components.",
            outcome: "Successfully replicated bookmyshow with limited features enabled, experienced in integration of API for dynamic movie datas."
        },
        {
            id: 3,
            title: "Book Record Management System",
            image: "/bookrecordmanagementsystem-thumbnail.png",
            githubLink: "https://github.com/Tanikaigv/Book_Record_Management_System",
            techStack: ["Node.js", "Express.js", "MongoDB"],
            description: "A backend-driven application developed to manage book and user records efficiently through RESTful APIs. The system supports CRUD operations for maintaining library data and ensures structured data handling.",
            outcome: "Improved backend API design skills and demonstrated effective management of data operations using REST principles."
        },
        {
            id: 4,
            title: "Tasky — Task Management Application",
            image: "/taskyappln-thumbnail.png",
            githubLink: "https://github.com/Tanikaigv/JS_Tasky_Application",
            techStack: ["HTML", "CSS", "JavaScript"],
            description: "A frontend task management application that allows users to create, update, search, and delete tasks with optional image uploads. Tasks are displayed as cards in the interface, and all data is stored locally using browser LocalStorage without requiring a backend or database.",
            outcome: "Strengthened practical understanding of pure JavaScript DOM manipulation, CRUD operations, and the behavior and management of browser LocalStorage for client-side data persistence."
        },
        {
            id: 5,
            title: "Zomato Landing Page Clone",
            image: "/zomato-thumbnail.png",
            githubLink: "https://github.com/Tanikaigv/Zomato_landing_page_clone",
            techStack: ["HTML", "CSS"],
            description: "A static clone of the Zomato landing page focusing on recreating layout structure, visual styling, and responsive design using only HTML and CSS.",
            outcome: "Developed strong foundational understanding of HTML structure, layout techniques, and styling elements using CSS to replicate real-world UI designs."
        }
    ];


    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-[1400px] mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Projects
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={500}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="bg-[#1a1a1d] rounded-lg overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col">
                                {/* Image Section */}
                                <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        priority
                                        className="object-cover"
                                        style={{ position: 'absolute', height: '100%', width: '100%' }}
                                    />
                                    {/* GitHub Link Overlay */}
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 hover:bg-black hover:opacity-60 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                                    >
                                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View on GitHub →
                                        </span>
                                    </a>
                                </div>

                                {/* Project Title */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        {project.title}
                                    </h3>

                                    {/* View Details Button */}
                                    <button
                                        onClick={() => toggleExpand(project.id)}
                                        className="w-full py-2 px-4 cursor-pointer bg-transparent border border-[#4a9eff] text-[#87ceeb] rounded-md hover:bg-[#4a9eff] hover:text-white transition-all duration-300 text-sm font-medium"
                                    >
                                        {expandedCard === project.id ? "Hide Details" : "View Details"}
                                    </button>

                                    {/* Expandable Details Section */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCard === project.id
                                            ? "max-h-[500px] opacity-100 mt-4"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="space-y-4">
                                            {/* Tech Stack */}
                                            <div>
                                                <h4 className="text-[#87ceeb] font-semibold mb-2">Tech Stack:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-[#262629] text-white text-xs rounded-full border border-gray-700"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div>
                                                <h4 className="text-[#87ceeb] font-semibold mb-2">Description:</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Outcome */}
                                            <div>
                                                <h4 className="text-[#87ceeb] font-semibold mb-2">Outcome:</h4>
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {project.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}