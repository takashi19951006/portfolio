"use client";
import React, { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState } from "react";

function TopButton() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={
        scrolling ? "fixed bottom-[0.5rem] right-[0.7rem] z-50" : "hidden"
      }
    >
      <a href="#home">
        <AiOutlineArrowUp className="text-cadetblue shadow-2xl size-10" />
      </a>
    </div>
  );
}

export default TopButton;
