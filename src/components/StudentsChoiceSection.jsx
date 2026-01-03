import React from 'react';
import { Briefcase, Play, Award, UserCheck, Star } from 'lucide-react';

// --- Data for Top Statistics ---
const statsData = [
    { 
        icon: Briefcase, 
        title: '85% Job Placement', 
        description: 'Our graduates get hired within 3 months', 
        iconBg: 'bg-blue-500/20 text-blue-500' // Blue icon on pale background
    },
    { 
        icon: Play, 
        title: 'Live Projects', 
        description: 'Build real-world applications with mentorship', 
        iconBg: 'bg-green-500/20 text-green-500' // Green icon on pale background
    },
    { 
        icon: Award, 
        title: 'Industry Certificates', 
        description: 'Recognized certifications from tech leaders', 
        iconBg: 'bg-orange-500/20 text-orange-500' // Orange icon on pale background
    },
    { 
        icon: UserCheck, 
        title: 'Expert Mentors', 
        description: 'Learn from Google, Apple, Microsoft engineers', 
        iconBg: 'bg-fuchsia-500/20 text-fuchsia-500' // Fuchsia icon on pale background
    },
];

// --- Data for Testimonials ---
const testimonialsData = [
    {
        initial: 'R', name: 'Raj Patel', role: 'iOS Developer at TCS', 
        quote: '"Landed my dream job at TCS after completing the iOS course. The hands-on projects made all the difference!"',
        bgColor: 'bg-orange-100/50 text-orange-600' // Pale Orange/Red
    },
    {
        initial: 'P', name: 'Priya Sharma', role: 'Full-Stack at Infosys', 
        quote: '"From zero coding experience to full-stack developer in 4 months. Amazing mentors and practical learning!"',
        bgColor: 'bg-green-100/50 text-green-600' // Pale Green
    },
    {
        initial: 'A', name: 'Arjun Singh', role: 'React Native Freelancer', 
        quote: '"Now earning ₹80k/month as a freelancer. The React Native course gave me the confidence to start my own business!"',
        bgColor: 'bg-blue-100/50 text-blue-600' // Pale Blue
    },
];

// Reusable Testimonial Card Component
const TestimonialCard = ({ data }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between">
        <div className="flex items-center mb-4">
            {/* Initial Circle */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 ${data.bgColor}`}>
                {data.initial}
            </div>
            <div>
                <p className="text-sm font-bold text-gray-800">{data.name}</p>
                <p className="text-xs text-gray-500">{data.role}</p>
            </div>
        </div>
        
        {/* Quote */}
        <p className="text-sm text-gray-700 italic mb-4">
            {data.quote}
        </p>
        
        {/* Star Rating */}
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-0.5" />
            ))}
        </div>
    </div>
);


const StudentsChoiceSection = () => {
    return (
        // Pale Pink/Purple Gradient Background
        <section className="py-20 px-4 bg-gradient-to-b from-white to-fuchsia-50/50">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Title and Subtitle */}
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Our Students Choose Us?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center">
                    Join thousands of successful developers who transformed their careers with our expert-led training programs.
                </p>

                {/* --- 1. Top Row: Statistics and Icons --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
                    {statsData.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-2">
                            {/* Icon Box: Rounded square (md:w-20 md:h-20) */}
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-4 ${stat.iconBg}`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            
                            {/* Title (The Main Statistic) */}
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{stat.title}</h3>
                            
                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-snug">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* --- 2. Bottom Row: Testimonials --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} data={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentsChoiceSection;