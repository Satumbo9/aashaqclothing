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

import SplitType from "split-type";
import Image from "next/image";

const page = () => {
  const logoTextRef = useRef(null);
  const PlaneRef1 = useRef(null);
  const PlaneRef2 = useRef(null);
  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

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
      className="relative flex h-screen w-full flex-col items-center justify-center gap-10 bg-[--background-primary] text-white"
    >
      <div ref={logoTextRef} className="z-10">
        <p className="text-9xl font-bold max-sm:text-xl">Aashaq</p>
      </div>

      <div ref={PlaneRef1} className="absolute size-full max-sm:hidden">
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
        <Image
          className="absolute left-[40%] top-[20%] z-50 opacity-35"
          width={300}
          src={Img5}
          alt="img5"
        />
      </div>
      <div ref={PlaneRef2} className="absolute size-full max-sm:hidden">
        <Image
          className="absolute left-[15%] top-[60%] z-20 opacity-35"
          width={400}
          src={Img4}
          alt="img4"
        />
      </div>
    </section>
  );
};

export default page;
