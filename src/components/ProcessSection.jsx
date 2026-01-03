// src/components/ProcessSection.jsx (Matching the Exact Image)

import React from 'react';
import { Lightbulb, Layout, Code, Rocket } from 'lucide-react'; 

const processSteps = [
    { 
        id: 1, 
        icon: Lightbulb, 
        title: 'Discovery & Planning', 
        description: 'Understanding your vision, requirements, and creating a detailed roadmap', 
        iconBg: 'bg-blue-500', 
        iconColor: 'text-white'
    },
    { 
        id: 2, 
        icon: Layout, 
        title: 'Design & Prototyping', 
        description: 'Creating beautiful, user-centered designs and interactive prototypes', 
        iconBg: 'bg-purple-500', 
        iconColor: 'text-white'
    },
    { 
        id: 3, 
        icon: Code, 
        title: 'Development & Testing', 
        description: 'Agile development with continuous testing and quality assurance', 
        iconBg: 'bg-green-500', 
        iconColor: 'text-white'
    },
    { 
        id: 4, 
        icon: Rocket, 
        title: 'Launch & Support', 
        description: 'Deployment, monitoring, and ongoing support for your success', 
        iconBg: 'bg-orange-500', 
        iconColor: 'text-white'
    },
];

const ProcessSection = () => {
    return (
        // Outer Container: Subtle gray background for separation
        <section className="py-20 px-4 bg-gray-50">
            {/* The main rounded block with the white background */}
            <div className="max-w-6xl mx-auto p-12 rounded-[32px] shadow-2xl bg-white text-center">
                
                {/* Section Title and Subtitle */}
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                    A proven methodology that ensures quality, transparency, and timely delivery
                </p>
                
                {/* Four Step Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {processSteps.map((step) => (
                        <div key={step.id} className="relative flex flex-col items-center px-4">
                            
                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 
                                            ${step.iconBg} ${step.iconColor} shadow-xl`}>
                                <step.icon className="w-12 h-12" />
                            </div>
                            
                            {/* Orange Numbered Bubble (Positioned absolutely next to the icon) */}
                            <div className={`absolute top-0 right-1/2 translate-x-12 sm:right-auto sm:left-1/2 
                                            sm:translate-x-10 w-8 h-8 rounded-full bg-orange-500 text-white font-bold 
                                            flex items-center justify-center text-sm shadow-md`}>
                                {step.id}
                            </div>

                            {/* Title (Bold) */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                            
                            {/* Description (Small and Centered) */}
                            <p className="text-sm text-gray-600 leading-snug">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;