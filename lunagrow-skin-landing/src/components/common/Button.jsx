import React from "react";

const Button = ({ text = "Click Me", variant = "primary", onClick }) => {
  const base =
    "px-6 py-3 font-semibold rounded-full transition-all duration-200";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-white text-indigo-700 border border-indigo-700 hover:bg-indigo-100",
  };

  const variantClass = variants[variant] || variants.primary;

  return (
    <button onClick={onClick} className={`${base} ${variantClass}`}>
      {text}
    </button>
  );
};

export default Button;