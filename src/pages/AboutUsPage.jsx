import React, { useState } from "react";

const AboutUsPage = () => {
  const heroBG =
    "https://www.shutterstock.com/image-photo/corporate-training-presentation-classroom-computers-600nw-2118852956.jpg";

  const patternBG =
    "https://www.toptal.com/designers/subtlepatterns/uploads/leaves.png";

  const [open, setOpen] = useState(null);
  const toggle = (val) => setOpen(open === val ? null : val);

  return (
    <div className="w-full">

      {/* Hero Banner */}
      <div
        className="relative h-[350px] md:h-[420px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">About Us</h1>
          <p className="mt-3 text-xs sm:text-sm md:text-base tracking-wider font-semibold">
            HOME <span className="text-orange-400 font-bold"> » </span> ABOUT US
          </p>
        </div>
      </div>

      {/* Pattern Background Strip */}
      <div
        className="w-full h-[260px]"
        style={{
          backgroundImage: `url(${patternBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* White About Card */}
      <div className="max-w-6xl mx-auto -mt-48 px-4">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl text-center border border-orange-100">
          <div className="mx-auto mb-6 w-max px-6 py-2 rounded-full bg-orange-100 border border-orange-300 text-orange-700 font-semibold">
            🔶 About Us
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
            Training for new age careers & Helping you create a <br />
            better tomorrow
          </h2>

          <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto mb-8">
            Perfection U is one of the Best IT Training Institutes in Nagpur dedicated to
            introducing new skills and talent into Nagpur’s IT sector. We are a proudly unique
            company with services covering all levels of IT recruitment and skill development.
            Since 2014 we have helped over 4000+ people launch their careers in Tech and Digital
            industries with our blend of training and recruitment services.
          </p>

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-3 rounded-lg font-bold shadow-lg transition">
            Join Now
          </button>
        </div>
      </div>

      {/* ⭐ NEW - Your Journey Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-orange-600 drop-shadow-sm">
          Your Journey at Ztech
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/128/2620/2620739.png",
              title: "Learning",
              desc: "Learn basics & advanced modules from industry experts.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/128/3135/3135673.png",
              title: "Practice",
              desc: "Assignments & tasks to apply everything learned in training.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/128/1633/1633041.png",
              title: "Exam",
              desc: "Evaluation through theory + coding to test real understanding.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/128/2985/2985150.png",
              title: "Live Project",
              desc: "Apply your learning on real-time industrial live projects.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/128/3135/3135823.png",
              title: "Job",
              desc: "Placement support & interview calls for your dream career.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="bg-white border-2 border-orange-400 rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 duration-300"
            >
              <img src={step.img} alt={step.title} className="w-20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-7">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision + Mission */}
      <div className="max-w-6xl mx-auto px-4 mt-20 space-y-6">
        {[
          {
            id: "v",
            title: "Our Vision",
            desc:
              "To unlock 100% potential of every student by providing world-class digital education that brings growth, confidence and success.",
          },
          {
            id: "m",
            title: "Our Mission",
            desc:
              "To transform every learner into highly-skilled, industry-ready talent with live project experience & career mentorship.",
          },
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => toggle(item.id)}
            className="border bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
          >
            <div className="p-7 font-semibold text-2xl flex justify-between items-center">
              {item.title}
              <span className="text-3xl text-orange-600">{open === item.id ? "−" : "+"}</span>
            </div>
            {open === item.id && (
              <div className="px-7 pb-7 text-lg text-gray-600 leading-8 bg-orange-50/40">
                {item.desc}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Counts */}
      <div className="max-w-6xl mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Success Records", count: "150+" },
          { label: "Clients", count: "200+" },
          { label: "Industry Training", count: "100+" },
          { label: "Off Campus Drives", count: "250+" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600">{item.count}</h2>
            <p className="text-gray-700 mt-4 font-semibold text-lg">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Why Perfection U */}
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-orange-700">
          Why Perfection U ?
        </h2>
        <p className="text-gray-700 text-lg leading-9 text-justify bg-white p-10 rounded-3xl shadow-lg">
          Perfection U provides industry-driven IT education with hands-on training,
          projects, soft skills & interview preparation. Our aim is to make students
          confident, skilled and job-ready for the Tech industry.
        </p>
      </div>

      {/* Stats Strip */}
      <div className="bg-orange-100 mt-20 py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {[
            { value: "40K+", desc: "Training Provided" },
            { value: "3K+", desc: "HR Contacts" },
            { value: "35 LPA", desc: "Highest Salary" },
            { value: "600 hrs", desc: "Training Delivered" },
          ].map((box) => (
            <div key={box.desc}>
              <h2 className="text-4xl font-extrabold text-orange-700">{box.value}</h2>
              <p className="text-gray-700 font-medium mt-1">{box.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[
          {
            title: "Innovative",
            desc:
              "We introduce the most innovative and industry-relevant curriculum and training methods.",
          },
          {
            title: "Experienced",
            desc:
              "Our instructors are experienced IT professionals having strong project and corporate exposure.",
          },
          {
            title: "Professional",
            desc:
              "We develop professional discipline, confidence and strong communication traits among students.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="bg-white border border-orange-200 hover:shadow-xl transition p-12 rounded-3xl cursor-pointer text-center"
          >
            <h3 className="text-orange-700 font-bold text-3xl mb-5">{feature.title}</h3>
            <p className="text-gray-600 text-lg leading-8">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Find Course */}
      <div className="bg-orange-100 mt-24 py-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Find Your Best Course With Us
        </h2>

        <div className="flex gap-3 lg:max-w-5xl lg:mx-auto lg:items-center mt-6 py-4 px-5">
          <input
            type="text"
            placeholder="Enter Course Name"
            className="flex-1 border rounded-xl px-2 lg:py-5 text-lg outline-none shadow"
          />
         <div className="call">
           <button className="bg-green-600 hover:bg-green-700 lg:py-6 lg:px-3 px-2 rounded-xl text-white font-bold flex shadow">
            📞 Call Now
          </button>
         </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-10 text-center text-gray-500 text-md font-semibold">
        © 2025 Perfection U | All Rights Reserved
      </div>
    </div>
  );
};

export default AboutUsPage;
