// src/pages/HomePage.jsx

import React from 'react';
import HeroSection from '../components/HeroSection';
import CardsSection from '../components/CardsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CareerSection from '../components/CareerSection';
import StudentsChoiceSection from '../components/StudentsChoiceSection';
import FeaturesSection from '../components/FeaturesSection';
import ProcessSection from '../components/ProcessSection';
import ContactFormSection from '../components/ContactFormSection';

const HomePage = () => {
    return (
        <>
            {/* Assemble all your single-page content here */}
            <HeroSection />
            <main>
                <CardsSection />
                <WhyChooseSection />
                <CareerSection />
                <StudentsChoiceSection />
                <FeaturesSection />
                <ProcessSection />
                <ContactFormSection />
            </main>
        </>
    );
};
export default HomePage;