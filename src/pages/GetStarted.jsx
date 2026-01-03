import React, { useState } from "react";

const GetStarted = () => {
  const [result, setResult] = useState("");
  const [type, setType] = useState(""); // service / course

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // 🔑 Web3Forms Access Key (yaha paste karna)
    formData.append("access_key", "7b34693b-e9b3-4435-87f0-b85a1c5ae809");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully! We will contact you soon.");
      event.target.reset();
      setType("");
    } else {
      setResult("❌ Something went wrong. Please try again.");
      console.log(data);
    }
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="bg-white shadow-2xl rounded-3xl max-w-xl w-full p-10 border">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#20004E] text-center mb-8">
          Get Started with ZTechWare
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            className="w-full p-3 rounded-md border border-gray-300"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            className="w-full p-3 rounded-md border border-gray-300"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number *"
            required
            className="w-full p-3 rounded-md border border-gray-300"
          />

          {/* Service or Course */}
          <select
            name="interest_type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300"
          >
            <option value="">Select Interest *</option>
            <option value="Service">Service</option>
            <option value="Course">Course</option>
          </select>

          {/* Services Dropdown */}
          {type === "Service" && (
            <select
              name="selected_service"
              required
              className="w-full p-3 rounded-md border border-gray-300"
            >
              <option value="">Select Service *</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="SEO Services">SEO Services</option>
            </select>
          )}

          {/* Courses Dropdown */}
          {type === "Course" && (
            <select
              name="selected_course"
              required
              className="w-full p-3 rounded-md border border-gray-300"
            >
              <option value="">Select Course *</option>
              <option value="Android Development">Android Development</option>
              <option value="iOS Development">iOS Development</option>
              <option value="React Native">React Native</option>
              <option value="Web Development">Web Development</option>
              <option value="C / C++ Programming">C / C++ Programming</option>
              <option value="Python Programming">Python Programming</option>
              <option value="Java Programming">Java Programming</option>
              <option value="React JS">React JS</option>
              <option value="Django">Django</option>
              <option value="Node JS">Node JS</option>
              <option value="Full Stack Web Development">Full Stack Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          )}

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md border border-gray-300"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#FF6A00] hover:bg-[#ff8533] text-white font-bold py-3 rounded-lg transition-all"
          >
            Submit
          </button>

        </form>

        {/* Result Message */}
        {result && (
          <p className="text-center mt-4 font-medium text-gray-700">
            {result}
          </p>
        )}
      </div>
    </section>
  );
};

export default GetStarted;
