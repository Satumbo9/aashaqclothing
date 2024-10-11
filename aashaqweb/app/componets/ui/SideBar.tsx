"use client";
import React from "react";
import { navLinks } from "../shared/data";
import { TbBrightnessHalf } from "react-icons/tb";
import { usePathname } from "next/navigation";

import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header
      className="bg-[--background-primary] text-white px-5
      flex flex-col gap-40 border-r-2 border-[#1d1d1d] "
    >
      <Link
        className={`text-3xl font-semibold text-center mt-10  
        transition-color duration-150 ease-out ${
          pathname === "/About" ? "text-red-500" : "hover:text-red-200"
        }`}
        href="/About"
      >
        AASHAQ
      </Link>
      <ul className=" flex flex-col gap-10 text-center ">
        {navLinks.map((item) => (
          <li className="">
            <Link
              className={`text-2xl flex flex-col items-center gap-5
              border-b-2 border-[#1d1d1d] cursor-pointer
                py-2 transition-color duration-150 ease-out
               ${
                 pathname === item.route
                   ? "text-red-500 "
                   : "hover:text-red-200"
               }`}
              href={item.route}
            >
              {item.icon}
              <p className="">{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default SideBar;
