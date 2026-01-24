import React, { useState } from "react";
import bgImage from "../assets/webd.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUsers, FaChartLine, FaHeadset, FaStar, FaTrophy, FaChartPie } from "react-icons/fa";

const Webdevelopement = () => {
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

  // FAQ ITEM — UNCHANGED
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
      {/* ================= HERO + CONTACT ================= */}
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
              Web Development <br />
              <span className="text-orange-400">Services</span>
            </h1>

            <p className="text-[18px] leading-9 max-w-2xl font-serif">
              Ztechware builds high-performance, secure and visually stunning websites crafted for startups,
              enterprises and growing brands. We focus on speed, responsiveness, SEO and user-first design.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold">
              {[
                "React.js",
                "Next.js",
                "Vue.js",
                "Node.js",
                "Python (Django / Flask)",
                "PHP / Laravel",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl text-center py-4 hover:scale-110 transition shadow-lg cursor-pointer"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTACT FORM — WEB3FORMS CONNECTED */}
          <form
            onSubmit={onSubmit}
            className="backdrop-blur-2xl bg-white/20 border border-white/30 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.7)] lg:w-[42%] w-full p-10 space-y-5"
          >
            <h2 className="text-center text-3xl font-bold text-white mb-3">
              Get in Touch
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                required
                className="bg-white/80 rounded-md p-3 w-full text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email Address*"
                required
                className="bg-white/80 rounded-md p-3 w-full text-black"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="phone"
                placeholder="+91 Phone Number*"
                required
                className="bg-white/80 rounded-md p-3 w-full text-black"
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization / Institution*"
                className="bg-white/80 rounded-md p-3 w-full text-black"
              />
            </div>

            <textarea
              rows="4"
              name="message"
              placeholder="Message*"
              required
              className="bg-white/80 rounded-md p-3 w-full text-black"
            ></textarea>

            <input type="hidden" name="from_page" value="Web Development Services" />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white/20 hover:bg-white/20 text-white font-bold text-lg transition shadow-lg hover:scale-[1.02]"
            >
              Submit
            </button>

            {result && (
              <p className="text-center text-white text-sm mt-3">
                {result}
              </p>
            )}
          </form>

        </div>
      </div>
        
      {/* ================= END OF HERO ================= */}

       
      {/* ================= WEB DEV — ABOUT SECTION (UPDATED) ================= */}
      <section
        className="w-full bg-white py-24 px-6 lg:px-0"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
        {/* 🔥 HEADING CENTER AT TOP */}
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#20004E] leading-tight text-center mb-16">
          <span className="block md:inline">
            Web Development to Transform Your
          </span>
          <span className="block md:inline md:ml-2 text-orange-600">
            Digital Presence
          </span>
        </h2>
      
        {/* 🔥 IMAGE + CONTENT LAYOUT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* LEFT — IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src="https://media.istockphoto.com/id/616902766/photo/dedicated-to-software-development.jpg?s=612x612&w=0&k=20&c=DbeQZha7EDOxSCK49IOzP6DaVJaBElzFItOVJKQSDek="
              alt="Web development"
              className="rounded-3xl shadow-xl w-full object-cover max-h-[500px]"
            />
          </div>
      
          {/* RIGHT — CONTENT */}
          <div className="mt-6 lg:mt-0">
            <p className="text-gray-700 text-[18px] leading-8 mb-5">
              At ZTechWare, we build modern, high-performance and visually stunning
              websites that convert visitors into customers. Every website we create
              is responsive, secure and optimized for both users and search engines.
            </p>
      
            <p className="text-gray-700 text-[18px] leading-8 mb-5">
              Whether you’re a startup, enterprise or personal brand — our team helps
              you launch a powerful digital identity that drives revenue and trust.
              From business websites to complex web applications, we focus on speed,
              automation and seamless user experience.
            </p>
      
            <p className="text-gray-700 text-[18px] leading-8">
              With global-standard UI/UX practices, scalable architecture and
              performance-driven development — we ensure your website becomes an
              asset that grows your business every single day.
            </p>
          </div>
        </div>
      </section>
      {/* ================= END WEB DEV — ABOUT SECTION ================= */}

      {/* ================= WEB DEV — STATS SECTION ================= */}
       <section
         className="w-full bg-white py-24 px-6 "
         style={{ fontFamily: "'Montserrat', sans-serif" }}
       >
         {/* Heading */}
         <h2 className="text-3xl md:text-5xl font-extrabold text-[#20004E] text-center leading-snug mb-6 font-serif">
           A Technology Partnership with Ztechware Goes <br /> Beyond Web Development
         </h2>
       
         <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto mb-16 font-serif">
           We don’t just build websites — we create scalable digital experiences that boost growth,
           conversions and long-term business success.
         </p>
       
         {/* Stats Grid */}
         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">500+</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Websites Delivered</p>
           </div>
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">200+</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Global Clients</p>
           </div>
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">50+</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Industries Served</p>
           </div>
       
           <div className="rounded-[32px] border-[3px] border-[#ff9e3d] bg-white py-12 shadow-md hover:shadow-xl transition">
             <h3 className="text-6xl font-extrabold text-[#FF7A00] mb-3 font-serif">98%</h3>
             <p className="text-[20px] font-semibold font-serif text-[#150038]">Client Satisfaction</p>
           </div>
       
         </div>
       </section>
       
       
       
      {/* ================= CUSTOM WEBSITE DESIGN SECTION (FIXED HOVER) ================= */}
       <section
         className="w-full bg-white py-16 px-6"
         style={{ fontFamily: "'Montserrat', font-serif" }}
       >
         {/* Small heading */}
         <h3 className="text-[#2AA2A3] text-center text-xl md:text-2xl font-medium mb-3 tracking-wide">
           Create websites that reflect who you are and where you're going.
         </h3>
       
         {/* Main heading */}
         <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#20004E] mb-16">
           Custom Website Design That Matches Your Vision
         </h2>
       
         {/* GRID EXACT SAME BUT SMALLER */}
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-10 ">
       
           {/* LEFT — CARD 1 (NO HOVER) */}
           <div className="flex items-start gap-5 border border-[#8AD6D2] rounded-2xl p-8 shadow-sm
                        transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,160,150,0.3)] hover:border-[#2AA2A3] cursor-pointer">
             <img src="https://tse1.mm.bing.net/th/id/OIP.IFCrtcW3UTRJLxaWLJIoOgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" className="w-10 opacity-70" />
             <div className="overflow-hidden" >
               <h3 className="text-[#2AA2A3] text-lg font-bold mb-1">Tailored to Your Brand Identity</h3>
               <p className="text-gray-600 text-[16px] leading-7 w-[320px]">
                 We align visual & structural elements to match your brand identity.
               </p>
             </div>
           </div>
       
           {/* RIGHT — BOX 1 (HOVER ENABLED) */}
           <div
             className="flex items-start gap-5 border border-[#8AD6D2] rounded-2xl p-8 shadow-sm 
                        transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,160,150,0.3)] hover:border-[#2AA2A3] cursor-pointer"
           >
             <img src="https://tse1.mm.bing.net/th/id/OIP.vqYHag0qPA571TJG0Q1l1gHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" className="w-10 opacity-70" />
             <div  className="overflow-hidden">
               <h3 className="text-[#2AA2A3] text-xl font-bold mb-1">Built from Scratch, Not Templates</h3>
               <p className="text-gray-600 text-[16px] leading-7 w-[350px]">
                 Custom-coded websites crafted line-by-line to match your brand.
               </p>
             </div>
           </div>
       
           {/* LEFT — CARD 3 (NO HOVER) */}
           <div className="flex items-start gap-5 border border-[#8AD6D2] rounded-2xl p-8 shadow-sm
                        transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,160,150,0.3)] hover:border-[#2AA2A3] cursor-pointer">
             <img src="https://tse1.mm.bing.net/th/id/OIP.vqYHag0qPA571TJG0Q1l1gHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" className="w-10 opacity-70" />
             <div  className="overflow-hidden">
               <h3 className="text-[#2AA2A3] text-xl font-bold mb-1">Strategic Visual Hierarchy</h3>
               <p className="text-gray-600 text-[16px] leading-7 w-[320px]">
                 Clean layouts that guide users smoothly through your content.
               </p>
             </div>
           </div>
       
           {/* RIGHT — BOX 2 (HOVER ENABLED — FIXED!) */}
           <div
             className="flex items-start gap-5 border border-[#8AD6D2] rounded-2xl p-8 shadow-sm
                        transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,160,150,0.3)] hover:border-[#2AA2A3] cursor-pointer"
           >
             <img src="https://tse1.mm.bing.net/th/id/OIP.IFCrtcW3UTRJLxaWLJIoOgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" className="w-10 opacity-70" />
             <div  className="overflow-hidden">
               <h3 className="text-[#2AA2A3] text-xl font-bold mb-1">Designed for Real Business Results</h3>
               <p className="text-gray-600 text-[16px] leading-7 w-[350px]">
                 Layouts designed to increase conversions, engagement & long-term results.
               </p>
             </div>
           </div>
       
           {/* LEFT — CARD 5 (NO HOVER) */}
           <div className="flex items-start gap-5 border border-[#8AD6D2] rounded-2xl p-8 shadow-sm
                        transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,160,150,0.3)] hover:border-[#2AA2A3] cursor-pointer">
             <img src="https://tse1.mm.bing.net/th/id/OIP.IFCrtcW3UTRJLxaWLJIoOgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" className="w-10 opacity-70" />
             <div  className="overflow-hidden">
               <h3 className="text-[#2AA2A3] text-xl font-bold mb-1">Future-Proof and Scalable</h3>
               <p className="text-gray-600 text-[16px] leading-7 w-[320px]">
                 We build systems that evolve as your business grows.
               </p>
             </div>
           </div>
       
         </div>
       </section>
      {/* ================= END SECTION ================= */}
       
      {/* ================= WEB DEVELOPMENT PROCESS (HOVER TIMELINE) ================= */}
      <section
        className="w-full bg-white py-28 px-6 font-serif"
        style={{ fontFamily: "'Montserrat', " }}
      >
        <div className="max-w-7xl mx-auto ">
      
          {/* TOP CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <h2 className="text-4xl md:text-4xl font-extrabold text-[#20004E] leading-tight">
              Leverage our proven <br />
              <span className="text-orange-500 text-4xl md:text-5xl">Web Development Process</span>
            </h2>
      
            <p className="text-gray-700 text-lg leading-8 max-w-xl">
             We’ve delivered many high-performance websites for startups, enterprises and growing brands across diverse industries. Our structured web development process focuses on speed, scalability and long-term business growth — not just at launch, but throughout your digital journey. From strategic planning to final deployment, every step is carefully executed to build secure, future-ready and results-driven web solutions that help your business stand out and scale confidently.
            </p>
          </div>
      
          {/* PROCESS STEPS */}
          <div className="flex flex-col lg:flex-row border-t border-gray-200">
      
            {[
              {
                step: "01",
                title: "Consult your idea",
                desc: "We understand your goals, users and challenges to define the right digital direction."
              },
              {
                step: "02",
                title: "Choose a technology",
                desc: "We help you select the right frontend & backend stack for performance and scalability."
              },
              {
                step: "03",
                title: "Design",
                desc: "UI/UX focused designs that improve engagement, trust and conversion rates."
              },
              {
                step: "04",
                title: "Develop",
                desc: "Clean, secure and scalable code built using modern development practices."
              },
              {
                step: "05",
                title: "Launch & scale",
                desc: "We deploy, monitor and optimize your website for long-term success."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group relative flex-1 min-h-[240px]
                  border-r last:border-r-0 
                  px-6 py-10 cursor-pointer
                  transition-all duration-500
                  hover:bg-orange-50 
                "
              >
                {/* STEP NUMBER */}
                <div className="text-5xl font-bold lg:text-gray-300 lg:group-hover:text-orange-500 transition text-orange-500/60">
                  {item.step}
                </div>
      
                {/* CONTENT */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-[#20004E] mb-3">
                    {item.title}
                  </h3>
      
                  <p className="
                    text-gray-600 text-sm leading-7
                    lg:opacity-0  translate-x-4
                    group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-500 
                  ">
                    {item.desc}
                  </p>
                </div>
      
                {/* HOVER INDICATOR */}
                <span className="
                  absolute left-0 top-0 h-full w-1 bg-orange-500
                  scale-y-0 group-hover:scale-y-100
                  transition-transform duration-500 origin-top
                "></span>
              </div>
            ))}
      
          </div>
      
          </div>
         </section>
        {/* ================= END WEB DEVELOPMENT PROCESS ================= */}
        
      
      
      {/* ================= WEB DEV — TECHNOLOGIES WE USE ================= */}
      <section
        className="w-full bg-white py-20 overflow-hidden"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* HEADING */}
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center font-serif">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#20004E]">
            Technologies <span className="text-[#FF6A00]">We Use</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Modern frontend & backend technologies powering scalable web solutions
          </p>
        </div>
      
        {/* SCROLLING TECH STACK */}
        <div className="relative w-full overflow-hidden py-4 font-serif">
          <motion.div
            className="flex gap-16 w-max px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
              },
              {
                name: "Vue.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
              },
              {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "Java",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "PHP",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
      
              // {/* 🔁 DUPLICATED FOR INFINITE SCROLL */},
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
              },
              {
                name: "Vue.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
              },
              {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "Java",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "PHP",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0px 10px 35px rgba(224, 187, 161, 0.35)",
                }}
                className="
                  flex items-center gap-4
                  px-6 py-4
                  rounded-full
                  border border-gray-200
                  bg-white
                  cursor-pointer
                  transition-all
                "
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-9 h-9 object-contain"
                />
                <span className="text-lg font-semibold text-[#20004E]">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ================= END WEB DEV — TECHNOLOGIES ================= */}
      
      
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
            Elevating Your Business with Our <br />
            Customized Web Development Solutions
          </h2>
      
          <Link to="/getstarted">
             <button className="font-serif bg-[#FF6A00] hover:bg-[#ff8533] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
               Get Started
             </button>
           </Link>
        </div>
      
      </section>
      {/* ================= END VIDEO BG — HERO CTA ================= */}



      {/* ================= — FAQ SECTION ================= */}
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
          q: "Why does my business need a professional website?",
          a: "A professional website builds trust, improves brand credibility, increases conversions and acts as a 24/7 digital sales channel for your business.",
        },
        {
          q: "What types of websites do you develop?",
          a: "We develop business websites, eCommerce stores, SaaS platforms, web applications and enterprise-level solutions.",
        },
        {
          q: "Are your websites mobile-friendly and responsive?",
          a: "Yes. Every website we build is fully responsive and optimized for mobile, tablet and desktop devices.",
        },
        {
          q: "Which technologies do you use for web development?",
          a: "We use modern technologies like React, Next.js, Angular, Node.js, PHP, Python and cloud-based solutions.",
        },
        {
          q: "Do you offer website maintenance services?",
          a: "Yes. We provide regular updates, security patches, performance optimization and feature enhancements.",
        },
            ].map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
      
        </div>
      </section>
      {/* ================= — FAQ SECTION ================= */}

      
            
            
                   
                    
       
             
  </div>
  );
};

export default Webdevelopement;
