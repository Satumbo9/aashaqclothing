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
    <section className="w-[255px] max-sm:w-full">
      <header className="fixed flex h-screen w-[255px] flex-col gap-40 border-r-2 border-[#1d1d1d] bg-[--background-primary] px-5 text-white max-sm:hidden">
        <Link
          className={`transition-color mt-10 text-center text-3xl font-semibold duration-150 ease-out hover:scale-105 ${
            pathname === "/" ? "text-red-500" : "hover:text-red-200"
          }`}
          href="/"
        >
          AASHAQ
        </Link>
        <ul className="flex flex-col gap-10 text-center">
          {navLinks.map((item) => (
            <li className="">
              <Link
                className={`transition-color flex cursor-pointer flex-col items-center gap-5 border-b-2 border-[#1d1d1d] py-2 text-2xl duration-150 ease-out hover:scale-105 ${
                  pathname === item.route
                    ? "text-red-500"
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

      <div className="sticky top-0 flex justify-between p-5 sm:hidden">
        <p className="text-2xl">Kurwa</p>
        <div className="flex items-center gap-3">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
