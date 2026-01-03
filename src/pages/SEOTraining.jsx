import React, { useState } from "react";
import bgImage from "../assets/SEO.png"; 
import { FaUsers, FaChartLine, FaHeadset, FaStar, FaTrophy, FaChartPie } from "react-icons/fa";
import { FaThumbsUp, FaGlobe, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const SEOTraining = () => {
  const [active, setActive] = useState(0);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "7b34693b-e9b3-4435-87f0-b85a1c5ae809"); 

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

  // FAQ ITEM — 
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
      {/* ================= HERO + CONTACT + SERVICES ================= */}
      <div
        className="relative w-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/62"></div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 lg:px-0 py-28 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:w-[58%] space-y-7 drop-shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif leading-tight">
              Search Engine Optimization <br />
              <span className="text-orange-400">Services</span>
            </h1>

            <p className="text-[18px] leading-9 max-w-2xl text-gray-200 font-serif">
              Boost your digital presence with targeted SEO strategies designed to rank higher,
              generate organic leads, and turn search traffic into paying customers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold font-serif">
              {[
                "Keyword Research",
                "On-Page SEO",
                "Technical SEO",
                "Off-Page SEO",
                "Content Optimization",
                "Local SEO",
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
                required
                placeholder="Full Name*"
                className="bg-white/80 rounded-md p-3 w-full text-black"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Business Email Address*"
                className="bg-white/80 rounded-md p-3 w-full text-black"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="phone"
                required
                placeholder="+91 Phone Number*"
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
              required
              placeholder="Message*"
              className="bg-white/80 rounded-md p-3 w-full text-black"
            ></textarea>

            <input type="hidden" name="from_page" value="SEO Services" />

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

      {/* End of Hero Section */}


      {/* ================= SEO TRUST & STATS SECTION ================= */}
        <section className="w-full bg-white py-24 px-6 lg:px-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-snug font-serif">
                Partner with a Trusted SEO Agency to <br /> 
                Boost Traffic, Sales, and Leads
              </h2>
        
              <p className="text-[#20004E] text-[18px] mt-6 leading-8 max-w-2xl font-serif">
                <span className="font-bold text-[#20004E]">ZtechWare</span> is a trusted SEO agency providing proven & high-performing 
                Search Engine Optimization services to enhance visibility and drive business results. 
                We go beyond traditional marketing — focusing on brand authority and long-term digital growth.
                Our SEO solutions increase revenue and leads while ensuring your business ranks on the first page.
                We provide complete SEO strategy, execution & reporting to achieve measurable growth faster.
              </p>
            </div>
        
            {/* RIGHT SIDE STATS BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
              {/* Card 1 */}
              <div className="border rounded-3xl p-7 shadow-lg hover:shadow-purple-300 transition bg-white">
                <FaThumbsUp className="text-4xl text-[#20004E] mb-4" />
                <h3 className="text-4xl font-extrabold text-gray-700">700+</h3>
                <p className="text-orange-400  text-lg font-semibold mt-1">Satisfied Clients</p>
              </div>
        
              {/* Card 2 */}
              <div className="border rounded-3xl p-7 shadow-lg hover:shadow-purple-300 transition bg-white">
                <FaGlobe className="text-4xl text-[#20004E] mb-4" />
                <h3 className="text-4xl font-extrabold text-gray-700">80+</h3>
                <p className="text-orange-400 text-lg font-semibold mt-1">Global Brands</p>
              </div>
        
              {/* Card 3 */}
              <div className="border rounded-3xl p-7 shadow-lg hover:shadow-purple-300 transition bg-white">
                <FaTrophy className="text-4xl text-[#20004E] mb-4" />
                <h3 className="text-4xl font-extrabold text-gray-700">97%</h3>
                <p className="text-orange-400 text-lg font-semibold mt-1">Satisfaction Rate</p>
              </div>
        
              {/* Card 4 */}
              <div className="border rounded-3xl p-7 shadow-lg hover:shadow-purple-300 transition bg-white">
                <FaRocket className="text-4xl text-[#20004E] mb-4" />
                <h3 className="text-4xl font-extrabold text-gray-700">24+</h3>
                <p className="text-orange-400 text-lg font-semibold mt-1">Years of Experience</p>
              </div>
        
            </div>
          </div>
        </section>
      {/* ================= END SEO TRUST & STATS SECTION ================= */}

   

      {/* ================= SEO COMPANY DESCRIPTION SECTION ================= */}      
        <section
          className="w-full bg-white py-24 px-6 lg:px-0"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {/* ✅ HEADING BLOCK — Desktop: left | Mobile: center */}
          <div className="w-full mb-12">
            <h2
              className="
                text-3xl md:text-5xl font-serif font-extrabold text-[#20004E] leading-tight
                text-center lg:text-left lg:ml-65">
              <span className="block md:inline">
                SEO Company To Maximize Online
              </span>
              <span className="block md:inline md:ml-2 text-orange-600">
                Success
              </span>
            </h2>
          </div>
        
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
            {/* LEFT SIDE TEXT */}
            <div>
              <p className="text-gray-700 text-[18px] leading-8 mb-5  font-serif">
                At ZtechWare, you get trusted and reliable SEO services and become the
                brand by establishing your imagined position in the market. Whether you
                are a startup or an established business, our SEO marketing team will
                help you achieve every goal with performance-driven strategies.
              </p>
        
              <p className="text-gray-700 text-[18px] leading-8 mb-5  font-serif">
                As industry leaders in SEO, we follow a modern and holistic approach to
                boost conversions and brand authority. Our powerful strategies include
                E-A-T content, hyper-local SEO, featured snippets, and smart on-page +
                off-page optimization designed to maximize results.
              </p>
        
              <p className="text-gray-700 text-[18px] leading-8  font-serif">
                We believe in 100% transparency and stronger communication while ensuring
                your business dominates search engines. Our experience speaks for itself
                — and we are ready to do the same for you.
              </p>
            </div>
        
            {/* RIGHT SIDE IMAGE */}
            <div className="w-full flex justify-center">
              <img
                src="https://clickshaper.com/wp-content/uploads/2025/05/8.jpg"
                alt="SEO discussion"
                className="rounded-3xl shadow-xl w-full max-h-[500px] object-cover"
              />
            </div>
        
          </div>
        </section>
        {/* ================= END SEO COMPANY DESCRIPTION SECTION ================= */}



        {/* ================= HOW SEO UNLOCKS BUSINESS POTENTIAL SECTION ================= */}
         <section
           className="w-full bg-white py-24 px-6"
           style={{ fontFamily: "'Montserrat', sans-serif" }}
         >
           {/* Heading */}
           <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#20004E] leading-tight font-serif">
             How Can Search Engine Optimization Agency Unlock Your Business’s
             <br />
             <span className="block mt-2">True Potential?</span>
           </h2>
         
           {/* Description */}
           <p className="text-center text-gray-700 text-[18px] md:text-[20px] max-w-5xl mx-auto mt-8 leading-8 font-serif">
             Investing in SEO gives businesses an advantage in competitive markets.
             Our SEO agency ensures your business stands out and grows digitally.
           </p>
         
           {/* Benefits Cards */}
           <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif">
         
             {/* Card 1 */}
             <div className="border border-orange-700 rounded-3xl p-10 hover:shadow-xl transition-all bg-white font-serif">
               <img src="https://cdn-icons-png.flaticon.com/512/1159/1159875.png" className="w-14 mb-6" />
               <h3 className="text-2xl font-bold text-[#20004E] mb-4">Organic Search</h3>
               <p className="text-gray-700 text-[17px] leading-7">
                 People search on Google every day for exactly what they need.
                 If your business appears at the top, they automatically choose you.
                 That means more website visitors, more inquiries, and more customers — without paid ads.
               </p>
             </div>
         
             {/* Card 2 */}
             <div className="border border-orange-700 rounded-3xl p-10 hover:shadow-xl transition-all bg-white font-serif">
               <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="w-14 mb-6" />
               <h3 className="text-2xl font-bold text-[#20004E] mb-4">Enhances Credibility</h3>
               <p className="text-gray-700 text-[17px] leading-7">
                 When your brand appears on the first page of Google, people trust it more.
                 High-ranking brands are seen as professional, established, and reliable, which directly boosts customer confidence and sales.
               </p>
             </div>
         
             {/* Card 3 */}
             <div className="border border-orange-700 rounded-3xl p-10 hover:shadow-xl transition-all bg-white font-serif">
               <img src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png" className="w-14 mb-6" />
               <h3 className="text-2xl font-bold text-[#20004E] mb-4">Improves Experience</h3>
               <p className="text-gray-700 text-[17px] leading-7">
                 SEO ensures your website loads fast, looks great on all devices, and is easy to navigate.
                 Better user experience increases engagement, reduces bounce rate, and helps users take meaningful actions like contacting or purchasing.
               </p>
             </div>
         
             {/* Card 4 — NEW */}
             <div className="border border-orange-700 rounded-3xl p-10 hover:shadow-xl transition-all bg-white font-serif">
               <img src="https://cdn-icons-png.flaticon.com/512/4297/4297843.png" className="w-14 mb-6" />
               <h3 className="text-2xl font-bold text-[#20004E] mb-4">Cost-Effective</h3>
               <p className="text-gray-700 text-[17px] leading-7">
                 Paid ads stop the moment you stop spending.
                 But SEO keeps working day and night, bringing customers continuously.
                 It’s a smart investment for long-term traffic, sales, and brand growth.
               </p>
             </div>
         
             {/* Card 5 — NEW */}
             <div className="border border-orange-700 rounded-3xl p-10 hover:shadow-xl transition-all bg-white font-serif">
               <img src="https://cdn-icons-png.flaticon.com/512/2981/2981011.png" className="w-14 mb-6" />
               <h3 className="text-2xl font-bold text-[#20004E] mb-4">Competitive Edge</h3>
               <p className="text-gray-700 text-[17px] leading-7">
                 Your competitors are already using SEO — that’s why they’re getting the customers.
                 If your business ranks higher, your brand becomes the first choice, not theirs.
                 SEO helps you win customers before your competitors do.
               </p>
             </div>
         
             {/* Card 6 — NEW */}
             <div className="border border-orange-700 rounded-3xl p-10 hover:shadow-xl transition-all bg-white font-serif">
               <img src="https://cdn-icons-png.flaticon.com/512/942/942833.png" className="w-14 mb-6" />
               <h3 className="text-2xl font-bold text-[#20004E] mb-4">Sustained Visibility</h3>
               <p className="text-gray-700 text-[17px] leading-7">
                 SEO makes people see your brand again and again on Google.
                 Repeated visibility builds trust, brand recall, and customer loyalty.
                 The more you appear, the more people remember your business.
               </p>
             </div>
         
           </div>
         </section>
         {/* ================= END SECTION ================= */}

        
         {/* =================== SEO PROCESS SECTION =================== */}
         <section
           className="w-full bg-white py-28 px-6 lg:px-0"
           style={{ fontFamily: "'Montserrat', sans-serif" }}>
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
         
             {/* LEFT SIDE — Title & Paragraph */}
             <div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-[#20004E] leading-tight mb-8 font-serif">
                 Our SEO Strategy<br /> & Execution Process
               </h2>
         
               <p className="text-gray-700 text-[19px] leading-8 font-serif">
                At ZTechWare, we follow a structured and data-driven SEO process designed not just to rank websites — but to grow brands sustainably.
                Every step of our strategy — deep research, technical optimization, content planning, authority building, and conversion tracking — works together like a growth engine.
                
                Instead of relying on temporary hacks or shortcuts, we create a long-term SEO roadmap that keeps bringing traffic, leads, and sales even when paid marketing stops.
                Our approach ensures that your business becomes searchable, discoverable, and trusted in your industry.
                
                We don’t just help you reach the top of Google — we help you stay there, consistently improving visibility, user experience, brand credibility, and revenue.
               </p>
             </div>
         
             {/* RIGHT SIDE — TIMELINE */}
             <div className="relative pl-12">
         
               {/* Vertical line */}
               <div className="absolute left-4 top-0 h-full w-[4px] bg-[#FF6A00] rounded-full"></div>
         
               {/* Step 1 */}
               <div className="mb-14">
                 <h3 className="text-3xl font-extrabold text-[#20004E] mb-3 font-serif">Initial Audit</h3>
                 <p className="text-gray-700 text-[18px] leading-8 font-serif">
                   Technical & performance audit to analyze ranking issues, backlink
                   health, keyword gaps & indexing errors.
                 </p>
                 <div className="text-[#FF6A00] text-4xl font-bold mt-4">↓</div>
               </div>
         
               {/* Step 2 */}
               <div className="mb-14">
                 <h3 className="text-3xl font-extrabold text-[#20004E] mb-3 font-serif">Keyword Strategy</h3>
                 <p className="text-gray-700 text-[18px] leading-8">
                   High-intent keyword selection targeting users who are ready to buy or
                   inquire about your services/products.
                 </p>
                 <div className="text-[#FF6A00] text-4xl font-bold mt-4">↓</div>
               </div>
         
               {/* Step 3 */}
               <div className="mb-14">
                 <h3 className="text-3xl font-extrabold text-[#20004E] mb-3 font-serif">On-Page Optimization</h3>
                 <p className="text-gray-700 text-[18px] leading-8 font-serif">
                   Meta data, schema markup, UX signals, internal linking, page structure
                   & content relevance — all optimized for faster ranking.
                 </p>
                 <div className="text-[#FF6A00] text-4xl font-bold mt-4">↓</div>
               </div>
         
               {/* Step 4 */}
               <div className="mb-14">
                 <h3 className="text-3xl font-extrabold text-[#20004E] mb-3 font-serif">Content & Link Building</h3>
                 <p className="text-gray-700 text-[18px] leading-8 font-serif">
                   High-quality blogs, landing pages & authoritative backlinks to build
                   trust, traffic & domain authority.
                 </p>
                 <div className="text-[#FF6A00] text-4xl font-bold mt-4">↓</div>
               </div>
         
               {/* Step 5 */}
               <div>
                 <h3 className="text-3xl font-extrabold text-[#20004E] mb-3 font-serif">Tracking & Growth</h3>
                 <p className="text-gray-700 text-[18px] leading-8 font-serif">
                   Continuous ranking & analytics tracking with monthly reports +
                   real-time strategy upgrades for long-term success.
                 </p>
               </div>
         
             </div>
           </div>
         </section>
         {/* ================= END SEO PROCESS SECTION ================= */}
    

      
      
      {/* ================= VIDEO BG — HERO CTA SECTION ================= */}
      <section className="relative w-full h-[420px] md:h-[400px] overflow-hidden font-serif">
      
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://static.vecteezy.com/system/resources/previews/023/924/979/mp4/glowing-blue-color-motherboard-circuit-pattern-background-free-video.mp4" // 🔁 replace later
          autoPlay
          loop
          muted
          playsInline
        />
      
        {/* 🌫️ Light overlay (image jaisa soft look) */}
        <div className="absolute inset-0 bg-white/20"></div>
      
        {/* 📌 Content */}
        <div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 "
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white max-w-4xl leading-tight mb-8 font-serif">
            Stop renting traffic. <br />
            Own your audience with SEO....
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
               q: "What is SEO and why is it important?",
               a: "SEO improves your website’s visibility on search engines, increases organic traffic and generates long-term leads without ongoing ad spend.",
              },
              {
                q: "How long does SEO take to show results?",
                a: "SEO is a long-term strategy. Initial improvements appear within 6–8 weeks, while strong results build over 3–6 months.",
              },
              {
                q: "What SEO services do you provide?",
                a: "We offer keyword research, technical SEO, on-page optimization, content strategy, link building and performance tracking.",
              },
              {
                q: "Is SEO better than paid advertising?",
                a: "SEO provides long-term growth and consistent traffic, while paid ads stop when the budget ends. Both work best together.",
              },
              {
                q: "Do you provide SEO reports and analytics?",
                a: "Yes. We provide detailed reports with keyword rankings, traffic growth, competitor insights and performance metrics.",
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
        
        export default SEOTraining;
        