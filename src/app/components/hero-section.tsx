"use client";

import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Hi, I&apos;m <span className="text-blue-500 relative inline-block transform rotate-1">Aswin VB</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              Building scalable web applications with passion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-blue-500 text-white font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto bg-white font-bold py-3 px-8 border-2 border-black text-blue-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] relative">
            <div className="relative w-full h-full">
              <div className="absolute top-1 left-1 w-full h-full bg-black rounded-full"></div>
              <div className="relative bg-white p-1 rounded-full border-2 border-black">
                <Image
                  src="/me.png"
                  alt="Aswin VB"
                  width={280}
                  height={280}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams 
        className="absolute top-0 left-0 w-full h-full opacity-50"
      />
    </div>
  );
} 