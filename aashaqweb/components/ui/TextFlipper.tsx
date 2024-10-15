import React from "react";
import { useState, useRef } from "react";

import Flip from "gsap/Flip";

//Main Fuction
const TextFlipper = () => {
  const textRef = useRef(null);

  return (
    <div ref={textRef} className="text-2xl text-red-500">
      Hello
    </div>
  );
};

export default TextFlipper;
