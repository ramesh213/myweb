import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Feature from "./components/features/Feature";
import Projects from './components/projects/Projects'
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto ">
        <Navbar />
        <Banner />
        <Feature />
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
