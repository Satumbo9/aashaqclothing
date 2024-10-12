"use client";
import React from "react";
// import { navLinks } from "../shared/data";
import { CiDark } from "react-icons/ci";

const NavDetails = () => {
  return (
    <header className="w-[150px] flex-col gap-40 border-r-2 border-[#1d1d1d] bg-[--background-primary] px-5 text-white max-sm:hidden">
      <div className="mt-10 flex cursor-pointer flex-col items-center justify-center">
        <CiDark
          className=""
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <p className="mt-5 font-bold">Dark Mode</p>
      </div>
    </header>
  );
};

export default NavDetails;
