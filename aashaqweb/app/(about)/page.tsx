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
import { CiShirt } from "react-icons/ci";
import { FaHeart, FaPeace } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaEarthAfrica } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { motion } from "framer-motion";

const About = () => {
  const logoTextRef = useRef(null);
  const PlaneRef1 = useRef(null);
  const PlaneRef2 = useRef(null);
  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.003;

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
      className="max-h[100vh] relative flex h-screen w-screen max-w-[100%] flex-col items-center justify-center gap-10 bg-[--background-primary] text-white"
    >
      {/* <motion.div
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        ref={PlaneRef1}
        className="absolute h-screen w-screen max-sm:hidden"
      >
        <div className="absolute right-[80%] top-[70%] flex h-40 w-40 flex-col items-center justify-center">
          Passion
          <CiShirt className="h-32 w-32 text-white" />
        </div>
        <div className="absolute right-[50%] top-[5%] flex h-20 w-20 flex-col items-center">
          Love
          <FaHeart className="h-full w-full text-red-500" />
        </div>
        <div className="absolute right-[10%] top-[10%] flex h-40 w-40 flex-col items-center justify-center">
          Peace
          <FaPeace className="h-full w-full text-yellow-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        ref={PlaneRef2}
        className="absolute size-full max-sm:hidden"
      >
        <div className="absolute right-[45%] top-[70%] flex h-32 w-32 flex-col items-center justify-center">
          Your favorite spot
          <BiSolidPlaneAlt className="h-full w-full text-sky-500" />
        </div>
        <div className="absolute right-[75%] top-[30%] flex h-40 w-40 flex-col items-center justify-center">
          Existence
          <FaEarthAfrica className="h-full w-full text-pink-500" />
        </div>
        <div className="absolute right-[10%] top-[65%] h-40 w-40 flex-col items-center justify-center">
          Health
          <CgGym className="h-full w-full text-pink-500" />
        </div>
      </motion.div> */}
      <div className="z-10 flex w-2/4 flex-col items-center justify-center gap-1 text-center">
        <p className="z-10 text-9xl font-bold max-sm:text-xl">Aashaq</p>
      </div>
    </section>
  );
};

export default About;
