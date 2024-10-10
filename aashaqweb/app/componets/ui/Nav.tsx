"use client";
import React from "react";
import { navLinks } from "../shared/data";
import Link from "next/link";

const Nav = () => {
  return (
    <header
      className="bg-[#171717] text-white max-w-56 px-5
      flex flex-col gap-40"
    >
      <Link
        className="text-3xl font-semibold text-center mt-10  hover:text-red-500 transition-all duration-150 ease-out "
        href="/About"
      >
        AASHAQ
      </Link>
      <ul className=" flex flex-col gap-10 text-center">
        {navLinks.map((item) => (
          <li className="">
            <Link
              className="text-2xl flex flex-col items-center  hover:text-red-500 transition-all duration-150 ease-out"
              href={item.route}
            >
              {item.icon}
              <p className="font-semibold">{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Nav;
