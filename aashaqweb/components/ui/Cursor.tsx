"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const Cursor = ({ children }: { children: React.ReactNode }) => {
  const cursorRef = useRef(null);
  //   const [CursorMoveX, setCursorMoveX] = useState(0);
  //   const [CursorMoveY, setCursorMoveY] = useState(0);
  let CursorMoveX = useRef(0);
  let CursorMoveY = useRef(0);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, 0.016, {
          repeat: -1,
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 5,
          ease: "power2",
        });
        gsap.from(cursorRef.current, {
          repeat: -1,
          x: e.clientX - 20,
          y: e.clientY - 20,
          duration: 0,
          ease: "power2",
          opacity: 0,
        });
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div className="size-full">
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-10 h-10 w-10 origin-center rounded-full bg-red-500 transition duration-75 ease-in"
      ></div>
      {children}
    </div>
  );
};

export default Cursor;
