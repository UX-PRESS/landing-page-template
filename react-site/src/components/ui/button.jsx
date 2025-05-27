// src/components/ui/button.jsx
import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-800 transition ${className}`}
    >
      {children}
    </button>
  );
}
