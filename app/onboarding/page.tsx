"use client";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function OnboardingPage() {
  const [isLoading, setisLoading] = useState(false);
  const loginWithGoogle = async () => {
    setisLoading(true);
    try {
      signIn("google", { callbackUrl: "/onboarding" });
    } catch (error) {
      setisLoading(false);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <h1>Hehe, nice attempt. First verify yourself</h1>
      <Button onClick={loginWithGoogle}>
        Continue With Google{" "}
        {isLoading && (
          <span className="animate-spin">
            <LoaderCircle />
          </span>
        )}
      </Button>
    </div>
  );
}
