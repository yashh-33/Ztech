import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2, ArrowRight, Award, BookOpen, Briefcase, Rocket,
} from "lucide-react";

const modules = [
  {
    title: "Module 1 – UI/UX Fundamentals & Design Thinking",
    topics: [
      "What is UI & UX? Industry Overview",
      "Design Thinking Process",
      "User-Centered Design Principles",
      "Understanding Users & Business Goals",
    ],
  },
  {
    title: "Module 2 – UX Research & Information Architecture",
    topics: [
      "User Research Methods (Interviews, Surveys)",
      "User Personas & Empathy Mapping",
      "User Journeys & Experience Mapping",
      "Information Architecture & Sitemap Design",
    ],
  },
  {
    title: "Module 3 – UI Design Basics & Visual Design",
    topics: [
      "Color Theory & Typography",
      "Layout Systems & Grid Design",
      "Designing Buttons, Forms & Components",
      "Accessibility & Design Consistency",
    ],
  },
  {
    title: "Module 4 – Wireframing, Prototyping & Tools",
    topics: [
      "Low & High Fidelity Wireframes",
      "Figma Interface & Best Practices",
      "Interactive Prototypes",
      "Design Handoff to Developers",
    ],
  },
  {
    title: "Module 5 – Real Projects & Career Preparation",
    topics: [
      "Case Study Creation (End-to-End UX)",
      "Design System & UI Kit",
      "Portfolio Building & Presentation",
      "Interview Preparation & Freelancing Basics",
    ],
  },
];
const UIUXCourse = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleModule = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="tracking-[6px] text-xs text-white/60 mb-3">
              DESIGN CAREER TRACK
            </p>

            <h1 className="text-[2.9rem] md:text-[3.8rem] font-extrabold leading-tight text-white mb-3">
              UI / UX <span className="text-orange-400">Design</span>
            </h1>

            <div className="h-[4px] w-24 bg-orange-400 rounded mb-6" />

            <p className="text-lg text-white/90">
              Master modern <strong>UI & UX Design</strong> — user research,
              wireframing, visual design, prototyping & real-world case studies
              using industry tools.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              {[
                "900+ Designers Trained",
                "8 Weeks Program",
                "6+ Live Design Projects",
                "Job-Ready Portfolio",
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
              "UI / UX Fundamentals & Design Thinking",
              "User Research, Personas & User Journeys",
              "Wireframing & Information Architecture",
              "Usability Principles & Accessibility",
            ],
            [
              "Visual Design, Color Theory & Typography",
              "Figma Tools, Components & Auto Layout",
              "Prototyping, Interaction & Micro-animations",
              "Portfolio, Case Studies & Client Presentation",
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

      {/* WHY UIUX COURSE SECTION */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why UIUX Design at <span className="text-orange-500">ZTECHware?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
              <div className="text-orange-500 text-5xl mb-4">📘</div>
              <h3 className="font-semibold text-xl mb-3">Industry-Driven Design Curriculum </h3>
              <p className="text-gray-600 text-base">
                Learn UI/UX with design thinking, user research, wireframing and modern design standards used by real companies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
              <div className="text-orange-500 text-5xl mb-4">🚀</div>
              <h3 className="font-semibold text-xl mb-3">Hands-On Design Projects</h3>
              <p className="text-gray-600 text-base">
                Create wireframes, prototypes and real UI screens for web & mobile apps using Figma.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
              <div className="text-orange-500 text-5xl mb-4">💼</div>
              <h3 className="font-semibold text-xl mb-3">Portfolio & Career Supports</h3>
              <p className="text-gray-600 text-base">
                Build a strong design portfolio, case studies, resume & get guidance for UI/UX job roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & TOOLS — UI / UX DESIGN */}
      <section className="py-20 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-6">
          Tools & Technologies We Use for UI / UX Design
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          Industry-standard design tools and frameworks used to create modern,
          user-friendly and visually engaging digital experiences.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Design Foundations */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-purple-700 px-6 py-4">
              Design Foundations
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">🎨 Color Theory</li>
              <li className="flex items-center gap-4 py-4">✍️ Typography</li>
              <li className="flex items-center gap-4 py-4">📐 Layout & Grid Systems</li>
              <li className="flex items-center gap-4 py-4">🧠 Design Thinking</li>
            </ul>
          </div>

          {/* Design Tools */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-green-600 px-6 py-4">
              Design Tools
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">🎯 Figma</li>
              <li className="flex items-center gap-4 py-4">🖌 Adobe XD</li>
              <li className="flex items-center gap-4 py-4">📸 Photoshop</li>
              <li className="flex items-center gap-4 py-4">📐 Illustrator</li>
            </ul>
          </div>

          {/* UI / UX Practices */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-yellow-600 px-6 py-4">
              UI / UX Practices
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">🧩 Wireframing</li>
              <li className="flex items-center gap-4 py-4">🔁 Prototyping</li>
              <li className="flex items-center gap-4 py-4">🧪 Usability Testing</li>
              <li className="flex items-center gap-4 py-4">🧭 User Research</li>
            </ul>
          </div>

          {/* Platforms & Deliverables */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-blue-600 px-6 py-4">
              Platforms & Deliverables
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">🌐 Web Applications</li>
              <li className="flex items-center gap-4 py-4">📱 Mobile Apps</li>
              <li className="flex items-center gap-4 py-4">📊 Design Systems</li>
              <li className="flex items-center gap-4 py-4">📁 UI / UX Portfolio</li>
            </ul>
          </div>

        </div>
      </section>
      {/* SYLLABUS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Detailed UI / UX Design Syllabus
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

      {/* FINAL CTA */}
      <section className="py-10 md:py-17 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4">
          Ready to Start Your UI / UX Design Journey?
        </h2>

        <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
          Talk to our design mentor to learn about batches, roadmap,
          real-world projects & career opportunities in UI / UX design.
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
export default UIUXCourse;

