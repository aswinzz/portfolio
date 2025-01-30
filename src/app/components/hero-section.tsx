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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Aswin VB</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Building scalable web applications with passion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] relative">
            <Image
              src="/me.png"
              alt="Aswin VB"
              width={280}
              height={280}
              className="rounded-full object-cover shadow-lg"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-50" />
          </div>
        </div>
      </div>
      <BackgroundBeams 
        className="absolute top-0 left-0 w-full h-full opacity-50"
      />
    </div>
  );
} 