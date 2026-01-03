import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

const modules = [
    {
        title: "Module 1 – C Fundamentals",
        topics: [
            "Variables, Data Types & Operators",
            "Input / Output & Conditional Statements",
            "Loops & Functions",
            "Arrays & Strings"
        ],
    },
    {
        title: "Module 2 – Pointers & Memory",
        topics: [
            "Pointers & Dynamic Memory Allocation",
            "Structure & Union",
            "DMA — malloc / calloc / free",
            "Memory Management Best Practices"
        ],
    },
    {
        title: "Module 3 – C++ & OOP",
        topics: [
            "Classes, Objects, Constructors",
            "Inheritance, Polymorphism, Encapsulation, Abstraction",
            "Function & Operator Overloading",
            "Friend Functions & Virtual Functions"
        ],
    },
    {
        title: "Module 4 – STL & DSA",
        topics: [
            "STL — Vector, Map, Set, Queue, Stack",
            "Searching & Sorting Algorithms",
            "Recursion & Backtracking",
            "Time & Space Complexity"
        ],
    },
    {
        title: "Module 5 – Projects & Placement",
        topics: [
            "File Handling Project",
            "Quiz / Hotel / Library Management System",
            "DSA Interview Questions",
            "Mock Tests & Coding Round Preparation"
        ],
    },
];

