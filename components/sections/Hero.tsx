'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 font-semibold text-lg uppercase tracking-widest">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="gradient-text">Vishal Thakur</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Full Stack Developer & UI/UX Designer creating beautiful, functional digital experiences
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                View My Work
              </button>
              <button className="btn-secondary">
                Get in Touch
              </button>
            </div>
          </div>

          {/* 3D Scene Placeholder */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl glass flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
            <div className="relative z-10 text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full glass flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full animate-float" />
              </div>
              <p className="text-gray-400">3D Scene Loading...</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400 uppercase tracking-widest">Scroll to explore</p>
          <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
