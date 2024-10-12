"use client";

import React, { useEffect } from "react";
import { aboutLinks } from "../../components/shared/data";
import { useState, useRef } from "react";
import {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
} from "../../components/img/images";
import { gsap, ScrollTrigger, Flip, Draggable } from "gsap/all"; // Calling all the plugins

import SplitType from "split-type";
import Image from "next/image";

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
        // scale: 2,
        // repeat: 0,
        // duration: 1,

        // stagger: {
        //   each: 0.5,
        // },

        ease: "elastic.out(1,0.3)",
      });

      return () => {
        splitText.revert();
      };
    }
  });
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center gap-10 bg-[--background-primary] text-white">
      <div ref={logoTextRef} className="z-10">
        <p className="text-9xl font-bold">Aashaq</p>
      </div>

      <div className="absolute size-full">
        <Image
          className="absolute left-[56%] right-[50%] top-[4%] opacity-35"
          width={300}
          src={Img2}
          alt="img2"
        />
        <Image
          className="absolute left-[30%] top-[40%] opacity-35"
          width={300}
          src={Img3}
          alt="img3"
        />
      </div>
      <div className="absolute size-full">
        <Image
          className="absolute left-[15%] top-[60%] opacity-35"
          width={400}
          src={Img4}
          alt="img4"
        />
        <Image
          className="absolute left-[40%] top-[20%] opacity-35"
          width={300}
          src={Img5}
          alt="img5"
        />
      </div>
    </section>
  );
};

export default page;
