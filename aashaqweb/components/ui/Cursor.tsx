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
        gsap.to(cursorRef.current, {
          x: e.pageX - 20,
          y: e.pageY - 20,
          duration: 0.1,
          ease: "power2",
        });
      }
    };

    //     const setInitialPosition = (e: MouseEvent) => {
    //       if (cursorRef.current) {
    //         gsap.set(cursorRef.current, {
    //           x: e.clientX,
    //           y: e.clientY,
    //         });
    //       }
    //     };
    //     window.addEventListener("mousemove", setInitialPosition);
    //     const mouseMoveHandler = (e: MouseEvent) => {
    //       updateCursorPosition(e);
    //     };
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      //       window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return (
    <div className="size-full">
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-30 h-10 w-10 origin-center rounded-full bg-red-500 mix-blend-difference transition duration-75 ease-in max-sm:hidden"
      ></div>
      {children}
    </div>
  );
};

export default Cursor;
