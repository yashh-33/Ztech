import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    CheckCircle2,
    ArrowRight,
    Award,
    BookOpen,
    Briefcase,
    Rocket,
} from "lucide-react";

const modules = [
    {
        title: "Module 1 – Web Fundamentals & Programming Basics",
        topics: [
            "How the Web Works (Client–Server, HTTP/HTTPS)",
            "HTML5 Structure & Semantic Elements",
            "CSS3 Basics & Responsive Design",
            "JavaScript Fundamentals (ES6+)",
        ],
    },
    {
        title: "Module 2 – Frontend Development (React)",
        topics: [
            "React Basics & Project Setup",
            "Components, Props & State",
            "Hooks (useState, useEffect)",
            "Routing & UI Design with Tailwind / CSS",
        ],
    },
    {
        title: "Module 3 – Backend Development (Node.js & Express)",
        topics: [
            "Node.js Basics & NPM",
            "Express.js & REST API Development",
            "Middleware, Controllers & Routing",
            "Authentication & Authorization (JWT)",
        ],
    },
    {
        title: "Module 4 – Database & APIs",
        topics: [
            "MongoDB Fundamentals",
            "Mongoose Schema & Models",
            "CRUD Operations",
            "API Integration with Frontend",
        ],
    },
    {
        title: "Module 5 – Full-Stack Projects & Deployment",
        topics: [
            "Full-Stack Project Architecture",
            "Connecting React + Node + Database",
            "Deployment (Vercel / Netlify / Render)",
            "GitHub, Resume & Interview Preparation",
        ],
    },
];

