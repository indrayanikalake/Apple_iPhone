import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(() => {
    gsap;
  }, []);
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
