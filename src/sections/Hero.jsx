// import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 480 }); // Standard mobile breakpoint
    const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 }); // Tablets & large phones
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // Standard tablets

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
            {/* 3D Canvas Background */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                scale={sizes.deskScale}
                                rotation={[0, -Math.PI, 0]} />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>
                    </Suspense>
                </Canvas>
            </div>

            {/* Gradient Overlay */}
            <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full pt-20 c-space">
                <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white/80">Welcome to my digital space</span>
                    </div>

                    {/* Main Heading */}
                    <div>
                        <p className="text-sm sm:text-base font-medium text-white/60 uppercase tracking-widest mb-4">
                            Full Stack Developer & UI/UX Designer
                        </p>
                        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-4">
                            Vishal <br /> Thakur
                        </h1>
                        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
                            I create elegant, performant digital experiences that solve real problems and delight users
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <a href="#projects" className="group">
                            <Button name="View My Work" isBeam containerClass="sm:w-fit" />
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-medium backdrop-blur-sm">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                <div className="animate-bounce">
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
