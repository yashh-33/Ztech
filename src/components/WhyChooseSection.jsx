// src/components/WhyChooseSection.jsx (Matching the Exact Image)

import React from 'react';
import { Award, Clock, ShieldCheck, Target } from 'lucide-react'; // Using icons that match the visual

const reasonsData = [
    {
        icon: Award,
        title: 'Proven Expertise',
        description: '5+ years of delivering successful projects',
        iconBg: 'bg-gradient-to-br from-orange-500 to-red-500' // Orange-Red gradient
    },
    {
        icon: Clock,
        title: 'Timely Delivery',
        description: '98% on-time project completion rate',
        iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500' // Blue-Cyan gradient
    },
    {
        icon: ShieldCheck,
        title: 'Quality Assured',
        description: 'Rigorous testing and code reviews',
        iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500' // Green-Emerald gradient
    },
    {
        icon: Target,
        title: 'Results-Driven',
        description: 'Focus on measurable business outcomes',
        iconBg: 'bg-gradient-to-br from-purple-500 to-fuchsia-500' // Purple-Fuchsia gradient
    },
];

const WhyChooseSection = () => {
    return (
        // Outer Container for the entire section with padding to match the image
        <section className="py-10 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto p-8 lg:p-12 rounded-3xl shadow-lg 
                            bg-gradient-to-br from-white to-orange-50"> {/* Soft pale orange gradient background */}

                {/* Section Title and Subtitle */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Why Choose Perfection4U?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 text-center">
                    We deliver excellence through expertise, innovation, and commitment to your success.
                </p>

                {/* Four Reason Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasonsData.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Icon Box: Rounded square with specific gradient background */}
                            <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6 
                                            text-white shadow-md ${reason.iconBg}`}>
                                <reason.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                            <p className="text-sm text-gray-600 px-2">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;