import React from "react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

//Main Fuction
const TextFlipper = () => {
  const [text, setText] = useState("Hello");
  const textRef = useRef(null);

  const flipText = () => {
    if (textRef.current) {
      const state = Flip.getState(textRef.current);

      // Flip.getState(textRef.current);

      setText((prevText) => (prevText === "Hello" ? "Goodbye" : "Hello"));

      Flip.from(state, {
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {},
      });
    }
  };

  return (
    <div ref={textRef} className="text-2xl text-red-500">
      {text}
    </div>
  );
};

export default TextFlipper;
