import React, { useState } from "react";
import bgImage from "../assets/mobile-dev-img.png";
import { FaUsers, FaChartLine, FaHeadset, FaStar, FaTrophy, FaChartPie } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileApps = () => {
  const [active, setActive] = useState(0);
  const [result, setResult] = useState("");

  // ✅ WEB3FORMS SUBMIT FUNCTION
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a7f37383-9935-4017-8aa4-aa2d0fdb05b9"); // 🔑 CHANGE THIS

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
        className="relative w-full min-h-screen flex items-center absolute inset-0 bg-black/62"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-0 py-28 gap-16">

          {/* LEFT */}
          <div className="lg:w-[58%] space-y-7 drop-shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight">
              Mobile App Development <br />
              <span className="text-orange-400">Services</span>
            </h1>

            <p className="text-[18px] leading-9 max-w-2xl font-serif">
              Ztechware builds scalable, secure and visually stunning mobile applications
              tailored for startups, enterprises and brands.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold">
              {["Android App", "iOS App", "React Native", "Hybrid Apps", "Cross Platform", "Flutter"].map((t) => (
                <div
                  key={t}
                  className="bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl text-center py-4 hover:scale-110 transition shadow-lg cursor-pointer"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — WEB3FORMS CONNECTED */}
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

            <input type="hidden" name="from_page" value="Mobile App Services" />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white/20 hover:bg-white/20 text-white font-bold text-lg transition shadow-lg hover:scale-[1.03]"
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

      {/* ================= NEXT SECTION (WHITE + ORANGE THEME) ================= */}
      <div className="w-full bg-white text-[#ff7a00] py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#150038] mb-6 font-serif ">
            A Technology Partnership with Ztechware goes beyond Development
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-8 mb-14 text-4xl md:text-1.9x font-serif">
            Our advanced mobile development approach helps businesses create impact globally.
            From building strong digital products to delivering outstanding user experiences,
            our work reflects trust, results and innovation.
          </p>

          {/* STATS GRID — MODERN STYLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
            {[
              { count: "100+", label: "Job Oriented Courses" },
              { count: "250+", label: "Student" },
              { count: "35+", label: "Courses" },
              { count: "150+", label: "Placed Student" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl shadow-xl border-2 border-orange-300 bg-white hover:-translate-y-1 transition p-10 text-center"
              >
                <p className="text-5xl font-extrabold">{item.count}</p>
                <p className="mt-3 text-gray-700 text-xl font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* ================= MOBILE SERVICES FEATURES – TOTAL 6 CARDS ================= */}
      <div className="w-full bg-white text-center py-24 px-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
        {/* Heading (optional – remove if already included above) */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#150038] mb-6 font-orange-300 font-serif">
          Our Mobile Application Development Services
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-8 mb-14 text-4xl md:text-1.9xl font-serif">
          From Android & iOS to Hybrid and IoT applications — our expert team builds high-performance,
          scalable and user-friendly mobile apps tailored for modern businesses and startups.
        </p>
      
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          
          {/* ANDROID DEVELOPMENT */}
          <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-10 bg-white cursor-pointer hover:bg-orange-100 duration-300">
            <img src="https://th.bing.com/th/id/OIP.ObI_dMZ-IfHqfT0Ow5n2LAHaIE?w=171&h=186&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" className="mx-auto w-16 mb-6" />
            <h3 className="text-2xl font-bold text-[#14082A] mb-4 font-serif">Android App Development</h3>
            <p className="text-gray-600 text-[16px] leading-7 mb-6 font-serif">
              Build powerful, secure and UI/UX rich Android applications using the latest frameworks tailored
              to business needs and seamless performance.
            </p>
          </div>
      
          {/* iOS DEVELOPMENT */}
          <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-10 bg-white cursor-pointer hover:bg-orange-50 duration-300">
            <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" className="mx-auto w-16 mb-6" />
            <h3 className="text-2xl font-bold text-[#14082A] mb-4 font-serif">iOS App Development</h3>
            <p className="text-gray-600 text-[16px] leading-7 mb-6 font-serif">
              Develop high-performance, enterprise-grade iOS apps with excellent UI, high stability and strong
              security for iPhone & iPad users.
            </p>
          </div>
      
          {/* REACT NATIVE */}
          <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-10 bg-white cursor-pointer hover:bg-orange-50 duration-300">
            <img src="https://tse4.mm.bing.net/th/id/OIP.j0iemJ5sLkjwI9YiyMmmQQAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" className="mx-auto w-16 mb-6" />
            <h3 className="text-2xl font-bold text-[#14082A] mb-4 font-serif">React Native Development</h3>
            <p className="text-gray-600 text-[16px] leading-7 mb-6 font-serif">
              Build cost-effective, high-performance cross-platform apps with native-like performance using
              React Native for both Android & iOS.
            </p>
          </div>
      
          {/* PWA DEVELOPMENT */}
          <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-10 bg-white cursor-pointer hover:bg-orange-50 duration-300">
            <img src="https://tse1.mm.bing.net/th/id/OIP.2p6vIDokLKUmTapGvaI4AwHaHa?cb=ucfimg2&ucfimg=1&w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3" className="mx-auto w-16 mb-6" />
            <h3 className="text-2xl font-bold text-[#14082A] mb-4 font-serif">PWA Development</h3>
            <p className="text-gray-600 text-[16px] leading-7 mb-6 font-serif">
              Build progressive web apps with features of both mobile & web platforms offering seamless performance
              and broad device compatibility.
            </p>
          </div>
      
          {/* IOT APPS */}
          <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-10 bg-white cursor-pointer hover:bg-orange-50 duration-300">
            <img src="data:image/webp;base64,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" className="mx-auto w-16 mb-6" />
            <h3 className="text-2xl font-bold text-[#14082A] mb-4 font-serif">IoT Apps</h3>
            <p className="text-gray-600 text-[16px] leading-7 mb-6 font-serif">
              Build IoT-enabled apps with real-time device communication, automation and data-driven decision making
              for smart industries.
            </p>
          </div>
      
          {/* M-COMMERCE APPS */}
          <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition p-10 bg-white cursor-pointer hover:bg-orange-50 duration-300">
            <img src="https://th.bing.com/th/id/OIP.16fRKVAJaLt0HpSnsWz1TQHaHa?w=193&h=193&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" className="mx-auto w-16 mb-6" />
            <h3 className="text-2xl font-bold text-[#14082A] mb-4 font-serif">m-Commerce Apps</h3>
            <p className="text-gray-600 text-[16px] leading-7 mb-6 font-serif">
              Boost business growth with fast and secure mobile commerce apps designed to maximize conversions,
              reach and customer satisfaction.
            </p>
          </div>
      
        </div>
      </div>

      {/* ================= MOBILE APP DEVELOPMENT PROCESS ================= */}
       <div className="w-full bg-white py-24 px-6 md:px-14 lg:px-24" style={{ fontFamily: "'Montserrat', sans-serif" }}>
       
         {/* GRID LAYOUT */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
       
           {/* LEFT SIDE TEXT */}
           <div className="space-y-6">
             <h2 className="text-4xl md:text-5xl font-extrabold text-[#20004E] leading-tight font-serif">
               Our Mobile Application Development <br /> Process
             </h2>
             <p className="text-gray-700 lg:text-2xl text-lg leading-8 max-w-2xl font-serif">
               At ZTechWare, we turn ideas into high-performing mobile apps that users love and businesses rely on.
               Our development approach blends modern UI/UX, powerful architecture and seamless functionality to create apps built for growth.
               Fast. Secure. Scalable. Future-ready — that’s how we build every project.
             </p>
           </div>
       
           {/* RIGHT SIDE — TIMELINE */}
           <div className="relative pl-20">
       
             {/* Vertical line */}
             <div className="absolute top-0 left-8 w-[3px] bg-orange-500 h-full rounded-full"></div>
       
             {/* STEP 1 */}
             <div className="flex items-start gap-6 relative mb-20 ">
               {/* Step icon */}
               <div className="lg:w-30 lg:h-20 lg:px-3 w-60 rounded-xl bg-orange-100 flex items-center justify-center shadow-md">
                 <img src="https://www.orangemantra.com/wp-content/uploads/2023/10/process-discovery.png" className="w-12" />
               </div>
               <div>
                 <h3 className="lg:text-3xl text-xl font-bold text-[#20004E] font-serif">Initial Analysis</h3>
                 <p className="text-gray-700 lg:text-lg text-lg leading-8 mt-2 font-serif">
                   We begin by gathering and analyzing your requirements, defining the
                   best development strategy through our experienced experts.
                 </p>
               </div>
       
               {/* Connector Arrow */}
               <div className="absolute left-8 top-[95%] translate-x-[-36%] text-3xl text-orange-500">
                 ⬇
               </div>
             </div>
       
             {/* STEP 2 */}
             <div className="flex items-start gap-6 relative mb-20">
               <div className="lg:w-30 lg:h-20 lg:px-3 w-60 rounded-xl bg-orange-100 flex items-center justify-center shadow-md">
                 <img src="https://cdn-icons-png.flaticon.com/512/8501/8501358.png" className="w-12" />
               </div>
               <div>
                 <h3 className="lg:text-3xl text-xl font-bold text-[#20004E] font-serif">Designing</h3>
                 <p className="text-gray-700 text-lg leading-8 mt-2 font-serif">
                   Our design team creates wireframes & prototypes that define layout,
                   UI/UX structure and overall visual experience of the application.
                 </p>
               </div>
       
               <div className="absolute left-8 top-[95%] translate-x-[-36%] text-3xl text-orange-500">
                 ⬇
               </div>
             </div>
       
             {/* STEP 3 */}
              <div className=" flex items-start gap-6 relative mb-20">
               <div className="lg:w-30 lg:h-20 lg:px-3 w-60 rounded-xl bg-orange-100 flex items-center justify-center shadow-md">
                 <img src="https://cdn-icons-png.flaticon.com/512/8432/8432981.png" className="w-12" />
               </div>
               <div>
                 <h3 className="lg:text-3xl text-xl font-bold text-[#20004E] font-serif">Development</h3>
                 <p className="text-gray-700 text-lg leading-8 mt-2 font-serif">
                   Our experts develop fast, scalable & feature-rich apps using the
                   latest frameworks, ensuring high performance & seamless user
                   experience.
                 </p>
               </div>
       
               
             </div>
            </div>
          </div>
         </div>


      {/* ==================== TECHNICAL EXPERTISE SECTION ==================== */}
      <section
        className="w-full bg-white py-5"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-4xl md:text-5xl font-extrabold text-[#ff6a00] font-serif">
          Technical Expertise for Mobile App
        </h2>
        <p className="text-center px-3 text-gray-700 mt-5 text-lg lg:text-lg max-w-3xl mx-auto font-serif">
          We employ industry-leading technologies to build future-driven,
          high-performance mobile applications that help brands grow faster.
        </p>
      
        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 mt-14">
      
          {/* Languages */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300">
            <div className="bg-[#20004E] text-white rounded-t-2xl px-5 py-3 text-xl font-bold">
              Languages
            </div>
            <ul className="px-6 py-5 text-gray-800 text-[17px] space-y-4 font-serif ">
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Java</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">HTML5</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">C++</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Swift</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">PHP</li>
            </ul>
          </div>
      
          {/* Tools */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300">
            <div className="bg-[#20004E] text-white rounded-t-2xl px-5 py-3 text-xl font-bold">
              Tools
            </div>
            <ul className="px-6 py-5 text-gray-800 text-[17px] space-y-4 font-serif">
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Apache Cordova</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Appcelerator</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">WidgetPad</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">RhoMobile Suite</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Solar2D</li>
            </ul>
          </div>
      
          {/* Frameworks */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300">
            <div className="bg-[#20004E] text-white rounded-t-2xl px-5 py-3 text-xl font-bold">
              Frameworks
            </div>
            <ul className="px-6 py-5 text-gray-800 text-[17px] space-y-4 font-serif">
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Flutter</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Ionic</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Xamarin</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">Felgo</li>
              <li className="relative pl-6 before:content-['➣'] before:absolute before:left-0 before:text-[#ff6a00] hover:text-[#ff6a00] transition">React Native</li>
            </ul>
          </div>
      
          {/* Integrations */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300">
            <div className="bg-[#20004E] text-white rounded-t-2xl px-5 py-3 text-xl font-bold">
              Service Integrations
            </div>
            <ul className="px-6 py-5 text-gray-800 text-[17px] space-y-4 font-serif">
              <li className="hover:text-[#ff6a00] transition">Payment Gateway</li>
              <li className="hover:text-[#ff6a00] transition">Live & Video Streaming</li>
              <li className="hover:text-[#ff6a00] transition">Chat, Audio & Video Call</li>
              <li className="hover:text-[#ff6a00] transition">In-App Purchase</li>
              <li className="hover:text-[#ff6a00] transition">AR & VR Integration</li>
            </ul>
          </div>
      
        </div>
      </section>
      

      {/* ===================== BENEFITS SECTION ===================== */}


      <section
        className="w-full bg-white py-24"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <h2 className="text-center text-xl lg:text-4xl md:text-5xl font-extrabold text-[#20004E] font-serif">
          Benefits of Using ZtechWare Learning Platform
        </h2>
        <p className="text-center text-gray-700 mt-4 text-lg px-3 lg:text-lg max-w-4xl mx-auto font-serif">
          ZtechWare empowers learners with real-tech skills, expert guidance & future-ready opportunities.
        </p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-14 px-6">
      
          <div className="border rounded-2xl p-8 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300 font-serif">
            <FaUsers className="text-5xl text-[#FF6A00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#20004E]">Student Engagement</h3>
            <p className="text-gray-700 leading-7">
              Boosts student involvement with interactive learning,
              progress reminders & personalized study support.
            </p>
          </div>
      
          <div className="border rounded-2xl p-8 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300 font-serif">
            <FaChartLine className="text-5xl text-[#FF6A00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#20004E]">Career Visibility Boost</h3>
            <p className="text-gray-700 leading-7">
              Resume-grade certifications, projects & LinkedIn-ready
              portfolios improve hiring chances.
            </p>
          </div>
      
          <div className="border rounded-2xl p-8 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300 font-serif">
            <FaHeadset className="text-5xl text-[#FF6A00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#20004E]">Smart Support System</h3>
            <p className="text-gray-700 leading-7">
              24/7 mentor + AI assistant for doubt resolution, project help
              & interview preparation.
            </p>
          </div>
      
          <div className="border rounded-2xl p-8 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300 font-serif">
            <FaStar className="text-5xl text-[#FF6A00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#20004E]">Better Learning Results</h3>
            <p className="text-gray-700 leading-7">
              Structured curriculum, quizzes & performance tracking for
              faster mastery and retention.
            </p>
          </div>
      
          <div className="border rounded-2xl p-8 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300 font-serif">
            <FaTrophy className="text-5xl text-[#FF6A00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#20004E]">Competitive Advantage</h3>
            <p className="text-gray-700 leading-7">
              Real-world projects & mock interviews help beat competition
              and gain recruiter trust.
            </p>
          </div>
      
          <div className="border rounded-2xl p-8 shadow-md hover:shadow-orange-300 hover:-translate-y-1 transition duration-300 font-serif">
            <FaChartPie className="text-5xl text-[#FF6A00] mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-[#20004E]">Career Analytics</h3>
            <p className="text-gray-700 leading-7">
              Smart insights track weaknesses & suggest improvements
              for continuous growth.
            </p>
          </div>
      
        </div>
      </section>
      {/* =================== END BENEFITS SECTION =================== */}
      
      

     {/* ================= CTA + FAQ SECTION (Mobile Dev Page End) ================= */}

     <section
       className="w-full bg-cover bg-center bg-no-repeat px-4 flex items-center justify-center text-center"
       style={{
         backgroundImage: `url("data:image/jpeg;base64,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")`,
         fontFamily: "'Montserrat', sans-serif",
         height: "400px",
       }}
     >
       <div>
         <h2 className="lg:text-4xl text-2xl mb-4 md:text-5xl font-extrabold text-[#20004E] drop-shadow-xl leading-snug font-serif">
           Elevating Your Business with Our <br /> Customized Mobile App Solutions
         </h2>
     
         {/* 🔥 Updated Button Redirect */}
    
           <Link to="/getstarted">
             <button className="font-serif bg-[#FF6A00] hover:bg-[#ff8533] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
               Get Started
             </button>
           </Link>
       </div>
     </section>
     
              
           
           
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
               q: "How does a mobile app help in business growth?",
               a: "A mobile app improves customer engagement, boosts brand visibility, automates workflows and increases sales conversions with better user experience.",
             },
             {
               q: "Does ZtechWare provide complete end-to-end app development?",
               a: "Yes — from UI/UX design to development, deployment, maintenance, integrations, and performance scaling — everything is managed by our expert team.",
             },
             {
               q: "Which platform should we choose — Android, iOS or Hybrid?",
               a: "If your audience is wide and budget-friendly — choose Hybrid (Flutter/React Native). For high-class performance and target-specific users — go Native.",
             },
             {
               q: "What is the development cost of a mobile app?",
               a: "Cost depends on features and technology — basic apps start at ₹40,000 while advanced enterprise apps depend on APIs, database, UI/UX complexity.",
             },
             {
               q: "Will you provide support and updates after launch?",
               a: "Yes — You get continuous support including feature upgrades, performance stability, bug fixes, and security monitoring to ensure long term success.",
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

export default MobileApps;
