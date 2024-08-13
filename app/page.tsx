import { CustomCarousel } from "@/components/CustomCarousel";
import FlipCard from "@/components/FlipCard";
import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold">
        Welcome to the <span className="text-red-600">trivia</span>
      </h1>
      {/* <FlipCard /> */}
      <CustomCarousel />
      <p className="text-lg font-semibold">
        Click on the card to reveal the{" "}
        <span className="text-blue-600">answer</span>
      </p>
    </div>
  );
}

export default App;
