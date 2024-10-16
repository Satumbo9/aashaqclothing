"use client";
import React from "react";
// import { navLinks } from "../shared/data";
import { CiDark } from "react-icons/ci";
import { HiMiniShoppingCart } from "react-icons/hi2";

const NavDetails = () => {
  return (
    <header className="z-20 flex h-screen w-[150px] flex-col items-center gap-10 border-l-2 border-[#1d1d1d] bg-[--background-primary] px-5 text-white max-sm:hidden">
      <div className="flex flex-col items-center justify-center">
        {" "}
        <HiMiniShoppingCart
          className="mt-10 flex cursor-pointer flex-col items-center justify-center"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </div>
    </header>
  );
};

export default NavDetails;
