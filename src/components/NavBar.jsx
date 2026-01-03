
// src/components/NavBar.jsx
import React, { useState } from "react";
import {
  Home,
  User,
  Zap,
  BookOpen,
  Menu,
  X,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileCourses, setMobileCourses] = useState(false);
  const [mobileProgramming, setMobileProgramming] = useState(false);
  const [mobileFrameworks, setMobileFrameworks] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);

  const serviceLinks = [
    { name: "Mobile App Development", href: "/mobile-apps" },
    { name: "Web Development", href: "/web-development" },
    { name: "SEO & Training", href: "/seo-training" },
    { name: "UI / UX Design", href: "/ui-ux-design" },



  ];

  return (
    <>
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 shadow-xl flex items-center justify-between gap-40 lg:px-20 py-3 px-4">
    <img
      src={logo}
      alt="ZTECH Logo"
      className="lg:w-40 w-30 h-12 object-contain"
    />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-50 items-center bg-green-500"> */}
  
    
        <div className="flex items-center justify-between ">



          {/* DESKTOP MENU (UNCHANGED) */}
          <div className="hidden md:flex items-center justify-center gap-6 space-x-6">
            <Link to="/" className="nav-link"><Home className="icon" /> Home</Link>
            <Link to="/about" className="nav-link"><User className="icon" /> About</Link>

            {/* SERVICES */}
            <div className="relative group">
              <span className="nav-link cursor-pointer">
                <Zap className="icon" /> Services ▾
              </span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 mt-1">
                {serviceLinks.map(item => (
                  <Link key={item.name} to={item.href} className="dropdown-item">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* COURSES */}
            {/* COURSES DROPDOWN (DESKTOP) */}
<div className="relative group">
  <span className="text-white/90 hover:text-white flex items-center px-3 py-2 text-sm font-semibold cursor-pointer transition">
    <BookOpen className="w-4 h-4 mr-1.5 opacity-80" /> Courses ▾
  </span>

  {/* MAIN DROPDOWN */}
  <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-md w-72 py-2 mt-1 z-50">

    <Link to="/android-development" className="dropdown-item">
      Android Development
    </Link>

    <Link to="/ios-development" className="dropdown-item">
      iOS Development
    </Link>

    <Link to="/react-native" className="dropdown-item">
      React Native Development
    </Link>

    {/* PROGRAMMING */}
    <div className="relative group/sub">
      <div className="dropdown-item flex justify-between items-center">
        Programming
        <span>›</span>
      </div>

      <div className="absolute top-0 left-full hidden group-hover/sub:block bg-white shadow-xl rounded-md w-56 py-2">
        <Link to="/ccpp" className="dropdown-item">C / C++</Link>
        <Link to="/python" className="dropdown-item">Python</Link>
        <Link to="/java" className="dropdown-item">Java</Link>
      </div>
    </div>

    {/* FRAMEWORKS */}
    <div className="relative group/sub">
      <div className="dropdown-item flex justify-between items-center">
        Frameworks
        <span>›</span>
      </div>

      <div className="absolute top-0 left-full hidden group-hover/sub:block bg-white shadow-xl rounded-md w-56 py-2">
        <Link to="/reactjs" className="dropdown-item">React JS</Link>
        <Link to="/django" className="dropdown-item">Django</Link>
        <Link to="/nodejs" className="dropdown-item">Node JS</Link>
      </div>
    </div>

    <Link to="/full-stack-development" className="dropdown-item">
      Full Stack Development
    </Link>

    <Link to="/uiux-developement" className="dropdown-item">
      UI / UX Design
    </Link>

  </div>
</div>


           
          </div>

          {/* MOBILE ICON */}
          <div className="md:hidden h-12 w-12 flex items-center justify-center">
            <button onClick={toggleMenu} className="text-white ">
              {isOpen ? <X /> : <Menu className="font-bold text-3xl" />}
            </button>
          </div>
        </div>
      {/* </div> */}

      {/* 🔥 MOBILE MENU (UPDATED ONLY FOR MOBILE) */}

 <Link to="/getstarted">
              <button className="bg-white text-red-600 font-bold lg:py-3 lg:px-8 px-2 py rounded-full shadow-xl hidden md:block">
                Get Started <ChevronRight className="inline ml-1 w-4 h-4" />
              </button>
            </Link>


      {/* STYLES */}
      <style>{`
        .nav-link {
          color: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .icon { width: 16px; height: 16px; }
        .dropdown-item {
          padding: 0.6rem 1.25rem;
          display: block;
          font-weight: 500;
        }
        .dropdown-item:hover {
          background: #ffedd5;
          color: #ea580c;
        }
        .mobile-link {
          color: white;
          padding: 10px;
          font-weight: 600;
          width: 100%;
          text-align: left;
        }
        .mobile-sub {
          color: white;
          padding: 8px;
          font-size: 14px;
          opacity: 0.9;
        }
      `}</style>
    </nav>
    {isOpen && (
  <div className="md:hidden bg-gradient-to-r from-orange-500 to-red-500 px-4 py-4 flex flex-col w-full justify-center absolute z-50 top-18 fixed">

    {/* Home */}
    <Link
      to="/"
      onClick={toggleMenu}
      className="block text-white font-semibold py-3 border-b border-white/20"
    >
      Home
    </Link>

    {/* About */}
    <Link
      to="/about"
      onClick={toggleMenu}
      className="block text-white font-semibold py-3 border-b border-white/20"
    >
      About
    </Link>

    {/* SERVICES */}
    <button
      onClick={() => {
        setMobileServices(!mobileServices);
        setMobileCourses(false);
      }}
      className="w-full text-left text-white font-semibold py-3 border-b border-white/20 flex justify-between items-center"
    >
      Services
      <ChevronDown className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} />
    </button>

    {mobileServices && (
      <div className="pl-4 pt-2 space-y-2">
        {serviceLinks.map(item => (
          <Link
            key={item.name}
            to={item.href}
            onClick={toggleMenu}
            className="block text-white/90 text-sm"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}

    {/* COURSES */}
    <button
      onClick={() => {
        setMobileCourses(!mobileCourses);
        setMobileServices(false);
      }}
      className="w-full text-left text-white font-semibold py-3 border-b border-white/20 flex justify-between items-center"
    >
      Courses
      <ChevronDown className={`transition-transform ${mobileCourses ? "rotate-180" : ""}`} />
    </button>

    {mobileCourses && (
      <div className="pl-4 pt-2 space-y-2">

        <Link to="/android-development" onClick={toggleMenu} className="block text-white/90 text-sm">
          Android Development
        </Link>

        <Link to="/ios-development" onClick={toggleMenu} className="block text-white/90 text-sm">
          iOS Development
        </Link>

        <Link to="/react-native" onClick={toggleMenu} className="block text-white/90 text-sm">
          React Native Development
        </Link>

        {/* PROGRAMMING */}
        <button
          onClick={() => {
            setMobileProgramming(!mobileProgramming);
            setMobileFrameworks(false);
          }}
          className="w-full text-left text-white/90 text-sm flex justify-between items-center"
        >
          Programming
          <ChevronDown className={`transition-transform ${mobileProgramming ? "rotate-180" : ""}`} />
        </button>

        {mobileProgramming && (
          <div className="pl-4 space-y-1">
            <Link to="/ccpp" onClick={toggleMenu} className="block text-white/80 text-sm">
              C / C++
            </Link>
            <Link to="/python" onClick={toggleMenu} className="block text-white/80 text-sm">
              Python
            </Link>
            <Link to="/java" onClick={toggleMenu} className="block text-white/80 text-sm">
              Java
            </Link>
          </div>
        )}

        {/* FRAMEWORKS */}
        <button
          onClick={() => {
            setMobileFrameworks(!mobileFrameworks);
            setMobileProgramming(false);
          }}
          className="w-full text-left text-white/90 text-sm flex justify-between items-center"
        >
          Frameworks
          <ChevronDown className={`transition-transform ${mobileFrameworks ? "rotate-180" : ""}`} />
        </button>

        {mobileFrameworks && (
          <div className="pl-4 space-y-1">
            <Link to="/reactjs" onClick={toggleMenu} className="block text-white/80 text-sm">
              React JS
            </Link>
            <Link to="/django" onClick={toggleMenu} className="block text-white/80 text-sm">
              Django
            </Link>
            <Link to="/nodejs" onClick={toggleMenu} className="block text-white/80 text-sm">
              Node JS
            </Link>
          </div>
        )}

        <Link to="/full-stack-development" onClick={toggleMenu} className="block text-white/90 text-sm mt-1">
          Full Stack Development
        </Link>

        <Link to="/uiux-developement" onClick={toggleMenu} className="block text-white/90 text-sm">
          UI / UX Design
        </Link>

      </div>
    )}
  </div>
)}
    </>
  );
};

export default NavBar;
