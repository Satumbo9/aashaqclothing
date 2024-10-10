import { nanoid } from "nanoid";
import { FaTshirt, FaHandsHelping, FaShippingFast } from "react-icons/fa";

import { IoMdChatboxes } from "react-icons/io";

export const navLinks = [
  {
    id: nanoid(),
    text: "Coleção",
    route: "/Home",
    icon: <FaTshirt style={{ fontSize: "50px" }} />,
  },
  {
    id: nanoid(),
    text: "Missão",
    route: "/Mission",
    icon: <FaHandsHelping style={{ fontSize: "50px" }} />,
  },
  {
    id: nanoid(),
    text: "Inquerito",
    route: "/Inquiry",
    icon: <IoMdChatboxes style={{ fontSize: "50px" }} />,
  },
];
