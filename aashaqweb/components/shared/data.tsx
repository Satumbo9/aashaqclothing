import { nanoid } from "nanoid";
import React from "react";
import {
  FaTshirt,
  FaHandsHelping,
  FaHeart,
  FaShoppingBag,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import { SiMinutemailer } from "react-icons/si";

interface navLinksSchema {
  id: string;
  text: string;
  route: string;
  icon: React.ReactElement;
}

interface aboutImagesSchema {
  id: string;
  url: string;
}

export const aboutImages: aboutImagesSchema[] = [
  {
    id: nanoid(),
    url: "",
  },
];
export const navLinks: navLinksSchema[] = [
  {
    id: nanoid(),
    text: "Coleção",
    route: "/Home",
    icon: <FaTshirt className={`text-[45px] max-sm:text-[30px]`} />,
  },
  {
    id: nanoid(),
    text: "Produtos",
    route: "/Product",
    icon: <FaShoppingBag className={`text-[45px] max-sm:text-[30px]`} />,
  },
  {
    id: nanoid(),
    text: "Ecomendas",
    route: "/Orders",
    icon: <SiMinutemailer className={`text-[45px] max-sm:text-[30px]`} />,
  },
];

export const aboutLinks = [
  {
    id: nanoid(),
    text: "Instagram",
    href: "#",
    icon: <FaInstagram style={{ fontSize: "45px" }} />,
  },
  {
    id: nanoid(),
    text: "Tiktok",
    href: "#",
    icon: <FaTiktok style={{ fontSize: "45px" }} />,
  },
  {
    id: nanoid(),
    text: "Youtube",
    href: "#",
    icon: <FaYoutube style={{ fontSize: "45px" }} />,
  },
];
