import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Award, BookOpen, Briefcase, Rocket, } from "lucide-react";
const modules = [
  {
    title: "Module 1 – Android & Kotlin Basics",
    topics: [
      "Introduction to Android Ecosystem",
      "Kotlin & Java Fundamentals",
      "Android Studio Setup",
      "First App: Hello Android",
    ],
  },
  {
    title: "Module 2 – UI Design & Navigation",
    topics: [
      "Layouts, Views & XML",
      "RecyclerView & Adapters",
      "Material Design Components",
      "Navigation Component & Fragments",
    ],
  },
  {
    title: "Module 3 – Data & APIs",
    topics: [
      "Room Database & Local Storage",
      "REST APIs with Retrofit",
      "JSON Parsing & Error Handling",
      "Offline Caching Patterns",
    ],
  },
  {
    title: "Module 4 – Firebase & Authentication",
    topics: [
      "Firebase Authentication (Email / Google)",
      "Cloud Firestore & Realtime Database",
      "Cloud Storage for Media",
      "Push Notifications (FCM)",
    ],
  },
  {
    title: "Module 5 – Advanced Features",
    topics: [
      "Payment Gateway Integration",
      "Background Services & WorkManager",
      "App Security & Best Practices",
      "Publishing App on Play Store",
    ],
  },
];

const AndroidDevelopment = () => {
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
              'url("https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_hybrid&w=740&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
           {/* Darkoverlay */}
        <div className="absolute inset-0 bg-black/62"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="tracking-[6px] text-xs text-white/60 mb-3">MOBILE APP CAREER TRACK</p>

            <h1 className="text-[2.9rem] md:text-[3.8rem] font-extrabold leading-tight text-white mb-3">
              Android <span className="text-orange-400">Development</span>
            </h1>

            <div className="h-[4px] w-24 bg-orange-400 rounded mb-6" />

            <p className="text-lg text-white/90">
              Master full-stack Android development using{" "}
              <strong>Kotlin & Java</strong> — UI design, Firebase, APIs,
              security & deployment to the Google Play Store.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              {["850+ Students", "10 Weeks Program", "4+ Real Apps", "Job-Ready Training"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-white/10 backdrop-blur-xl border border-white/15
                  rounded-xl px-4 py-3 text-center text-sm text-white shadow-md
                  hover:border-orange-400 transition"
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
        <h2 className="text-4xl font-extrabold mb-14 flex items-center gap-3">
          <span className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse" />
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            [
              "Kotlin & Java — Zero to Advanced OOP",
              "Material UI, XML & Navigation",
              "API integration — Retrofit + JSON",
              "Room DB & SharedPreferences",
            ],
            [
              "Firebase Authentication & Firestore",
              "Security, performance & best practices",
              "Payments, maps & SDK integrations",
              "Publishing & monetizing apps",
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
                Designed with real input from Android engineers working in the industry.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
              <div className="text-orange-500 text-5xl mb-4">🚀</div>
              <h3 className="font-semibold text-xl mb-3">Project-First Learning</h3>
              <p className="text-gray-600 text-base">
                Build 4+ production-ready apps that strengthen your job portfolio.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition rounded-2xl p-7 border border-orange-100 text-center border border-transparent
hover:border-orange-400
">
              <div className="text-orange-500 text-5xl mb-4">💼</div>
              <h3 className="font-semibold text-xl mb-3">Career & Placement Assistance</h3>
              <p className="text-gray-600 text-base">
                Interview prep, resume building, and referrals to hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TECHNOLOGY & FRAMEWORKS — FINAL CLEAN VERSION */}
      <section className="py-20 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-6">
          Technology & Frameworks We Use for Android Development </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          A powerful tech stack used to build modern Android applications that perform and scale. </p>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-purple-700 px-6 py-4">
              Languages
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-start gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" /> Java </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" /> C++ </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" /> Kotlin </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://www.orangemantra.com/wp-content/uploads/tech-stack/clogo.png" /> C </li>
            </ul>
          </div>
          {/* Development Tools */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-green-600 px-6 py-4">
              Development Tools
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className="w-9 -mt-1" /> Android Studio </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-9 -mt-1" /> Android-IDE </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" className="w-9 -mt-1" /> IntelliJ IDEA </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-9 -mt-1" /> Visual Studio </li>
            </ul>
          </div>
          {/* Frameworks */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-yellow-600 px-6 py-4">
              Frameworks
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img src="https://www.orangemantra.com/wp-content/uploads/tech-stack/coronasdk.png" className="w-9 -mt-1" /> Corona SDK </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" className="w-9 -mt-1" /> Xamarin </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://www.orangemantra.com/wp-content/uploads/tech-stack/phonegap.png" className="w-9 -mt-1" /> PhoneGap </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://www.orangemantra.com/wp-content/uploads/tech-stack/ionic.png" className="w-9 -mt-1" /> Ionic </li>
            </ul>
          </div>
          {/* Platforms */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-blue-600 px-6 py-4">
              Platforms
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-9 -mt-1" /> Android SDK </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://www.orangemantra.com/wp-content/uploads/tech-stack/titaniumlogo.png" className="w-9 -mt-1" /> Titanium Mobile SDK </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" className="w-9 -mt-1" /> Xamarin </li>
              <li className="flex items-center gap-3 py-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-9 -mt-1" /> React Native </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Detailed Course Syllabus</h2>

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
         Ready to Build Andriod developement?
       </h2>
     
       <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
         Fill the form & our counsellor will guide you with batch details & job support.
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

export default AndroidDevelopment;
