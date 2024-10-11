import React from "react";
import { aboutLinks } from "../componets/shared/data";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-[--background-primary] h-screen w-full text-white  flex flex-col items-center justify-center gap-10">
      <article className="flex  items-end text-center justify-center">
        <div className="">
          <p
            className="text-9xl  font-bold
          
          py-2 transition-color duration-150 ease-out"
          >
            Aashaq
          </p>
          {/* <p className="text-3xl">
            "Aashaq signifies divine love, and you embody its essence
            beautifully"
          </p> */}
        </div>
      </article>

      {/* <article className="flex-1 flex items-center flex-col  ">
        <ul className="flex gap-x-8">
          {aboutLinks.map((item) => (
            <li
              key={item.id}
              className="hover:text-red-500 py-2 transition-color duration-150 ease-out"
            >
              <Link href={item.href}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </article> */}
    </section>
  );
};

export default page;
