import React, { useState } from "react";
import bgImage from "../assets/uiux.png"; 
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUsers, FaChartLine, FaHeadset, FaStar, FaTrophy, FaChartPie } from "react-icons/fa";

const UIDesign = () => {
  const [active, setActive] = useState(0);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a7f37383-9935-4017-8aa4-aa2d0fdb05b9"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! We will contact you shortly.");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  const processSteps = [
    { title: "1 Discovery", description: "We understand your business goals, users, competitors and challenges through workshops, audits and stakeholder discussions." },
    { title: "2 Research", description: "In-depth user research helps us identify user behavior, pain points and expectations to design meaningful experiences." },
    { title: "3 Audit", description: "We analyze existing designs, flows and usability issues to identify opportunities for improvement and optimization." },
    { title: "4 Wireframes", description: "Clear information architecture and wireframes define structure, navigation and content flow before visual design." },
    { title: "5 Design", description: "We create visually appealing, brand-aligned interfaces focused on usability, accessibility and conversion." },
    { title: "6 Prototype", description: "Interactive prototypes simulate real user journeys and allow validation before development begins." },
    { title: "7 Testing", description: "Usability testing ensures the final experience is intuitive, efficient and aligned with real user expectations." },
    { title: "8 Launch", description: "We support seamless handoff, validation and iteration to ensure successful product launch and scalability." }
  ];

  const FAQItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        className="border border-gray-300 rounded-xl px-6 py-5 cursor-pointer bg-white transition-all hover:border-[#FF6A00]"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center text-lg md:text-[20px] font-semibold text-[#20004E]">
          {item.q}
          <span className="text-[#FF6A00] text-3xl leading-none">
            {open ? "−" : "+"}
          </span>
        </div>

        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-4 text-gray-700 text-[17px] leading-7 border-t pt-4 overflow-hidden"
            >
              {item.a}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="w-full text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div
        className="relative w-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-0 py-28 gap-16">

          {/* LEFT SECTION */}
          <div className="lg:w-[58%] space-y-7 drop-shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight">
              UI / UX DESIGN <br />
              <span className="text-orange-400">Services</span>
            </h1>

            <p className="text-[18px] leading-9 max-w-2xl font-serif">
              ZTechWare designs intuitive, user-centric and visually stunning digital experiences.
              We focus on usability, accessibility and conversion-driven design that helps
              businesses engage users and grow faster.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold">
              {["Figma", "Adobe XD", "Photoshop", "User Research", "Wireframing", "Usability Testing"].map((t) => (
                <div
                  key={t}
                  className="bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl text-center py-4 hover:scale-110 transition shadow-lg cursor-pointer"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTACT FORM — WEB3FORMS */}
          <form
            onSubmit={onSubmit}
            className="backdrop-blur-2xl bg-white/20 border border-white/30 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.7)] lg:w-[42%] w-full p-10 space-y-5"
          >
            <h2 className="text-center text-3xl font-bold text-white mb-3">
              Get in Touch
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <input name="name" required className="bg-white/80 rounded-md p-3 w-full text-black" placeholder="Full Name*" />
              <input name="email" type="email" required className="bg-white/80 rounded-md p-3 w-full text-black" placeholder="Business Email Address*" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input name="phone" required className="bg-white/80 rounded-md p-3 w-full text-black" placeholder="+91 Phone Number*" />
              <input name="organization" className="bg-white/80 rounded-md p-3 w-full text-black" placeholder="Organization / Institution*" />
            </div>

            <textarea name="message" rows="4" required className="bg-white/80 rounded-md p-3 w-full text-black" placeholder="Message*"></textarea>

            <input type="hidden" name="from_page" value="UI/UX Services" />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white/20 hover:bg-white/20 text-white font-bold text-lg transition shadow-lg hover:scale-[1.03]"
            >
              Submit
            </button>

            {result && <p className="text-center text-white text-sm mt-3">{result}</p>}
          </form>
        </div>
      </div>

        
      {/* ================= END OF HERO ================= */}


      {/* ================= — ABOUT SECTION (UPDATED) ================= */}
      <section
        className="w-full bg-white py-24 px-6 lg:px-0"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
        {/* 🔥 HEADING CENTER AT TOP */}
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#20004E] leading-tight text-center mb-16">
          <span className="block md:inline">
           UI / UX Design to Elevate Your

          </span>
          <span className="block md:inline md:ml-2 text-orange-600">
            Digital Experience
          </span>
        </h2>
      
        {/* 🔥 IMAGE + CONTENT LAYOUT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT — IMAGE */}
          <div className="w-full flex justify-center ">
            <img
              src="https://jdschoolofdesign.b-cdn.net/wp-content/uploads/2025/06/9.webp"
              alt="Web development"
              className="rounded-3xl shadow-xl w-full object-cover max-h-[500px]"
            />
          </div>
      
          {/* RIGHT — CONTENT */}
          <div className="mt-6 lg:mt-0 font-serif ">
            <p className="text-gray-700 text-[18px] leading-8 mb-5">
              At ZTechWare, we design intuitive, user-centric and visually engaging
              digital experiences that connect users with your brand effortlessly.
              Every interface we create is focused on usability, clarity and
              interaction — ensuring users enjoy every step of their journey.
            </p>
      
            <p className="text-gray-700 text-[18px] leading-8 mb-5 font-serif">
             Whether you are a startup, enterprise or growing brand — our UI/UX
             experts help you build products that users trust and love to use.

            </p>
      
            <p className="text-gray-700 text-[18px] leading-8 font-serif">
              With a strong foundation in user research, wireframing and modern
              design systems. We combine creativity with strategy to deliver
              designs that are scalable, accessible and business-driven.
              Our goal is simple: design experiences that work beautifully
              and grow your business every day.

            </p>
          </div>
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}
   

    {/* ================= WEB DEV — STATS SECTION ================= */}
       <section
         className="w-full bg-white py-24 px-6 "
         style={{ fontFamily: "'Montserrat', sans-serif" }}
       >
         {/* Heading */}
         <h2 className="text-3xl md:text-5xl font-extrabold text-[#20004E] text-center leading-snug mb-6 font-serif">
           A Design Partnership with Ztechware Goes <br /> Beyond UI / UX Design
         </h2>
       
         <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-16 font-serif">
           We don’t just design interfaces — we craft intuitive user experiences
           that increase engagement, build trust and drive meaningful business
           outcomes through research-driven and human-centered design.
          </p>
       
         {/* Stats Grid */}
         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">100+</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Websites Delivered</p>
           </div>
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">200+</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Global Clients</p>
           </div>
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">20+</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Industries Served</p>
           </div>
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">98%</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Client Satisfaction</p>
           </div>
       
         </div>
       </section>



       {/* ================= UI/UX PROCESS — INTERACTIVE ================= */}
<section
  className="w-full bg-white py-24"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
> <h2 className="text-3xl md:text-4xl font-extrabold text-[#20004E] text-center leading-snug mb-20 font-serif">
           The ZTechWare <span className=" font-extrabold text-[#FF7A00] font-serif">UI/UX</span> Process
         </h2>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT — CIRCLE PROCESS */}
    <div className="relative flex items-center justify-center">

      <div className="relative w-[320px] h-[320px] rounded-full border-4 border-[#FF6A00] flex items-center justify-center">

        <span className="absolute text-[#20004E] font-extrabold text-lg">
          UI / UX <br /> PROCESS
        </span>

        {processSteps.map((step, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className="absolute cursor-pointer"
            style={{
              transform: `rotate(${index * 45}deg) translate(140px) rotate(-${index * 45}deg)`
            }}
          >
            <div className="bg-white border border-gray-300 hover:border-[#FF6A00] px-4 py-2 rounded-full text-sm font-semibold text-[#20004E] transition-all">
              {step.title}
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* RIGHT — DESCRIPTION */}
    <div className="min-h-[220px]">

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="bg-white border-l-4 border-[#FF6A00] shadow-lg rounded-xl p-8"
        >
          <h3 className="text-2xl font-extrabold text-[#20004E] mb-4">
            {processSteps[active].title}
          </h3>

          <p className="text-gray-700 leading-7 text-lg">
            {processSteps[active].description}
          </p>
        </motion.div>
      </AnimatePresence>

    </div>
  </div>
      </section>
      {/* ================= END UI/UX PROCESS ================= */}
      
      {/* ================= UI/UX — TECHNOLOGY STACK ================= */}
      <section
        className="w-full bg-white py-24 px-6"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">
      
          {/* 🔹 Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#20004E] font-serif">
              UI/UX <span className="text-[#FF6A00]">Technology Stack</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-8">
              We use industry-leading tools and technologies to design, prototype and
              deliver intuitive digital experiences with speed, precision and scalability.
            </p>
          </div>
      
          {/* 🔹 Vertical Stack Cards */}
          <div className="space-y-12">
      
            {/* 🟣 Card 1 */}
            <div className="border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#20004E] mb-4">
                Programming Languages & Technologies
              </h3>
              <p className="text-gray-700 leading-7 mb-6">
                We use modern front-end technologies to build responsive, fast and
                visually consistent interfaces across devices and platforms.
              </p>
      
              <div className="flex flex-wrap gap-6 items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className="w-10" />
              </div>
            </div>
      
            {/* 🟣 Card 2 */}
            <div className="border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#20004E] mb-4">
                Wireframes & Prototypes
              </h3>
              <p className="text-gray-700 leading-7 mb-6">
                Our designers create interactive wireframes and prototypes to visualize
                user journeys, validate ideas early and gather real-time feedback.
              </p>
      
              <div className="flex flex-wrap gap-6 items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" className="w-10" />
              </div>
            </div>
      
            {/* 🟣 Card 3 */}
            <div className="border border-gray-200 rounded-3xl p-10 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#20004E] mb-4">
                Visual Design Tools
              </h3>
              <p className="text-gray-700 leading-7 mb-6">
                We craft pixel-perfect visuals using powerful design tools that help us
                create engaging, scalable and production-ready UI assets.
              </p>
      
              <div className="flex flex-wrap gap-6 items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" className="w-10" />
                <img src="data:image/jpeg;base64,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" className="w-10" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" className="w-10" />
              </div>
            </div>
      
          </div>
      
          {/* 🔥 CTA */}
          <div className="text-center mt-16">
            <button className="border-2 border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white font-semibold px-10 py-4 rounded-full transition duration-300">
              Contact us
            </button>
          </div>
      
        </div>
      </section>
      {/* ================= END UI/UX — TECHNOLOGY STACK ================= */}
      
      
      
      
      
      {/* ================= UI/UX — DESIGN & DEVELOPMENT SECTION ================= */}
      <section
        className="w-full bg-white py-24 px-6 lg:px-0"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
          {/* 🔹 LEFT — CONTENT */}
          <div>
      
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#20004E] leading-tight mb-8 font-serif">
              Create Seamless User Experiences with <br />
              <span className="text-[#FF6A00]">
                UX/UI Designers & Developers-for-Hire
              </span>
            </h2>
      
            {/* 🔸 Block 1 */}
            <h3 className="text-xl font-semibold text-[#20004E] mb-2">
              UI/UX Design & Development for Mobile Apps
            </h3>
            <p className="text-gray-700 text-[17px] leading-7 mb-6">
              We design mobile-first UI/UX experiences that feel natural, responsive
              and engaging across devices. Our team leverages modern frameworks and
              technologies to fully utilize touchscreen capabilities and deliver
              smooth, intuitive mobile interfaces that users love interacting with.
            </p>
      
            {/* 🔸 Block 2 */}
            <h3 className="text-xl font-semibold text-[#20004E] mb-2">
              Front-End Programming Excellence
            </h3>
            <p className="text-gray-700 text-[17px] leading-7 mb-6">
              Our front-end specialists build clean, scalable and performance-optimized
              interfaces using core technologies like HTML5, CSS and JavaScript along
              with modern frameworks. Every line of code is written to ensure seamless
              compatibility across multiple devices, screen sizes and browsers.
            </p>
      
            {/* 🔸 Block 3 */}
            <h3 className="text-xl font-semibold text-[#20004E] mb-2">
              Intuitive & Interactive Solutions
            </h3>
            <p className="text-gray-700 text-[17px] leading-7">
              We follow proven UI standards such as Human Interface Guidelines (HIG)
              and Material Design principles to create goal-driven, user-friendly
              experiences. Our designs focus on clarity, interaction and usability,
              enabling effortless communication between users and digital products.
            </p>
      
          </div>
      
          {/* 🔹 RIGHT — IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src="https://i.pinimg.com/736x/33/b7/62/33b762ed8753e748e26bc0ee2fcf7c72.jpg"
              alt="UI UX Design Mobile App"
              className="w-full max-w-md rounded-3xl shadow-xl object-cover"
            />
          </div>
      
        </div>
      </section>
      {/* ================= END UI/UX — DESIGN & DEVELOPMENT SECTION ================= */}
      
        {/* ================= VIDEO BG — HERO CTA SECTION ================= */}
            <section className="relative w-full h-[420px] md:h-[400px] overflow-hidden font-serif">
            
              {/* 🎥 Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://static.vecteezy.com/system/resources/previews/040/863/509/mp4/dark-abstract-geometric-technology-background-with-a-repeating-minimalist-pattern-of-blue-square-shapes-and-dashed-lines-full-hd-and-looping-textured-tech-background-free-video.mp4" 
                autoPlay
                loop
                muted
                playsInline
              />
            
              {/* 🌫️ Light overlay (image jaisa soft look) */}
              <div className="absolute inset-0 bg-white/10"></div>
            
              {/* 📌 Content */}
              <div
                className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 "
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-white max-w-4xl leading-tight mb-8 font-serif">
                  Elevating Your Business with <br />
                  User-Centric UI/UX Design Solutions
                </h2>
            
            <Link to="/getstarted">
                 <button className="font-serif bg-[#FF6A00] hover:bg-[#ff8533] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
               Get Started
             </button>
           </Link>
              </div>
            
            </section>
            {/* ================= END VIDEO BG — HERO CTA ================= */}
      
      
            {/* ================= UI/UX — FAQ SECTION ================= */}
      <section
        className="w-full bg-white py-20 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-200">
      
          {/* HEADING */}
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#20004E] mb-14">
            Frequently Asked Questions
          </h2>
      
          {/* FAQ LIST */}
          <div className="space-y-6">
            {[
              {
                q: "Why is UI/UX design important for a digital product?",
                a: "UI/UX design improves usability, increases user engagement, reduces bounce rates, and helps convert visitors into loyal customers by creating seamless and intuitive experiences.",
              },
              {
                q: "What UI/UX services does ZTechWare provide?",
                a: "We offer end-to-end UI/UX services including user research, wireframing, prototyping, UI design, UX strategy, usability testing, and design system creation.",
              },
              {
                q: "Do you design UI/UX for both web and mobile applications?",
                a: "Yes. We design user experiences for websites, web apps, mobile apps (Android & iOS), dashboards, SaaS platforms, and enterprise solutions.",
              },
              {
                q: "How do you ensure a user-friendly design?",
                a: "We follow data-driven design principles, user research, usability testing, and global UI/UX guidelines like Material Design and Human Interface Guidelines (HIG).",
              },
              {
                q: "Will you provide UI/UX support after project completion?",
                a: "Absolutely. We provide continuous design support, improvements, usability optimization, and UI enhancements as your product grows.",
              },
            ].map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
      
        </div>
      </section>
      {/* ================= END UI/UX — FAQ SECTION ================= */}
      
      
      
      
      
      
  </div>
    );
};

export default UIDesign;

