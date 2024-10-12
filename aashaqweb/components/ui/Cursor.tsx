"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const Cursor = ({ children }: { children: React.ReactNode }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isOver, setisOver] = useState<boolean>(false);
  const [isMouseMoved, setisMouseMoved] = useState<boolean>(false);
  const cursorSize = 40;
  const mousePos = useRef({ x: 0, y: 0 });
  const offset = 10;

  const updateCursorPosition = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePos.current.x - cursorSize / 2,
        y: mousePos.current.y - cursorSize / 2,
        duration: 1.6,

        ease: "power3.out",
      });
    }

    // gsap.set(cursorRef, {
    //   x: "50%",
    //   y: "50%",
    // });
    gsap.from(cursorRef, {
      opacity: 0,
      duration: 1,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.pageX, y: e.pageY };
      setisMouseMoved(true);
    };

    const animate = () => {
      updateCursorPosition();
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="size-full">
      <div
        ref={cursorRef}
        // ${isMouseMoved === true ? "flex" : "hidden"}
        //left-1/2 top-1/2 z-30 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform
        className={`pointer-events-none fixed z-30 h-10 w-10 rounded-full bg-red-500 mix-blend-difference max-sm:hidden`}
      ></div>
      {children}
    </div>
  );
};

export default Cursor;
