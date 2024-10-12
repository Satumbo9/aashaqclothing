"use client";

import React, { useEffect } from "react";
import { aboutLinks } from "../../components/shared/data";
import { useState, useRef } from "react";
import { gsap, ScrollTrigger, Flip, Draggable } from "gsap/all"; // Calling all the plugins

import SplitType from "split-type";
import Link from "next/link";
import { log } from "console";
import { split } from "postcss/lib/list";

const page = () => {
  const logoTextRef = useRef(null);

  useEffect(() => {
    if (logoTextRef.current) {
      //Spliting the Full Text
      const splitText = new SplitType(logoTextRef.current, {
        types: "words,chars",
      });

      //Checkig A Text
      const hasA = splitText.chars?.some(
        (char: HTMLElement) => char.textContent === "A",
      );

      gsap.timeline({ defaults: { ease: "power2.in" } });
      console.log(splitText);

      gsap.to(splitText.chars, {
        scale: 2,
        repeat: -1,
        duration: 2,

        delay: 0.1,
        stagger: {
          each: 0.5,
        },
        yoyo: true,

        ease: "elastic.out(1,0.3)",
      });

      gsap.from(splitText.chars, {
        opacity: 0,
      });

      return () => {
        splitText.revert();
      };
    }
  });
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-10 bg-[--background-primary] text-white">
      <div className="flex items-end justify-center text-center">
        <div ref={logoTextRef} className="">
          <p className="text-9xl font-bold">Aashaq</p>
        </div>
      </div>
    </section>
  );
};

export default page;
