"use client";
import React from "react";
import { navLinks } from "../shared/data";
// import { TbBrightnessHalf } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <React.Fragment>
      <header className="z-20 flex h-screen w-[200px] flex-col items-center gap-y-36 border-r-2 border-[#1d1d1d] bg-[--background-primary] text-white max-sm:hidden">
        <Link
          className={`transition-color mt-10 flex w-fit items-center text-center text-3xl font-bold duration-150 ease-out ${
            pathname === "/" ? "text-red-500" : "hover:text-red-200"
          }`}
          href="/"
        >
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            AASHAQ
          </motion.p>
        </Link>
        <ul className="flex flex-col gap-10 text-center">
          {navLinks.map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={item.id}
              className=""
            >
              <Link
                className={`transition-color flex h-40 w-40 cursor-pointer flex-col items-center gap-5 border-b-2 border-[#1d1d1d] py-2 text-2xl ${
                  pathname === item.route
                    ? "text-red-500"
                    : "hover:text-red-200"
                }`}
                href={item.route}
              >
                {item.icon}
                <p className="">{item.text}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </header>
      {/* My menu for small screens  */}
      <div className="sticky top-0 flex items-center justify-between bg-[--background-primary] p-5 text-white sm:hidden">
        <Link href={`/`} className="text-2xl font-bold">
          Aashaq
        </Link>
        <ul className="flex gap-10 text-center">
          {navLinks.map((item) => (
            <li key={item.id} className="">
              <Link
                className={`transition-color flex cursor-pointer flex-col items-center py-2 text-2xl duration-150 ease-out hover:scale-105 ${
                  pathname === item.route
                    ? "text-red-500"
                    : "hover:text-red-200"
                }`}
                href={item.route}
              >
                {item.icon}
                <p className="max-sm:hidden">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
