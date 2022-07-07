import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="bg-gradient-to-b from-slate-900 to-slate-800 h-full justify-center flex align-center">
      <div class="rounded-t-2xl rounded-b-xl bg-gray-100 shadow-xl w-80 my-12">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
