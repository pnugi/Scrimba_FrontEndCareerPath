import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div class="bg-gradient-to-br from-slate-100 to-slate-50 h-full">
      <Navbar />
      <div class="mx-20 flex flex-col">{cards}</div>
    </div>
  );
}
