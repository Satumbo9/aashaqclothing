"use client";

import React, { MouseEvent, useEffect } from "react";
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
import InputForm from "@/components/ui/InputForm";
import Buttom from "@/components/ui/Buttom";
import SplitType from "split-type";
import Image from "next/image";

const About = () => {
  const logoTextRef = useRef(null);
  const PlaneRef1 = useRef(null);
  const PlaneRef2 = useRef(null);
  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  useEffect(() => {
    //GSAP for the mouse cirlcle mask effect
    if (logoTextRef.current) {
      //Spliting the Full Text
      const splitText = new SplitType(logoTextRef.current, {
        types: "words,chars",
      });

      gsap.to(splitText.chars, {});

      return () => {
        splitText.revert();
      };
    }
  });

  //Animation for the icons aroud
  const MouseMovePlane = (e: MouseEvent) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(PlaneRef1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`,
    });
    gsap.set(PlaneRef2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <section
      onMouseMove={(e) => MouseMovePlane(e)}
      className="relative flex h-screen w-screen flex-col items-center justify-center gap-10 bg-[--background-primary] text-white"
    >
      <div className="z-10 flex w-2/4 flex-col items-center justify-center text-center">
        <p className="text-9xl font-bold max-sm:text-xl">Aashaq</p>

        <div className="mt-10 flex w-[600px] gap-5">
          <InputForm
            className="w-[200px]"
            id="news"
            placeholder="Recieve our latest update..."
            label="News Letter"
          />
          <Buttom
            type="button"
            className="rounded-md bg-red-500 px-2 font-bold"
            label="News letter "
          />
        </div>
      </div>
    </section>
  );
};

export default About;

// <div ref={PlaneRef1} className="absolute size-full max-sm:hidden">
//   {/* First Plane */}
// </div>
// <div ref={PlaneRef2} className="absolute size-full max-sm:hidden">
//   {/* Second Plane */}
// </div>
