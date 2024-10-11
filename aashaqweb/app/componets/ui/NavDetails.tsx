"use client";
import React from "react";
import { navLinks } from "../shared/data";
import Link from "next/link";

const NavDetails = () => {
  return (
    <header
      className="bg-[--background-primary] text-white w-fit px-5
      flex flex-col gap-40 border-r-2 border-[#1d1d1d] max-w-14 "
    >
      <Link
        className="text-3xl font-semibold text-center mt-10  hover:text-red-500 transition-color duration-150 ease-out "
        href="/About"
      >
        AA
      </Link>
    </header>
  );
};

export default NavDetails;
