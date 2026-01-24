import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


// --- Data for the Carousel Slides ---
const heroSlides = [
    {
        id: 0,
        subtitle1: 'UI/UX Design',
        subtitle2: 'Beautiful & User-Friendly Interfaces',
        // IMPORTANT: Replace with your actual image paths in the public folder
        image: 'https://www.shutterstock.com/image-photo/web-uiux-design-development-concept-260nw-2523833227.jpg', 
    },
    {
        id: 1,
        subtitle1: 'Mobile App Development',
        subtitle2: 'iOS & Android Apps',
        image: 'https://png.pngtree.com/thumb_back/fh260/background/20230627/pngtree-conceptualization-of-mobile-app-development-and-software-development-in-3d-rendering-image_3685135.jpg', 
    },
    {
        id: 2,
        subtitle1: 'Software Development',
        subtitle2: 'Modern Web Solutions & APIs',
        image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/Software-Development-Models.jpg?tx=w_1920,q_auto', 
    },
    {
        id: 3, // <-- NEW SLIDE ADDED HERE
        subtitle1: 'Professional Training',
        subtitle2: 'Hands-on Learning & Career Growth',
        image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg', // Placeholder for the new image
    },
];

const HeroSection = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isFading, setIsFading] = useState(false); // State to control fade animation

    // Constants for styling
    const PRIMARY_BUTTON_STYLE = 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600'; 
    const SECONDARY_BUTTON_STYLE = 'bg-transparent border-2 border-white hover:bg-white/10';

    // useEffect for the 5-second automatic slide transition
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true); // 1. Start fade-out
            
            const fadeTimeout = setTimeout(() => {
                // Cycle through all 4 slides (0, 1, 2, 3, 0...)
                setCurrentSlideIndex((prevIndex) => 
                    (prevIndex + 1) % heroSlides.length 
                );
                setIsFading(false); // 3. Start fade-in
            }, 500); 

            return () => clearTimeout(fadeTimeout); 
        }, 5000); // 5000ms (5 seconds) delay for each slide

        return () => clearTimeout(timer); // Cleanup outer timeout
    }, [currentSlideIndex]); 

    const currentSlide = heroSlides[currentSlideIndex];

    return (
        <header 
            className="relative min-h-[75vh] md:h-screen flex items-center justify-center text-center text-white 
                       bg-cover bg-center transition-all duration-1000 ease-in-out" 
            style={{ 
                // Dynamically change the background image path
                backgroundImage: `url('${currentSlide.image}')`, 
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Dark Overlay with transition for background image effect */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-red-900/40 
                            transition-opacity duration-1000`}>
            </div>
            
            {/* Responsive Content Container with fade effect */}
            <div className={`relative z-10 max-w-4xl px-6 py-16 md:py-0 
                            transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}> 
                
                {/* Dynamic Small Subtitle Block */}
                <div className="mb-3 md:mb-4">
                    <p className="text-orange-400 text-sm md:text-base font-medium transition-colors duration-500">
                        {currentSlide.subtitle1}
                    </p>
                    <p className="text-white text-xs md:text-sm opacity-90 transition-opacity duration-500">
                        {currentSlide.subtitle2}
                    </p>
                </div>
                
                {/* Static Main Title Block - Using your specific font sizes */}
                <h1 className="font-bold mb-4">
                    {/* Line 1 */}
                    <span className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl block mb-1">
                        Empowering Your
                    </span>
                    
                    {/* Line 2: Gradient Text */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-extrabold text-stroke block 
                    font-bold text-5xl sm:text-4xl lg:text-8xl xl:text-6xl mb-10">
                        Digital Journey
                    </span>
                </h1>
                
                {/* Subtitle text */}
                <p className="text-sm md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto opacity-90">
                    From mobile apps to web development and professional training – we build solutions that perform and careers that thrive.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-6 ">
                    <Link to="/getstarted">
                    <Link className={`py-3 sm:py-3.5 px-6 sm:px-8 text-base md:text-lg font-semibold rounded-lg transition duration-300 ${PRIMARY_BUTTON_STYLE} text-white shadow-xl`}>
                        Get Started Today
                    </Link>
                    </Link>
                    <Link to="/android-development">
                    <a className={`py-3 sm:py-3.5 px-6 sm:px-8 text-base md:text-lg font-semibold rounded-lg transition duration-300 ${SECONDARY_BUTTON_STYLE} text-white`}>
                        Explore Courses
                    </a>
                    </Link>
                </div>

                {/* Subtle Scroll Hint */}
                {/* <p className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 text-xs opacity-60 lg:mt-200">
                    Scroll to explore
                </p>               */}
            </div>
            {/* Subtle Scroll Hint */}
                <p className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 text-xs opacity-60 lg:mt-10">
                    Scroll to explore
                </p> 
            
            {/* Style block for text shadow/stroke effect */}
            <style jsx global>{`
                .text-stroke {
                    text-shadow: 0 0 10px rgba(255, 100, 0, 0.5);
                }
            `}</style>
        </header>
    );
};

export default HeroSection;