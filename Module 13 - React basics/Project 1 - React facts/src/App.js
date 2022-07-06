import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 h-full">
      <Navbar />
      <Main />
    </div>
  );
}