const CCPP = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleModule = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className="w-full text-gray-900">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'url("https://thumbs.dreamstime.com/b/human-hand-pointing-abstract-modern-tech-programming-code-screen-developer-c-language-computer-script-technology-367444673.jpg")', // you can change bg later
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.85,
                    }}
                />

                {/* 🔥 DARK OVERLAY FOR TEXT VISIBILITY */}
                <div className="absolute inset-0 bg-black/62"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="tracking-[6px] font-light text-white/70 text-xs mb-3">
                            PROGRAMMING CAREER TRACK
                        </p>

                        <h1 className="text-[2.8rem] md:text-[3.6rem] font-extrabold text-white leading-tight mb-3">
                            C / C++ <span className="text-orange-400">Programming</span>
                        </h1>

                        <div className="h-[3px] w-24 bg-white rounded mb-6" />

                        <p className="text-lg text-white/90 max-w-xl">
                            Master C & C++ from basics to advanced — memory, OOP, STL & Data Structures
                            to crack coding interviews & build real system-level projects.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                            {["900+ Students", "8 Weeks Program", "40+ Assignments", "Placement Training"].map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/15 backdrop-blur-xl text-white px-4 py-3 rounded-xl text-center text-sm shadow
        hover:bg-white/25 hover:-translate-y-[4px] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                )
                            )}
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

                {/* Title */}
                <h2 className="text-4xl font-extrabold mb-14 flex items-center gap-3">
                    <span className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse" />
                    What You Will Learn
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {[0, 1].map((col) => (
                        <div key={col} className="space-y-5">
                            {[
                                [
                                    "C Programming — Basics to Advanced Concepts",
                                    "Pointers & Memory Management",
                                    "Functions, Arrays, Structures & Strings",
                                    "File Handling & Real System Logic"
                                ],
                                [
                                    "C++ OOP — Classes, Objects, Inheritance & Polymorphism",
                                    "STL — Vector, Map, Set, Stack, Queue",
                                    "Data Structures & Algorithms for Placement",
                                    "Competitive Programming & Problem Solving"
                                ],
                            ][col].map((text, i) => (
                                <div
                                    key={i}
                                    className="
              group flex items-start gap-3 bg-white border border-gray-200 
              shadow-md rounded-2xl px-6 py-5 text-lg transition-all
              hover:-translate-y-1 hover:shadow-2xl hover:border-orange-400
               animate-fadeUp
            "
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                >
                                    <CheckCircle2 className="mt-1 w-6 h-6 text-green-500 group-hover:text-orange-500 transition" />
                                    <p className="text-gray-800 group-hover:text-gray-900 font-medium">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY C / C++ SECTION */}
            <section className="bg-gradient-to-b from-white to-orange-50 py-24">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-[2.6rem] font-extrabold text-center mb-6 leading-tight">
                        Why C / C++ Programming at <span className="text-orange-500">ZTECHware?</span>
                    </h2>
                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg">
                        Learn from industry-level instructors with a structured roadmap designed for placements & real development skills.
                    </p>

                    {/* CARDS */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Strong Fundamentals",
                                desc: "Logic-based learning with real C & C++ applications — no theory-only teaching.",
                                icon: "📘",
                            },
                            {
                                title: "Project & DSA Focused",
                                desc: "Build real projects along with DSA for coding interviews & competitive programming.",
                                icon: "🚀",
                                badge: true, // 🤩 Star highlight card
                            },
                            {
                                title: "Placement Assistance",
                                desc: "Resume prep, mock tests, coding rounds & referrals to hiring partners.",
                                icon: "💼",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="
            relative bg-white rounded-2xl p-9 text-center shadow-md border border-orange-100
            transition-all duration-300 cursor-pointer
            hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400
             animate-fadeUp
          "
                                style={{ animationDelay: `${i * 0.18}s` }}
                            >
                                {card.badge && (
                                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
                                        ⭐ Top Recommended
                                    </span>
                                )}

                                <div className="text-6xl mb-5">{card.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TOOLS & TECHNOLOGIES SECTION */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <h2 className="text-[2.4rem] font-extrabold text-center mb-4">
                    Tools & Technologies You Will Use
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Hands-on programming environment used by professional software engineers.
                </p>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {[
                        { title: "Tools / IDEs", color: "from-purple-600 to-purple-500", top: "⭐", items: ["VS Code", "Dev-C++", "CodeBlocks", "GCC Compiler"] },
                        { title: "Libraries", color: "from-green-600 to-green-500", top: "📚", items: ["STL", "Boost Library"] },
                        { title: "Platforms", color: "from-yellow-500 to-yellow-500", top: "🖥️", items: ["Windows", "Linux", "Online Judges"] },
                        { title: "Learning Areas", color: "from-blue-600 to-blue-500", top: "📌", items: ["C Programming", "C++ & OOP", "STL + DSA", "Competitive Coding"] },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeUp "
                            style={{ animationDelay: `${i * 0.20}s` }}
                        >
                            <h3 className={`text-xl font-bold text-white px-6 py-4 bg-gradient-to-r ${card.color} flex items-center gap-2`}>
                                <span className="text-lg">{card.top}</span> {card.title}
                            </h3>

                            <ul className="px-6 py-6 space-y-4 text-gray-700 text-lg">
                                {card.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3">
                                        <span className="text-red-500 text-xl">✦</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CAREER PATHS SECTION */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50">
                <h2 className="text-4xl font-extrabold text-center mb-14">
                    Career Paths After Learning <span className="text-orange-500">C / C++</span>
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                    {[
                        { icon: "💼", role: "Software Developer", desc: "Build high-performance system & industrial software applications using C++." },
                        { icon: "🤖", role: "Embedded Systems Engineer", desc: "Develop firmware for microcontrollers, IoT devices & robotics." },
                        { icon: "🎮", role: "Game Developer", desc: "Use C++ to build PC / mobile / console games with real-time performance." },
                        { icon: "🏆", role: "Competitive Programmer", desc: "Crack coding rounds & achieve top ranks on platforms like LeetCode & Codeforces." },
                        { icon: "🧑‍🏫", role: "DSA / Programming Tutor", desc: "Teach C++ & algorithms and earn via tutoring & freelancing." },
                        { icon: "🚀", role: "Intern / Trainee Software Engineer", desc: "Apply for fresher roles in IT companies with strong DSA and OOP knowledge." },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 text-center border border-orange-200 shadow-[0_4px_18px_rgba(255,140,0,0.22)]
        hover:shadow-[0_12px_35px_rgba(255,140,0,0.38)]
        transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-orange-50/40 cursor-pointer 
        animate-fadeUp "
                            style={{ animationDelay: `${i * 0.20}s` }}
                        >
                            {/* ICON */}
                            <div className="text-5xl mb-4">{card.icon}</div>

                            <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-orange-600 transition">
                                {card.role}
                            </h3>

                            <p className="text-gray-700 leading-relaxed text-[1.05rem] px-2">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-14 text-gray-700 text-lg font-medium">
                    🚀 These roles are open for freshers with strong C++ + DSA skills.
                </p>
            </section>

            {/* DSA ROADMAP TIMELINE */}
            <section className="py-24 bg-gradient-to-b from-orange-50 to-white" id="roadmap">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                    C++ + DSA Roadmap to Crack <span className="text-orange-500">Coding Interviews</span>
                </h2>

                <div className="max-w-5xl mx-auto relative">

                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[4px] bg-gradient-to-b from-orange-500 to-orange-300 rounded-full"></div>

                    <div className="space-y-10">
                        {[
                            "C Programming Fundamentals",
                            "C++ OOP Mastery — Classes, Objects, Inheritance & Polymorphism",
                            "STL — Vector, Map, Set, Stack, Queue",
                            "Data Structures — Linked List, Stack, Queue, Tree, Graph",
                            "Algorithms — Sorting, Searching, Recursion, Dynamic Programming",
                            "Time & Space Complexity + Problem Solving",
                            "Competitive Programming + Mock Coding Interviews",
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-start group animate-fadeUp "
                                style={{ animationDelay: `${index * 0.20}s` }}
                            >
                                {/* Number bubble */}
                                <div className="relative">
                                    <div className="flex justify-center items-center w-14 h-14 rounded-full bg-orange-500 text-white 
            text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="bg-white shadow-md border border-orange-200 p-6 rounded-2xl w-full
          group-hover:shadow-[0_6px_30px_rgba(255,140,0,0.35)]
          transition-all duration-300 group-hover:-translate-y-1">
                                    <p className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition">
                                        {step}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Text */}
                <p className="text-center mt-16 text-lg text-gray-700 max-w-3xl mx-auto">
                    Follow this structured roadmap & become interview-ready for roles in top product & service companies.
                </p>
            </section>

            {/* STUDENT REVIEWS / SUCCESS STORIES */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                    What Our Students Say
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

                    {[
                        {
                            name: "Ishika",
                            img: "https://i.pravatar.cc/150?img=15",
                            review:
                                "I learned C++ from scratch and cracked my campus placement in the very first attempt. The STL + DSA part was game-changing!",
                        },
                        {
                            name: "Sahil",
                            img: "https://i.pravatar.cc/150?img=32",
                            review:
                                "The roadmap made everything simple. Daily coding challenges boosted my confidence for competitive programming & coding rounds.",
                        },
                        {
                            name: "Rahul",
                            img: "https://i.pravatar.cc/150?img=47",
                            review:
                                "Flexible learning + projects + mock interviews… this C++ course gave me everything needed to start my IT career.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl p-10 text-center border border-orange-200
                   shadow-[0_12px_40px_rgba(255,140,0,0.18)]
                   hover:shadow-[0_18px_55px_rgba(255,140,0,0.35)]
                   transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Profile Image */}
                            <div className="flex justify-center mb-5">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-400"

                                />
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center gap-1 text-yellow-400 text-xl mb-4">
                                {"★★★★★".split("").map((s, idx) => (
                                    <span key={idx}>★</span>
                                ))}
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 text-yellow-400 text-lg mb-4">
                                ★★★★★
                            </div>

                            {/* Review */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-6 ">
                                {item.review}
                            </p>

                            {/* Student Name */}
                            <h4 className="font-semibold text-lg text-gray-900">— {item.name}</h4>

                            {/* Verified */}
                            <p className="text-green-600 mt-2 flex items-center justify-center gap-2 text-sm font-medium">
                                ✔ Verified Graduate
                            </p>
                        </div>
                    ))}
                </div>
                {/*Bottom line*/}
                <p className="text-center mt-14 text-lg text-gray-700">
                    🎓 1000+ students have successfully started their programming career with{" "}
                    <span className="text-orange-600 font-semibold">ZTECHware</span>.
                </p>
            </section>

            {/* CERTIFICATE + INTERNSHIP SECTION */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50">
                <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
                    Certification & Internship Opportunities
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                    {/* Certificate Card */}
                    <div
                        className="bg-white rounded-3xl p-10 border border-orange-200 shadow-md
                 hover:shadow-[0_10px_35px_rgba(255,150,0,0.35)]
                 transition-all duration-500 hover:-translate-y-2
                 flex items-start gap-6"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500/15 text-orange-500 text-3xl shadow-inner">
                            🎓
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                Certificate of Completion
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Every learner receives a professional course completion certificate from
                                <span className="font-semibold text-orange-600"> ZTECHware</span> — a powerful boost to resume & LinkedIn profile.
                            </p>
                        </div>
                    </div>

                    {/* Internship Card */}
                    <div
                        className="bg-white rounded-3xl p-10 border border-orange-200 shadow-md
                 hover:shadow-[0_10px_35px_rgba(255,150,0,0.35)]
                 transition-all duration-500 hover:-translate-y-2
                 flex items-start gap-6"
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-500/15 text-orange-500 text-3xl shadow-inner">
                            💼
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                Internship & Placement Support
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Top-performing students get internship assistance & mock interview training
                                for <span className="font-semibold text-orange-600">IT companies & placement drives</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <p className="text-center mt-14 text-xl font-medium text-gray-800">
                    Your hard work + our guidance = a strong beginning to your programming career 🚀
                </p>
            </section>

            {/* SYLLABUS */}
            <section className="max-w-6xl mx-auto px-6 py-24" id="syllabus">
                <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
                    Detailed Course Syllabus
                </h2>

                <div className="space-y-5">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden
          ${openIndex === index
                                    ? "border-orange-500 shadow-[0_6px_25px_rgba(255,140,0,0.25)]"
                                    : "border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300"
                                }`}
                        >
                            <button
                                onClick={() => toggleModule(index)}
                                className="w-full flex justify-between items-center px-7 py-6 text-left"
                            >
                                <span className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                                    📌 {module.title}
                                </span>

                                <span
                                    className={`text-3xl font-bold transition-transform duration-300 text-orange-500
              ${openIndex === index ? "rotate-180" : ""}`}
                                >
                                    ⌄
                                </span>
                            </button>

                            {/* Content — collapses smoothly */}
                            <div
                                className={`grid transition-all duration-300 ${openIndex === index ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <ul className="px-9 pb-6 pt-1 space-y-3 text-lg text-gray-700">
                                        {module.topics.map((topic, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 leading-relaxed"
                                            >
                                                <span className="text-orange-500 text-lg mt-[2px]">✔</span>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* FINAL CTA */}
                  < section className="py-10 md:py-17 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-4" >
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Start Your Python Journey?</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                      Fill the form & our counsellor will guide you with batch details, roadmaps & placements.
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
                    {/* Trust Badges */}
                            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm md:text-lg font-medium opacity-95">
                                <div className="flex items-center gap-2">🎓 1000+ Students Trained</div>
                                <div className="flex items-center gap-2">💼 100+ IT Placements</div>
                                <div className="flex items-center gap-2">🧠 Project + DSA Curriculum</div>
                                <div className="flex items-center gap-2">⭐ 4.9/5 Rated by Learners</div>
                            </div>
                  </section >
                </div >
              );
            };

export default CCPP;

