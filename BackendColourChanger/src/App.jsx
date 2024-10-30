"use client";

import { useState } from "react";

export default function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "black",
  ];

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-300 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div
          className="h-64 sm:h-96 w-full transition-colors duration-500 ease-in-out"
          style={{ backgroundColor }}
        >
          <div className="flex justify-between items-center p-4 sm:p-6">
            <h1 className="text-2xl sm:text-4xl font-semibold font-mono uppercase text-gray-800 bg-white bg-opacity-75 px-2 py-1 rounded">
              Color Changer
            </h1>
            <button
              onClick={() => changeColor("white")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center p-4 sm:p-6 bg-gray-100">
          {colors.map((color) => (
            <button
              key={color}
              className="w-20 h-20 rounded-full text-xs sm:text-sm font-medium uppercase transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
              style={{
                backgroundColor: color,
                color: color === backgroundColor ? "white" : "black",
                boxShadow:
                  color === backgroundColor
                    ? "0 0 0 3px rgba(59, 130, 246, 0.5)"
                    : "none",
              }}  
              onClick={() => changeColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
