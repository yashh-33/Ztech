// src/pages/AboutUsPage.jsx

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; // Assuming you create a Footer component

const AboutUsPage = () => {
    return (
        <div className="min-h-screen">
            <NavBar />
            <main className="py-20 px-4 max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-blue-600 mb-6">About Perfection U</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    We are dedicated to empowering the next generation of digital professionals through expert-led training and real-world project experience. Our mission is to transform your ideas into digital reality and launch your successful tech career.
                </p>
                {/* You will add the full content for your About Us page here */}
                <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                    <ul className="list-disc list-inside text-left inline-block">
                        <li>Excellence in Education</li>
                        <li>Commitment to Results</li>
                        <li>Innovation and Agility</li>
                    </ul>
                </div>
            </main>
            {/* The Footer component will go here (create Footer.jsx for cleaner code) */}
        </div>
    );
};

export default AboutUsPage;