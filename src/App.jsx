//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";

const App = () => {
  useGSAP(() => {
    gsap;
  }, []);
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
