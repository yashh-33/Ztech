// import { djangoModules } from "../../../data/djangoModules";


import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { djangoModules } from "../../../data/djangoModules";

const DjangoCoursePage = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleModule = (i) => setOpenIndex(openIndex === i ? -1 : i);

    return (
        <div className="w-full text-gray-900">

            {/* HERO SECTION – Django */}
            <section className="relative overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.65)",
                    }}
                />

                {/* Gradient Overlay – Django Theme */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/45"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32 grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <p className="tracking-[6px] font-light text-white/70 text-xs mb-3">
                            BACKEND FRAMEWORK TRACK
                        </p>

                        <h1 className="text-[2.8rem] md:text-[3.6rem] font-extrabold text-white leading-tight mb-3">
                            Django <span className="text-orange-400">Framework Development</span>
                        </h1>

                        <div className="h-[3px] w-24 bg-white rounded mb-6" />

                        <p className="text-lg text-white/90 max-w-xl">
                            Master Django from fundamentals to advanced backend concepts — build
                            secure, scalable web applications, REST APIs and production-ready
                            platforms used by real companies.
                        </p>

                        {/* STATS – Django */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
                            {[
                                "900+ Learners",
                                "8–10 Weeks Program",
                                "5+ Django Projects",
                                "Backend Job-Ready Skills",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/15 backdrop-blur-xl text-white px-4 py-3 rounded-xl
          text-center text-sm shadow-md hover:bg-white/25 hover:-translate-y-[4px]
          hover:shadow-2xl transition-all duration-300 cursor-pointer"
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
            {/* WHAT YOU WILL LEARN – DJANGO*/}


             <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-12">What You Will Learn</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {djangoModules.learn.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white border rounded-2xl px-6 py-5 shadow-md hover:border-orange-400 transition"
            >
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>
            {/* WHY DJANGO SECTION */}
            <section className="bg-gradient-to-b from-white to-orange-50 py-24">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-[2.6rem] font-extrabold text-center mb-6 leading-tight">
                        Why Learn <span className="text-orange-500">Django</span> at ZTECHware?
                    </h2>

                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg">
                        Learn backend web development with Django using industry practices,
                        real-world projects and job-focused training.
                    </p>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Industry-Ready Django Curriculum",
                                desc: "Learn Django with Python, MVC/MTV architecture, ORM, authentication and best practices used by backend teams.",
                                icon: "🐍",
                            },
                            {
                                title: "Project-Based Learning",
                                desc: "Build real Django projects like admin dashboards, REST APIs, authentication systems & full-stack apps.",
                                icon: "🚀",
                            },
                            {
                                title: "Career & Placement Support",
                                desc: "Resume building, backend interview preparation, mock interviews and guidance for Django developer roles.",
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
            {/* TOOLS & TECHNOLOGIES – DJANGO */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <h2 className="text-[2.4rem] font-extrabold text-center mb-4">
                    Tools & Technologies You Will Use
                </h2>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Professional Django backend development stack used by startups & IT companies.
                </p>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {[
                        {
                            title: "Tools / IDEs",
                            color: "from-purple-600 to-purple-500",
                            icon: "⚙️",
                            items: ["VS Code", "PyCharm", "Postman", "Django Admin Panel"],
                        },
                        {
                            title: "Core Technologies",
                            color: "from-green-600 to-green-500",
                            icon: "📚",
                            items: ["Python", "Django Framework", "Django ORM", "REST APIs"],
                        },
                        {
                            title: "Platforms",
                            color: "from-yellow-500 to-yellow-400",
                            icon: "🖥️",
                            items: ["Windows", "Linux", "GitHub", "Cloud Hosting"],
                        },
                        {
                            title: "Learning Areas",
                            color: "from-blue-600 to-blue-500",
                            icon: "📌",
                            items: [
                                "MVC / MTV Architecture",
                                "Authentication & Authorization",
                                "Database Integration",
                                "Deployment & Security",
                            ],
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        animate-fadeUp"
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
            {/* CAREER PATHS – DJANGO */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50">
                <h2 className="text-4xl font-extrabold text-center mb-14">
                    Career Paths After Learning <span className="text-orange-500">Django</span>
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                    {[
                        {
                            icon: "🐍",
                            role: "Django Backend Developer",
                            desc: "Build scalable backend systems, REST APIs and server-side logic using Django.",
                        },
                        {
                            icon: "🌐",
                            role: "Full Stack Developer (Django)",
                            desc: "Develop full-stack applications using Django backend with frontend technologies.",
                        },
                        {
                            icon: "🔐",
                            role: "Backend API Engineer",
                            desc: "Design secure APIs, authentication systems and data-driven services using Django REST Framework.",
                        },
                        {
                            icon: "🗄️",
                            role: "Database & Backend Engineer",
                            desc: "Work with PostgreSQL / MySQL databases, ORM queries and backend performance optimization.",
                        },
                        {
                            icon: "☁️",
                            role: "Cloud & Deployment Engineer",
                            desc: "Deploy Django applications on cloud platforms with CI/CD, Docker and server setup.",
                        },
                        {
                            icon: "💼",
                            role: "Intern / Junior Django Developer",
                            desc: "Apply for backend fresher roles, internships and startup jobs using Django skills.",
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
                    🚀 These roles are open for freshers with strong Django & Backend development skills.
                </p>
            </section>
            {/* DJANGO ROADMAP TIMELINE */}
            <section className="py-24 bg-gradient-to-b from-orange-50 to-white" id="roadmap">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                    Django Roadmap to Become a{" "}
                    <span className="text-orange-500">Job-Ready Backend Developer</span>
                </h2>

                <div className="max-w-5xl mx-auto relative">

                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[4px] 
         bg-gradient-to-b from-orange-500 to-orange-300 rounded-full"></div>

                    <div className="space-y-10">
                        {[
                            "Python Fundamentals & OOP Concepts",
                            "Django Basics — Project Setup, Apps & URL Routing",
                            "Models, ORM & Database Integration",
                            "Views, Templates & Dynamic Web Pages",
                            "Django REST Framework — APIs & Serialization",
                            "Authentication, Authorization & Security",
                            "Projects, Deployment, GitHub & Interview Preparation",
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-6 items-start group animate-fadeUp"
                                style={{ animationDelay: `${index * 0.20}s` }}
                            >
                                {/* Number Bubble */}
                                <div className="relative">
                                    <div className="flex justify-center items-center w-14 h-14 
                 rounded-full bg-orange-500 text-white text-2xl font-bold 
                 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="bg-white shadow-md border border-orange-200 p-6 
               rounded-2xl w-full
               group-hover:shadow-[0_6px_30px_rgba(255,140,0,0.35)]
               transition-all duration-300 group-hover:-translate-y-1">
                                    <p className="text-lg font-semibold text-gray-900 
                 group-hover:text-orange-600 transition">
                                        {step}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center mt-16 text-lg text-gray-700 max-w-3xl mx-auto">
                    Follow this structured roadmap to become a confident Django backend developer
                    ready for interviews, internships & real-world projects.
                </p>
            </section>
            {/* DJANGO STUDENT REVIEWS */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50">
                <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                    What Our Students Say
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                    {[
                        {
                            name: "Rahul",
                            img: "https://randomuser.me/api/portraits/men/46.jpg",
                            review:
                                "I started Django after learning Python basics. Building real backend projects, APIs and authentication systems helped me crack my first backend internship.",
                        },
                        {
                            name: "Pooja",
                            img: "https://randomuser.me/api/portraits/women/62.jpg",
                            review:
                                "The Django roadmap was very structured. ORM, REST APIs and deployment were explained clearly with real-world examples.",
                        },
                        {
                            name: "Karan",
                            img: "https://randomuser.me/api/portraits/men/34.jpg",
                            review:
                                "From models and views to Django REST Framework, everything was covered practically. I feel confident applying for backend developer roles now.",
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
                    🎓 1000+ students have successfully started their Django backend careers with{" "}
                    <span className="font-semibold text-orange-600">ZTECHware</span>.
                </p>
            </section>
            {/* CERTIFICATE + INTERNSHIP – DJANGO */}
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
                                Every learner receives a professional <b>Django Backend Development</b>
                                course completion certificate from{" "}
                                <span className="font-semibold text-orange-600">ZTECHware</span> —
                                a strong addition to resume & LinkedIn profile.
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
                                Top-performing students get internship assistance, mock interview training
                                & placement guidance for{" "}
                                <span className="font-semibold text-orange-600">
                                    Django backend developer & Python roles
                                </span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <p className="text-center mt-14 text-xl font-medium text-gray-800">
                    Your hard work + our guidance = a strong beginning to your Django backend career 🚀
                </p>
            </section>

            
            {/* FINAL CTA – REACTJS */}
            <section className="py-10 md:py-17 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4">
                    Ready to Start Your <span className="text-white">Django Journey?</span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                    Fill the form & our counsellor will guide you with batch schedules,
                    learning roadmap & placement support.
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

export default DjangoCoursePage;