"use client";
import React from "react";
import { Button } from "./ui/button";
import { CustomDialog } from "./CustomDialog";

const FloatingButton = ({ children }: { children: React.ReactNode }) => {
  const handleClick = () => {
    alert("Floating button clicked!");
  };
  return (
    <CustomDialog buttonText="Submit" titleText="Add a question and answer">
      <Button
        className="fixed bottom-10 right-10 bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300 text-xl"
        // onClick={handleClick}
      >
        {children}
      </Button>
    </CustomDialog>
  );
};

//

export default FloatingButton;
