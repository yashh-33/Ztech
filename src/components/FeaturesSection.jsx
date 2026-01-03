// src/components/FeaturesSection.jsx (Matching the Exact Image)

import React from 'react';
import { Monitor, Smartphone, Database, Cloud } from 'lucide-react'; 

const stackData = [
    { 
        icon: Monitor, 
        title: 'Frontend', 
        tech: ['React, Next.js, Vue.js', 'TypeScript, JavaScript ES6+', 'Tailwind CSS, Material-UI', 'Framer Motion, GSAP'], 
        iconBg: 'bg-blue-500/10 text-blue-500', // Blue Icon
        border: 'border-blue-200 shadow-blue-500/20' // Blue Border/Shadow
    },
    { 
        icon: Smartphone, 
        title: 'Mobile', 
        tech: ['React Native, Expo', 'Swift, SwiftUI (iOS)', 'Kotlin, Jetpack Compose', 'Firebase, Push Notifications'], 
        iconBg: 'bg-orange-500/10 text-orange-500', // Orange Icon
        border: 'border-orange-200 shadow-orange-500/20' // Orange Border/Shadow
    },
    { 
        icon: Database, 
        title: 'Backend', 
        tech: ['Node.js, Express.js', 'Python, Django, FastAPI', 'MongoDB, PostgreSQL', 'Redis, GraphQL APIs'], 
        iconBg: 'bg-green-500/10 text-green-500', // Green Icon
        border: 'border-green-200 shadow-green-500/20' // Green Border/Shadow
    },
    { 
        icon: Cloud, 
        title: 'Cloud & DevOps', 
        tech: ['AWS, Google Cloud', 'Docker, Kubernetes', 'CI/CD, GitHub Actions', 'Vercel, Netlify'], 
        iconBg: 'bg-purple-500/10 text-purple-500', // Purple Icon
        border: 'border-purple-200 shadow-purple-500/20' // Purple Border/Shadow
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-20 px-4 text-center bg-white">
            <div className="max-w-7xl mx-auto">
                
                {/* Small "Our Technology" Pill (Top Center) */}
                <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold py-1 px-4 rounded-full mb-4">
                    Our Technology
                </span>
                
                {/* Main Title (Purple Accent) */}
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Powered by Modern 
                    <span className="text-purple-600 block">Technology Stack</span>
                </h2>
                
                {/* Subtitle */}
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
                    We use cutting-edge technologies and proven methodologies to deliver exceptional digital solutions that scale with your business.
                </p>
                
                {/* Four Technology Stack Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stackData.map((item, index) => (
                        <div 
                            key={index} 
                            // Card Styling: Large rounding, subtle border, and colored shadow on hover
                            className={`bg-white p-6 rounded-3xl text-left 
                                        border-2 ${item.border} shadow-lg transition duration-300 hover:shadow-2xl`}
                        >
                            {/* Icon Area */}
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${item.iconBg}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                            
                            {/* Technology List */}
                            <ul className="space-y-3">
                                {item.tech.map((techItem, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600">
                                        {/* Colored Bullet Point */}
                                        <span className={`w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0 ${item.iconBg.replace('/10', '')}`}></span>
                                        <span>{techItem}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;