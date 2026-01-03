// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

// Pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import MobileApps from "./pages/MobileApps";
import WebDevelopment from "./pages/WebDevelopment";
import SEOTraining from "./pages/SEOTraining";
import UIDesign from "./pages/UIDesign";
import GetStarted from "./pages/GetStarted"; 
import AndroidDevelopment from "./pages/courses/AndroidDevelopment";
import ReactNative from "./pages/courses/ReactNative";
import UIUXCourse  from "./pages/courses/UIUXCourse";
import WebDevCourse from "./pages/courses/UIUXCourse";
import Django from "./pages/courses/Frameworks/Django";
import  NodeJS  from "./pages/courses/Frameworks/NodeJS";
import  ReactJS  from "./pages/courses/Frameworks/ReactJS";
import  CCPP  from "./pages/courses/Programming/CCPP";
import  Java  from "./pages/courses/Programming/Java";
import  Python  from "./pages/courses/Programming/Python";
import  IOSDevelopment  from "./pages/courses/IOSDevelopment";
import Enrollcourse from "./pages/courses/Enrollcourse";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/seo-training" element={<SEOTraining />} />
        <Route path="/ui-ux-design" element={<UIDesign />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/android-development" element={<AndroidDevelopment />} />
        <Route path="/ios-development" element={<IOSDevelopment/>} />
        <Route path="/react-native" element={<ReactNative/>} />
        <Route path="/uiux-developement" element={<UIUXCourse/>} />
        <Route path="/webdev-course" element={<WebDevCourse/>} />
        <Route path="/django" element={<Django/>} />
        <Route path="/nodejs" element={<NodeJS/>} />
        <Route path="/reactjs" element={<ReactJS/>} />
        <Route path="/ccpp" element={<CCPP/>} />
        <Route path="/java" element={<Java/>} />
        <Route path="/python" element={<Python/>} />
        <Route path="/enroll-course" element={<Enrollcourse/>} />
        


      </Routes>
    </>
  );
};

export default App;
