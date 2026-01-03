import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const modules = [
    {
        title: "Module 1 – React Native & JavaScript Basics",
        topics: [
            "React Native setup with Expo CLI & React Native CLI",
            "JavaScript ES6+ fundamentals",
            "React components, props & state",
            "Building your first mobile app"
        ],
    },
    {
        title: "Module 2 – UI & Navigation",
        topics: [
            "Building responsive UI with Flexbox",
            "React Native styling & layout techniques",
            "React Navigation (Stack, Tab & Drawer)",
            "Reusable UI components"
        ],
    },
    {
        title: "Module 3 – API & Storage",
        topics: [
            "REST APIs with Axios & Fetch",
            "JSON parsing & real-time data handling",
            "Local storage with AsyncStorage",
            "Offline caching best practices",
        ],
    },
    {
        title: "Module 4 – Native Features",
        topics: [
            "Camera, Location & Maps integration",
            "Push notifications (Firebase)",
            "Payments & authentication modules",
            "Performance optimization & debugging",
        ],
    },
    {
        title: "Module 5 – Deployment",
        topics: [
            "Building APK & IPA for production",
            "Play Store & App Store guidelines",
            "Crash analytics & monitoring",
            "Publishing and updates",
        ],
    },
];

const  ReactNative = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleModule = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className="w-full text-gray-900">

            {/* HERO / BANNER */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 "
                    style={{
                        backgroundImage: 'url("https://approov.io/hubfs/blog_banners/digital_background_with_react_native_logo.webp")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-black/45"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

                <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="tracking-[6px] font-light text-white/70 text-xs md:text-sm mb-3">
                            CROSS-PLATFORM APP TRACK
                        </p>

                        <h1 className="text-[2.6rem] md:text-[3.6rem] font-extrabold text-white leading-tight mb-3">
                            React Native <span className="text-orange-400">Development</span>
                        </h1>

                        <div className="h-[3px] w-24 bg-white rounded mb-6" />

                        <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
                            Master JavaScript & React Native to build high-performance mobile apps
                            for both iOS & Android using a single codebase — UI design to APIs & Deployment.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
                            {["700+ Students", "10 Weeks Program", "5+ Real Apps", "Job-Ready Training"].map((item, i) => (
                                <div key={i} className="bg-white/15 backdrop-blur-xl border border-white/15 rounded-xl px-4 py-3 text-center text-xs md:text-sm text-white font-medium shadow hover:scale-[1.03] transition">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <Link to="/getstarted">
                        <button className="mt-8 bg-white text-red-600 font-semibold text-lg px-10 py-4 rounded-full shadow
                       hover:bg-red-50 transition flex items-center gap-2 group">
                            Get Counselling
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHAT YOU WILL LEARN — React Native */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-extrabold mb-14 flex items-center gap-3">
                    <span className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse" />
                    What You Will Learn
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {[0, 1].map((col) => (
                        <div key={col} className="space-y-4">
                            {[
                                [
                                    "JavaScript & TypeScript — Zero to Advanced Concepts",
                                    "React Native UI Components, Flexbox & Responsive Layouts",
                                    "React Navigation (Stack, Tabs, Drawer)",
                                    "State Management — Redux / Context API",
                                ],
                                [
                                    "APIs — Axios + JSON + Error Handling",
                                    "Firebase Auth, Firestore, Storage & Notifications",
                                    "Native Modules + Maps + Camera + Third-Party SDK",
                                    "Build & Publish Apps for Android + iOS (Play Store & App Store)",
                                ],
                            ][col].map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 bg-white shadow rounded-xl px-6 py-4 text-lg"
                                >
                                    <CheckCircle2 className="mt-1 w-6 h-6 text-green-500" />
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>


            {/* WHY REACT NATIVE COURSE SECTION */}
            <section className="bg-gradient-to-b from-white to-orange-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why React Native Development at <span className="text-orange-500">ZTECHware?</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
                            <div className="text-orange-500 text-5xl mb-4">📘</div>
                            <h3 className="font-semibold text-xl mb-3">Industry-Level Curriculum</h3>
                            <p className="text-gray-600 text-base">
                                Designed with input from professional React Native developers building real products.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
                            <div className="text-orange-500 text-5xl mb-4">🚀</div>
                            <h3 className="font-semibold text-xl mb-3">Project-First Learning</h3>
                            <p className="text-gray-600 text-base">
                                Build 4+ real cross-platform apps for Android & iOS that strengthen your portfolio.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
                            <div className="text-orange-500 text-5xl mb-4">💼</div>
                            <h3 className="font-semibold text-xl mb-3">Career & Placement Assistance</h3>
                            <p className="text-gray-600 text-base">
                                Resume prep, mock interviews & referrals to hiring partners for React Native roles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* TECHNOLOGY & FRAMEWORKS */}
            <section className="py-20 bg-white text-gray-900">
                <h2 className="text-4xl font-bold text-center mb-6">
                    Technology & Frameworks We Use for React Native Development
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
                    A powerful tech stack used to build modern cross-platform mobile applications.
                </p>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Languages */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-purple-700 px-6 py-4">Languages</h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-9 -mt-1" />
                                JavaScript
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-9 -mt-1" />
                                TypeScript
                            </li>
                        </ul>
                    </div>

                    {/* Development Tools */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-green-600 px-6 py-4">Development Tools</h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-9 -mt-1" />
                                VS Code
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://th.bing.com/th/id/OIP.Pu2IplDBouUd-gFPngTz-QHaCJ?w=350&h=101&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" className="w-9 -mt-1" />
                                Expo
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className="w-9 -mt-1" />
                                Android Studio
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" className="w-9 -mt-1" />
                                Xcode
                            </li>
                        </ul>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-yellow-600 px-6 py-4">Frameworks</h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-9 -mt-1" />
                                React Native
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" className="w-9 -mt-1" />
                                React Navigation
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" className="w-9 -mt-1" />
                                Redux
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://th.bing.com/th/id/OIP.t0oX5R6dlvXMn-K4FZCEDAHaHa?w=205&h=205&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" className="w-9 -mt-1" />
                                Firebase
                            </li>
                        </ul>
                    </div>

                    {/* Platforms */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-blue-600 px-6 py-4">Platforms</h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" className="w-9 -mt-1" />
                                iOS
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-9 -mt-1" />
                                Android
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" className="w-9 -mt-1" />
                                Windows
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" className="w-9 -mt-1" />
                                Web
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SYLLABUS */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-10">Detailed Course Syllabus</h2>

                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <div key={index} className="bg-white border rounded-xl shadow">
                            <button
                                onClick={() => toggleModule(index)}
                                className="w-full flex justify-between px-6 py-5 text-left text-xl font-semibold"
                            >
                                {module.title}
                                <span className="text-3xl text-orange-500">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 text-lg text-gray-700">
                                    <ul className="list-disc pl-5 space-y-2">
                                        {module.topics.map((topic, i) => (
                                            <li key={i}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-10 md:py-17 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Build Your First Mobile App?</h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                    Fill out the form and our counsellor will help you with batch details, roadmap & job support.
                </p>
                <Link
                     to="/getstarted"
                     className="inline-flex items-center gap-2 bg-white text-red-600 
                                font-semibold text-sm sm:text-base md:text-lg 
                                px-6 sm:px-8 md:px-10 
                                py-3 md:py-4 
                                rounded-full hover:bg-red-50 transition shadow"
                   >
                     Get Started <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                   </Link>
            </section>
        

        </div>
    );
};

export default  ReactNative;
