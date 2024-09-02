import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BackToTopButton() {
  const [isBackToTopButtonVisible, setIsBackToTopButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsBackToTopButtonVisible(true);
      } else {
        setIsBackToTopButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isBackToTopButtonVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-1 bg-cta text-white rounded-full shadow-lg hover:bg-cta-active transition-colors z-50"
          aria-label="Back to top button"
        >
          <ArrowUpIcon className="md:size-7 size-5 text-background" />
        </button>
      )}
    </>
  );
}
