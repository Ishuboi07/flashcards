"use client";
import React, { useState } from "react";


const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-64 h-64 cursor-pointer" onClick={handleFlip}>
      <div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ease-in-out"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center backface-hidden rounded-md">
          Front Side
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center backface-hidden rotate-y-180 rounded-md">
          Back Side
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
