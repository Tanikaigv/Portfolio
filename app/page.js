"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Fade-in animation for all sections on scroll
    const sections = gsap.utils.toArray("section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Header Section - Fixed at top */}
      <header className="fixed top-0 left-0 right-0 bg-transparent z-50 pt-6 px-4">
        <nav className="max-w-3xl mx-auto px-6 py-4 bg-[#262629] opacity-80 rounded-full">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center gap-6 lg:gap-6 xl:gap-10">
            <li>
              <a
                href="#about"
                className="px-2 py-2 text-[1.1500rem] text-white hover:underline underline-offset-4 transition-all duration-300 inline-block"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="px-4 py-2 text-[1.1500rem] text-white hover:underline underline-offset-4 transition-all duration-300 inline-block"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="px-4 py-2 text-[1.1500rem] text-white hover:underline underline-offset-4 transition-all duration-300 inline-block"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="px-4 py-2 text-[1.1500rem] text-white hover:underline underline-offset-4 transition-all duration-300 inline-block"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 text-[1.1500rem] text-white hover:underline underline-offset-4 transition-all duration-300 inline-block"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex justify-between items-center">
            <h2 className="text-white text-xl font-semibold">Portfolio</h2>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4">
            <ul className="bg-[#262629] rounded-2xl py-4 px-6 space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[1.0625rem] text-white hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[1.0625rem] text-white hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[1.0625rem] text-white hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[1.0625rem] text-white hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[1.0625rem] text-white hover:underline underline-offset-4 transition-all duration-300 block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
