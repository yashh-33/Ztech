// src/components/CareerSection.jsx (Matching the Exact Image)

import React from 'react';
import { Star, TrendingUp, Zap } from 'lucide-react'; 
import { Link } from "react-router-dom";


// --- Data Structure matching the design ---
const coursesData = [
    { 
        id: 1, type: 'iOS Development', subtitle: '(Swift)', price: '12,999', 
        tag: 'POPULAR', rating: '4.9', enrollments: '850+', 
        image: 'https://assets.techrepublic.com/uploads/2018/10/istock-846843314-1.jpg', // Placeholder image
        details: [
            '10 Weeks • 3-4 hrs/week', 
            'Industry Certificate', 
            '3 Real Projects'
        ],
        pills: ['SwiftUI', 'Core Data', 'App Store', 'Job Ready'],
        buttonColor: 'bg-red-500 hover:bg-red-600' // Orange/Red Button
    },
    { 
        id: 2, type: 'Android', subtitle: '(Kotlin/Java)', price: '11,999', 
        tag: null, rating: '4.6', enrollments: '720+', 
        image: 'data:image/jpeg;base64,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', // Placeholder image
        details: [
            '12 Weeks • 3-4 hrs/week', 
            'Google Certificate', 
            '4 Portfolio Apps'
        ],
        pills: ['Kotlin', 'Firebase', 'Jetpack', 'Play Store'],
        buttonColor: 'bg-green-500 hover:bg-green-600' // Green Button
    },
    { 
        id: 3, type: 'React Native', subtitle: null, price: '9,999', 
        tag: 'NEW', rating: '4.7', enrollments: '650+', 
        image: 'data:image/jpeg;base64,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', // Placeholder image
        details: [
            '8 Weeks • 2-3 hrs/week', 
            'Meta Certificate', 
            '2 Cross Platform Apps'
        ],
        pills: ['React', 'Expo', 'Navigation', 'API Integration'],
        buttonColor: 'bg-blue-500 hover:bg-blue-600' // Blue Button
    },
    { 
        id: 4, type: 'Full-Stack Web Dev', subtitle: null, price: '15,999', 
        tag: null, rating: '4.9', enrollments: '450+', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyX7vRSApq9Hogv5ZksrnuvNtkOUz7j3DKQ&s', // Placeholder image
        details: [
            '16 Weeks • 4-5 hrs/week', 
            'Full-Stack Certificate', 
            '5 Complete Projects'
        ],
        pills: ['MERN Stack', 'Next.js', 'AWS Deploy', 'Job-Assist'],
        buttonColor: 'bg-purple-600 hover:bg-purple-700' // Purple Button
    },
];

// Reusable Course Card Component
const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl">
            {/* Top Image & Overlay */}
            <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                    src={course.image} 
                    alt={course.type} 
                    className="w-full h-full object-cover rounded-t-xl" 
                />
                
                {/* Rating & Enrollments Badge (Top Left) */}
                <div className="absolute top-3 left-3 bg-black/50 text-white text-xs py-1 px-2 rounded-full flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor"/>
                    {course.rating} | {course.enrollments} Students
                </div>

                {/* Tag (POPULAR/NEW) Badge (Top Right) */}
                {course.tag && (
                    <span 
                        className={`absolute top-3 right-3 text-white text-xs font-bold py-1 px-3 rounded-full 
                            ${course.tag === 'POPULAR' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                        {course.tag}
                    </span>
                )}
            </div>
            
            {/* Card Content */}
            <div className="p-4 pt-6 text-left">
                {/* Title and Price */}
                <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold text-gray-800 leading-tight">
                        {course.type} <span className="text-sm font-normal text-gray-500">{course.subtitle}</span>
                    </h3>
                    <span className="text-xl font-extrabold text-red-600">
                        ₹{course.price}
                    </span>
                </div>
                
                {/* Description */}
                <p className="text-xs text-gray-500 mb-4 h-10 overflow-hidden">
                    Master native iOS app development with Swift... (Full text from image)
                </p>

                {/* Course Details (Duration, Certificate, Projects) */}
                <div className="space-y-2 mb-6 text-sm">
                    {course.details.map((detail, i) => (
                        <div key={i} className="flex items-center text-gray-600">
                            <Zap className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 opacity-70" />
                            <span>{detail}</span>
                        </div>
                    ))}
                </div>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6 border-t border-gray-100 pt-4">
                    {course.pills.map((pill, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 py-1 px-3 rounded-full font-medium">
                            {pill}
                        </span>
                    ))}
                </div>

                {/* Enroll Button (Unique Gradient Colors) */}
                <Link to="/enroll-course">
                <button 
                    className={`w-full py-3 text-white font-bold rounded-lg transition duration-300 ${course.buttonColor} shadow-lg hover:shadow-xl`}>
                    Enroll Now
                </button>
                </Link>
            </div>
        </div>
    );
};


const CareerSection = () => {
    return (
        <section id="career" className="py-20 px-4 text-center bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Small "Professional Training" Pill (Top Center) */}
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold py-1 px-4 rounded-full mb-4">
                    Professional Training
                </span>
                
                {/* Main Title (Blue Accent) */}
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                    Launch Your Tech Career 
                    <span className="text-blue-600 block">With Industry Expertise</span>
                </h2>
                
                {/* Subtitle */}
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                    Master in-demand skills with our comprehensive, project-based courses designed by industry professionals for aspiring developers and software engineers.
                </p>
                
                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coursesData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerSection;