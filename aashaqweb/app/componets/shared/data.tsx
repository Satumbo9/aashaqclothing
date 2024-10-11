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

export const navLinks: navLinksSchema[] = [
  {
    id: nanoid(),
    text: "Coleção",
    route: "/Home",
    icon: <FaTshirt style={{ fontSize: "45px" }} />,
  },
  {
    id: nanoid(),
    text: "Produtos",
    route: "/Product",
    icon: <FaShoppingBag style={{ fontSize: "45px" }} />,
  },
  {
    id: nanoid(),
    text: "Inquerito",
    route: "/Inquiry",
    icon: <SiMinutemailer style={{ fontSize: "45px" }} />,
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
