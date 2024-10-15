"use client";

import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/all";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(TextPlugin, ScrambleTextPlugin, Draggable);

const TextScramble = () => {
  const TextRef = useRef(null);
  const tl = gsap.timeline({
    defaults: { duration: 2, repeat: 0, opacity: 0, ease: "power2.inOut" },
  });

  const animate = () => {
    tl.to(TextRef.current, {
      opacity: 1,
      repeat: 0,
      scrambleText: {
        text: "Divine Love",
        chars: "xoxox",
        revealDelay: 2,
        speed: 1,
      },
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <section className="relative flex h-5 items-center justify-center text-3xl text-red-500">
      <div ref={TextRef}></div>
    </section>
  );
};

export default TextScramble;
