import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Details from "./components/details/Details";
import LearnMore from "./components/learnmore/LearnMore";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Details />
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
