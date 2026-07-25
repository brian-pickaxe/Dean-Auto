"use client";

import { useEffect } from "react";

interface BookNowButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
}

export default function BookNowButton({
  className = "",
  variant = "primary",
  children = "Book Now",
}: BookNowButtonProps) {
  useEffect(() => {
    // Load Setmore script if not already loaded
    if (!document.getElementById("setmore_script")) {
      const script = document.createElement("script");
      script.id = "setmore_script";
      script.type = "text/javascript";
      script.src =
        "https://assets.setmore.com/integration/static/setmoreIframeLive.js";
      script.onerror = () => {
        console.warn("Setmore script failed to load");
      };
      document.body.appendChild(script);
    }
  }, []);

  const baseClasses =
    "inline-block font-semibold transition-all duration-200 shadow-lg hover:shadow-xl";
  
  const variantClasses = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 px-6 py-2 rounded-lg",
    secondary:
      "bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl",
  };

  return (
    <a
      id="Setmore_button_iframe"
      href="https://deanautodetailers.setmore.com"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ float: "none" }}
    >
      {children}
    </a>
  );
}

