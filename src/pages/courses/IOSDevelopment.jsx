import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BookOpen, Rocket, Briefcase } from "lucide-react";

const modules = [
  {
    title: "Module 1 – Swift & iOS Basics",
    topics: [
      "Introduction to iOS Ecosystem",
      "Swift Language Fundamentals",
      "Xcode Setup & Interface",
      "First App: Hello iOS",
    ],
  },
  {
    title: "Module 2 – UI Design & Navigation",
    topics: [
      "UIKit & SwiftUI Basics",
      "Auto-Layout & Constraints",
      "Navigation Controller & Tab Bar",
      "Reusable Components + MVVM Pattern",
    ],
  },
  {
    title: "Module 3 – API & Data",
    topics: [
      "REST APIs with URLSession & Codable",
      "Core Data & Local Storage",
      "JSON Parsing & Error Handling",
      "Offline Mode & Caching",
    ],
  },
  {
    title: "Module 4 – Firebase & Authentication",
    topics: [
      "Firebase Authentication (Email / Apple)",
      "Firestore Database + Cloud Storage",
      "Push Notifications (APNs + Firebase)",
      "Crashlytics & Analytics",
    ],
  },
  {
    title: "Module 5 – Advanced iOS",
    topics: [
      "Payment Gateway (UPI / Stripe / Razorpay)",
      "MapKit, ARKit & Camera Modules",
      "App Security & Performance",
      "Publishing on App Store",
    ],
  },
];

const IOSDevelopment = () => {
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
              'url("https://images.pexels.com/photos/12570216/pexels-photo-12570216.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="tracking-[6px] font-light text-white/70 text-xs mb-3">
              MOBILE APP CAREER TRACK
            </p>

            <h1 className="text-[2.8rem] md:text-[3.6rem] font-extrabold text-white leading-tight mb-3">
              iOS <span className="block md:inline text-orange-400">Development</span>
            </h1>

            <div className="h-[3px] w-24 bg-white rounded mb-6" />

            <p className="text-lg text-white/90 max-w-xl">
              Master Swift & UIKit to build production-ready iOS apps — UI design, Firebase,
              APIs & deployment to the
              <span className="font-semibold text-white"> Apple App Store</span>.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {["650+ Students", "12 Weeks Program", "5+ Real Apps", "Job-Ready Training"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white/15 backdrop-blur-xl text-white px-4 py-3 rounded-xl text-center text-sm shadow hover:scale-[1.03] transition"
                  >
                    {item}
                  </div>
                )
              )}
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

      {/* ---------------------------------------------------- */}
      {/* NEW — WHAT YOU WILL LEARN SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-14 flex items-center gap-3">
          <span className="w-1.5 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse" />
          What You Will Learn
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            [
              "Swift — Zero to Advanced Programming",
              "UIKit & SwiftUI — UI Development",
              "API integration — URLSession + Codable",
              "Core Data & Local Storage",
            ],
            [
              "Firebase Authentication & Firestore",
              "Performance, security & best practices",
              "Payments, maps, ARKit & SDK integrations",
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

      {/* WHY IOS COURSE SECTION */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why IOS Development at <span className="text-orange-500">ZTECHware?</span>
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
                Interview prep, resume building & referrals to hiring parthers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & FRAMEWORKS — iOS VERSION */}
      <section className="py-20 bg-white text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-6">
          Technology & Frameworks We Use for iOS Development
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          A powerful tech stack used to build modern Apple ecosystem applications.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-purple-700 px-6 py-4">
              Languages
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
                Swift
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg" />
                Objective-C
              </li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-green-600 px-6 py-4">
              Development Tools
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" />
                Xcode
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
                TestFlight
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cocoapods/cocoapods-plain.svg" />
                Fastlane
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
                Swift Playgrounds
              </li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-yellow-600 px-6 py-4">
              Frameworks
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://img.icons8.com/color/48/swiftui.png" />
                SwiftUI
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://www.orangemantra.com/wp-content/uploads/tech-stack/iuikit.png" />
                UIKit
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://img.icons8.com/color/48/arkit.png" />
                ARKit
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://img.icons8.com/color/48/artificial-intelligence.png" />
                CoreML
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-0 overflow-hidden hover:-translate-y-1 transition w-[300px] mx-auto">
            <h3 className="text-xl font-bold text-white bg-blue-600 px-6 py-4">
              Platforms
            </h3>
            <ul className="text-gray-800 text-lg divide-y divide-gray-300 px-6 py-6 space-y-1">
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
                iOS
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://img.icons8.com/ios-filled/50/ipad.png" />
                iPadOS
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://img.icons8.com/fluency/48/mac-os.png" />
                macOS
              </li>
              <li className="flex items-center gap-4 py-4">
                <img className="w-9 -mt-1" src="https://img.icons8.com/ios-filled/50/apple-watch-apps.png" />
                watchOS
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

      {/* CTA */}
      <section className="py-10 md:py-17 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Build Your First iOS App?</h2>
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

export default IOSDevelopment;
