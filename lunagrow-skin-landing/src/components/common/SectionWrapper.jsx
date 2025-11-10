import React from "react";

function SectionWrapper({ children, id, bg = "white" }) {
  const bgClasses = {
    white: "bg-white",
    indigo: "bg-indigo-600",
    gray: "bg-gray-100",
  };

  return (
    <section id={id} className={`py-20 px-8 ${bgClasses[bg] || "bg-white"}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

export default SectionWrapper;