import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { nodeModules } from "../../../data/nodeModules";

const NodeJS = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleModule = (i) => setOpenIndex(openIndex === i ? -1 : i);

    return (
        <div className="w-full text-gray-900">

            {/* HERO SECTION – NODE JS */}
            <section className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.7)",
                }}
            />
            {/* Gradient Overlay – Node.js Theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="tracking-[6px] font-light text-white/70 text-xs mb-3">
                        BACKEND DEVELOPMENT TRACK
                    </p>

                    <h1 className="text-[2.8rem] md:text-[3.6rem] font-extrabold text-white leading-tight mb-3">
                        Node.js <span className="text-orange-400">Backend Development</span>
                    </h1>

                    <div className="h-[3px] w-24 bg-white rounded mb-6" />

                    <p className="text-lg text-white/90 max-w-xl">
                        Master Node.js from fundamentals to advanced backend concepts —
                        build scalable REST APIs, authentication systems, databases
                        and production-ready server-side applications.
                    </p>

                    {/* STATS – Node.js */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                        {[
                            "900+ Learners",
                            "8–10 Weeks Program",
                            "6+ Backend Projects",
                            "Industry-Ready APIs",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/15 backdrop-blur-xl text-white px-4 py-3 rounded-xl
                     text-center text-sm shadow-md hover:bg-white/25
                     hover:-translate-y-[4px] hover:shadow-2xl
                     transition-all duration-300 cursor-pointer"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {/* CTA Button */}
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
        {/* WHAT YOU WILL LEARN – NODE JS */ }
    <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-14 flex items-center gap-3">
            <span className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse"></span>
            What You Will Learn
        </h2>
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
            {[0, 1].map((col) => (
                <div key={col} className="space-y-5">
                    {[
                        [
                            "JavaScript Fundamentals & ES6+ for Backend",
                            "Node.js Core Concepts & Event Loop",
                            "Modules, File System & Async Programming",
                        ],
                        [
                            "Express.js & REST API Development",
                            "MongoDB / SQL Database Integration",
                            "Authentication, Deployment & Best Practices",
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
        {/* WHY REACTJS SECTION */}
        <section className="bg-gradient-to-b from-white to-orange-50 py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-[2.6rem] font-extrabold text-center mb-6 leading-tight">
                    Why Learn <span className="text-orange-500">ReactJS</span> at ZTECHware?
                </h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg">
                    Learn backend development with Node.js using industry practices,
                    real-world projects and job-focused training.
                </p>
                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Industry-Ready Node.js Curriculum",
                            desc: "Learn Node.js with modern JavaScript, Express.js, REST APIs and backend architecture used by real companies.",
                            icon: "🟢",
                        },
                        {
                            title: "Project-Based Backend Learning",
                            desc: "Build real backend projects like REST APIs, authentication systems & scalable server-side applications.",
                            icon: "🚀",
                        },
                        {
                            title: "Career & Placement Support",
                            desc: "Resume building, backend interview preparation, mock interviews and guidance for Node.js developer roles.",
                            icon: "💼",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="relative bg-white rounded-2xl p-9 text-center shadow-md border border-orange-100
           transition-all duration-300 cursor-pointer
           hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400
            animate-fadeUp"
                            style={{ animationDelay: `${i * 0.18}s` }}
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-5">{card.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-base leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* TOOLS & TECHNOLOGIES – Node.js */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <h2 className="text-[2.4rem] font-extrabold text-center mb-4">
                Tools & Technologies You Will Use
            </h2>

            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
                Industry-grade Node.js backend development stack used by startups & product companies.
            </p>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {[
                    {
                        title: "Tools / IDEs",
                        color: "from-purple-600 to-purple-500",
                        icon: "⚙️",
                        items: ["VS Code", "Postman", "npm / yarn", "Node CLI"],
                    },
                    {
                        title: "Core Libraries",
                        color: "from-green-600 to-green-500",
                        icon: "📚",
                        items: ["Node.js", "Express.js", "JWT", "Mongoose"],
                    },
                    {
                        title: "Platforms",
                        color: "from-yellow-500 to-yellow-400",
                        icon: "🖥️",
                        items: ["Windows", "Linux", "GitHub", "Cloud Servers"],
                    },
                    {
                        title: "Learning Areas",
                        color: "from-blue-600 to-blue-500",
                        icon: "📌",
                        items: [
                            "REST API Development",
                            "Authentication & Authorization",
                            "Database Integration",
                            "Deployment & Scalability",
                        ],
                    },
                ].map((card, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        animate-fadeUp "
                        style={{ animationDelay: `${i * 0.15}s` }}
                    >
                        {/* Header */}
                        <h3
                            className={`text-xl font-bold text-white px-6 py-4 bg-gradient-to-r ${card.color} flex items-center gap-2`}
                        >
                            <span className="text-lg">{card.icon}</span> {card.title}
                        </h3>

                        {/* List */}
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
        {/* CAREER PATHS – NODE.JS */}
        <section className="py-24 bg-gradient-to-b from-white to-orange-50">
            <h2 className="text-4xl font-extrabold text-center mb-14">
                Career Paths After Learning <span className="text-orange-500">Node.js</span>
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                {[
                    {
                        icon: "🟢",
                        role: "Node.js Backend Developer",
                        desc: "Build scalable, high-performance backend services and APIs using Node.js & Express.",
                    },
                    {
                        icon: "🔗",
                        role: "API Developer",
                        desc: "Design and develop RESTful APIs with authentication, validation & integrations.",
                    },
                    {
                        icon: "🗄️",
                        role: "Backend Engineer",
                        desc: "Work on databases, server-side logic, performance optimization & system design.",
                    },
                    {
                        icon: "☁️",
                        role: "Cloud / Server Engineer",
                        desc: "Deploy and manage Node.js applications on cloud platforms and servers.",
                    },
                    {
                        icon: "🚀",
                        role: "Full Stack Developer (Node.js)",
                        desc: "Build complete applications using Node.js for backend and modern frontend frameworks.",
                    },
                    {
                        icon: "💼",
                        role: "Intern / Junior Backend Developer",
                        desc: "Apply for fresher roles, internships & backend development positions using Node.js.",
                    },
                ].map((card, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl p-8 text-center border border-orange-200
             shadow-[0_4px_18px_rgba(255,140,0,0.22)]
             hover:shadow-[0_12px_35px_rgba(255,140,0,0.38)]
             transition-all duration-300 ease-out hover:-translate-y-2
             hover:bg-orange-50/40 cursor-pointer
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
                🚀 These roles are open for freshers with strong Node.js & backend development skills.
            </p>
        </section>
        {/* NODE.JS ROADMAP TIMELINE */}
        <section className="py-24 bg-gradient-to-b from-orange-50 to-white" id="roadmap">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                Node.js Roadmap to Become a{" "}
                <span className="text-orange-500">Job-Ready Backend Developer</span>
            </h2>

            <div className="max-w-5xl mx-auto relative">

                {/* Vertical Line */}
                <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[4px] bg-gradient-to-b from-orange-500 to-orange-300 rounded-full"></div>

                <div className="space-y-10">
                    {[
                        "JavaScript Fundamentals & Asynchronous Programming",
                        "Node.js Basics — Runtime, Modules & npm",
                        "Express.js — Routing, Middleware & REST APIs",
                        "Working with Databases (MongoDB / SQL)",
                        "Authentication, Authorization & Security",
                        "API Performance, Error Handling & Best Practices",
                        "Projects, Deployment & Backend Interview Prep",
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

            <p className="text-center mt-16 text-lg text-gray-700 max-w-3xl mx-auto">
                Follow this roadmap to become a confident Node.js backend developer ready for real-world jobs & interviews.
            </p>
        </section>
        {/* NODE.JS STUDENT REVIEWS */}
        <section className="py-24 bg-gradient-to-b from-white to-orange-50">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                What Our Students Say
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {[
                    {
                        name: "Aman",
                        img: "https://randomuser.me/api/portraits/men/45.jpg",
                        review:
                            "I learned Node.js from basics and built REST APIs with databases. The backend projects helped me crack my first backend developer interview.",
                    },
                    {
                        name: "Neha",
                        img: "https://randomuser.me/api/portraits/women/68.jpg",
                        review:
                            "The Node.js roadmap was very structured. Express, authentication, and deployment were taught in a very practical way.",
                    },
                    {
                        name: "Rohit",
                        img: "https://randomuser.me/api/portraits/men/29.jpg",
                        review:
                            "From JavaScript async concepts to real backend APIs, this course gave me strong confidence for Node.js internships.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-3xl p-10 text-center border border-orange-200
             shadow-[0_12px_40px_rgba(255,140,0,0.18)]
             hover:shadow-[0_18px_55px_rgba(255,140,0,0.35)]
             transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Avatar */}
                        <div className="flex justify-center mb-5">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-orange-400"
                            />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 text-yellow-400 text-lg mb-4">
                            ★★★★★
                        </div>

                        {/* Review */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {item.review}
                        </p>

                        {/* Name */}
                        <h4 className="font-semibold text-lg text-gray-900">
                            — {item.name}
                        </h4>

                        {/* Verified */}
                        <p className="text-green-600 mt-2 flex items-center justify-center gap-2 text-sm font-medium">
                            ✔ Verified Graduate
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom trust line */}
            <p className="text-center mt-14 text-lg text-gray-700">
                🎓 1000+ students have successfully started their Node.js careers with{" "}
                <span className="font-semibold text-orange-600">ZTECHware</span>.
            </p>
        </section>
        {/* CERTIFICATE + INTERNSHIP – NODEJS */}
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
                            Every learner receives a professional{" "}
                            <span className="font-semibold text-orange-600">Node.js</span> course
                            completion certificate from{" "}
                            <span className="font-semibold text-orange-600">ZTECHware</span> —
                            a strong boost to resume & LinkedIn profile.
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
                            Top-performing students get internship assistance, backend interview
                            preparation & placement guidance for{" "}
                            <span className="font-semibold text-orange-600">
                                Node.js backend developer roles
                            </span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Tagline */}
            <p className="text-center mt-14 text-xl font-medium text-gray-800">
                Your hard work + our guidance = a strong beginning to your Node.js career 🚀
            </p>
        </section>
        {/* NODEJS SYLLABUS */}
        <section className="max-w-6xl mx-auto px-6 py-24" id="syllabus">
            <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
                Detailed Course Syllabus
            </h2>

            <div className="space-y-5">
                {nodeModules.map((module, index) => (
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
                                🟢 {module.title}
                            </span>

                            <span
                                className={`text-3xl font-bold transition-transform duration-300 text-orange-500
              ${openIndex === index ? "rotate-180" : ""}`}
                            >
                                ⌄
                            </span>
                        </button>

                        {/* Accordion Content */}
                        <div
                            className={`grid transition-all duration-300 ${openIndex === index ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <ul className="px-9 pb-6 pt-1 space-y-3 text-lg text-gray-700">
                                    {module.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start gap-3 leading-relaxed">
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


        {/* FINAL CTA – REACTJS */}
        <section className="py-10 md:py-17 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4">
                Ready to Start Your <span className="text-white">NodeJS Journey?</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Fill the form & our counsellor will guide you with batch schedules,
                learning roadmap & placement support.
            </p>

            <Link to="/getstarted"
                     className="inline-flex items-center gap-2 bg-white text-red-600 
                                font-semibold text-sm sm:text-base md:text-lg 
                                px-6 sm:px-8 md:px-10 
                                py-3 md:py-4 
                                rounded-full hover:bg-red-50 transition shadow"
                   >
                     Get Started <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                   </Link>

            {/* TRUST BADGES */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium opacity-95">
                <div className="flex items-center gap-2">🎓 1000+ Students Trained</div>
                <div className="flex items-center gap-2">💼 100+ IT Placements</div>
                <div className="flex items-center gap-2">⚛️ Industry-Grade React Projects</div>
                <div className="flex items-center gap-2">⭐ 4.9/5 Learner Rating</div>
            </div>
        </section>
    </div >
  );
};

export default NodeJS;