const FullStack = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleModule = (index) =>
        setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className="w-full bg-white text-gray-900">

            {/* HERO – FULL STACK */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'url("https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=1600&q=80")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.7)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

                <div className="relative max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <p className="tracking-[6px] text-xs text-white/60 mb-3">
                            FULL STACK WEB CAREER TRACK
                        </p>

                        <h1 className="text-[2.9rem] md:text-[3.8rem] font-extrabold leading-tight text-white mb-3">
                            Full-Stack <span className="text-orange-400">Web Development</span>
                        </h1>

                        <div className="h-[4px] w-24 bg-orange-400 rounded mb-6" />

                        <p className="text-lg text-white/90">
                            Master end-to-end web development using{" "}
                            <strong>HTML, CSS, JavaScript, React, Node.js & Databases</strong> —
                            build scalable frontend & backend applications and deploy them
                            professionally.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                            {[
                                "1200+ Students",
                                "12 Weeks Program",
                                "5+ Full-Stack Projects",
                                "Job-Ready Training",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="bg-white/10 backdrop-blur-xl border border-white/15
          rounded-xl px-4 py-3 text-center text-sm text-white shadow-md
          hover:border-orange-400 transition"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        {/* CTA */}
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
            {/* WHAT YOU WILL LEARN */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-extrabold mb-14 flex items-center gap-3">
                    <span className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse" />
                    What You Will Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        [
                            "HTML, CSS & JavaScript — Zero to Advanced",
                            "Modern Frontend with React & Component Architecture",
                            "State Management, Hooks & UI Best Practices",
                            "API Integration — REST APIs & JSON",
                        ],
                        [
                            "Backend Development with Node.js & Express",
                            "Databases — MongoDB / SQL & Authentication",
                            "Security, Performance & Deployment",
                            "Full-Stack Projects & Production Hosting",
                        ],
                    ].map((list, column) => (
                        <div key={column} className="space-y-4">
                            {list.map((text) => (
                                <div
                                    key={text}
                                    className="bg-white/90 border border-gray-200 shadow-md hover:shadow-orange-200
          transition rounded-2xl px-5 py-4 flex gap-4 items-start"
                                >
                                    <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
                                    <p className="text-lg">{text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY FULL-STACK COURSE SECTION */}
            <section className="bg-gradient-to-b from-white to-orange-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why Full-Stack at <span className="text-orange-500">ZTECHware?</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
                            <div className="text-orange-500 text-5xl mb-4">📘</div>
                            <h3 className="font-semibold text-xl mb-3">Industry-Level Full-Stack Curriculum</h3>
                            <p className="text-gray-600 text-base">
                                Curriculum designed with input from professinal full-stack developers working on real product.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
                            <div className="text-orange-500 text-5xl mb-4">🚀</div>
                            <h3 className="font-semibold text-xl mb-3">Project-First Learning</h3>
                            <p className="text-gray-600 text-base">
                                Build 6+ real-world full-stack projects including frontend, backend, APIs & databases.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
                            <div className="text-orange-500 text-5xl mb-4">💼</div>
                            <h3 className="font-semibold text-xl mb-3">Career & Placement Assistance</h3>
                            <p className="text-gray-600 text-base">
                                Resume building, full-stack interview prep, mock interviews & hiring partner referrals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY & FRAMEWORKS — FULL STACK */}
            <section className="py-20 bg-white text-gray-900">
                <h2 className="text-4xl font-bold text-center mb-6">
                    Technology & Frameworks We Use for Full-Stack Development
                </h2>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
                    A modern full-stack tech stack used to build scalable, secure and
                    high-performance web applications.
                </p>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Languages */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-purple-700 px-6 py-4">
                            Languages
                        </h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6">
                            <li className="flex items-center gap-4 py-4">
                                <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                JavaScript
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                                Python
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                                Java
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img className="w-9" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
                                SQL
                            </li>
                        </ul>
                    </div>

                    {/* Development Tools */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-green-600 px-6 py-4">
                            Development Tools
                        </h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-9" />
                                VS Code
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-9" />
                                Git & GitHub
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className="w-9" />
                                npm / Yarn
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" className="w-9" />
                                Postman
                            </li>
                        </ul>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-yellow-600 px-6 py-4">
                            Frameworks
                        </h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-9" />
                                React.js
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-9" />
                                Node.js
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-9" />
                                Express.js
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="w-9" />
                                Django
                            </li>
                        </ul>
                    </div>

                    {/* Platforms & Databases */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
                        <h3 className="text-xl font-bold text-white bg-blue-600 px-6 py-4">
                            Platforms & Databases
                        </h3>
                        <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6">
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-9" />
                                MongoDB
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-9" />
                                MySQL
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.fkN6oFayJ0WgXeTBUO5AkAAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=181&h=181&c=7&dpr=1.3&o=7&rm=3" className="w-9" />
                                AWS / Cloud
                            </li>
                            <li className="flex items-center gap-4 py-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-9" />
                                Docker
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            {/* FULL-STACK SYLLABUS */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Detailed Full-Stack Course Syllabus
                </h2>

                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <div
                            key={module.title}
                            className="bg-white border border-orange-200 rounded-2xl shadow-md"
                        >
                            <button
                                onClick={() => toggleModule(index)}
                                className="w-full flex justify-between px-6 py-6 text-left text-xl font-semibold"
                            >
                                {module.title}
                                <span className="text-3xl text-orange-500">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 text-lg text-gray-700">
                                    <ul className="list-disc pl-6 space-y-2">
                                        {module.topics.map((topic) => (
                                            <li key={topic}>{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            {/* FINAL CTA – FULL STACK */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Ready to Become a Full-Stack Developer?
                </h2>

                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Talk to our course advisor to understand the full-stack roadmap, live projects,
                    backend + frontend stacks, and job opportunities.
                </p>

                <Link
                    to="/getstarted"
                    className="inline-flex items-center gap-2 bg-white text-red-600 
               font-semibold text-lg px-10 py-4 rounded-full 
               hover:bg-red-50 transition shadow-xl"
                >
                    Get Started <ArrowRight />
                </Link>
            </section>
        </div>
    );
};

export default FullStack;


