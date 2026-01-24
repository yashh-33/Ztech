import React, { useState } from "react";

const courses = [
  "Android Development",
  "iOS Development",
  "Full Stack Development",
  "React JS",
  "Node JS",
  "UI / UX Design",
];

const Enrollcourse = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
            Professional Training Programs
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-slate-900 leading-snug">
            Learn Skills.<br />
            Build a Successful Career.
          </h1>

          <p className="mt-4 text-base text-slate-600 max-w-lg">
            Career-focused courses designed by industry experts with
            real-world projects, mentorship and placement guidance.
          </p>

          {/* COURSES */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {courses.map((course) => (
              <div
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`cursor-pointer rounded-lg px-5 py-4 transition
                ${
                  selectedCourse === course
                    ? "bg-white border border-orange-500"
                    : "bg-white border border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3 className="text-sm font-medium text-slate-800">
                  {course}
                </h3>
                <p className="text-xs text-slate-700 mt-1">
                  Job-ready training
                </p>
              </div>
            ))}
          </div>

          {/* TRUST */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-700">
            <span>✔ Industry aligned</span>
            <span>✔ Real projects</span>
            <span>✔ Expert mentors</span>
            <span>✔ Placement support</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-slate-200 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Enroll Now
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Our counselor will contact you shortly
          </p>

          {/* 🔥 WEB3FORMS FORM */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-6 space-y-4"
          >
            {/* 🔑 YOUR ACCESS KEY */}
            <input type="hidden" name="access_key" value="a7f37383-9935-4017-8aa4-aa2d0fdb05b9" />

            {/* OPTIONAL META */}
            <input type="hidden" name="subject" value="New Course Enrollment" />
            <input type="hidden" name="from_name" value="ZTECH Website" />

            <Field label="Full Name" name="name" />
            <Field label="Mobile Number" name="phone" />
            <Field label="Email Address" name="email" type="email" />

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Select Course
              </label>
              <select
                name="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
                className="w-full h-10 rounded-md border border-slate-300 px-3
                text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option value="">Choose a course</option>
                {courses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-md bg-orange-600
              text-white text-sm font-medium hover:bg-orange-700 transition"
            >
              Submit
            </button>
          </form>

          <p className="mt-4 text-[11px] text-slate-600 text-center">
            We respect your privacy. No spam communication.
          </p>
        </div>

      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text" }) => (
  <div>
    <label className="block text-xs font-medium text-slate-600 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required
      className="w-full h-10 rounded-md border border-slate-300 px-3
      text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
    />
  </div>
);

export default Enrollcourse;
