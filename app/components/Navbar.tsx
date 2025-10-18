import { CgMail } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", link: "" },
  { name: "Contact", link: "contact" },
  { name: "About", link: "about" },
];

export default function Navbar() {
  return (
    <div className="flex max-w-7xl mx-auto px-21 pt-4 border-b border-dashed border-gray-400 pb-4 justify-between">
      <div className="text-xl font-righteous text-orange-500 font-black">
        <Link href={"/"}>NextPixel</Link>
      </div>
      <div className="flex space-x-4 items-center text-orange-400 flex-1 pl-24">
        <AiFillInstagram className="text-3xl" />
        <BsFacebook className="text-2xl" />
        <CgMail className="text-3xl" />
      </div>
      <div className="flex items-center space-x-4">
        {navLinks.map((item, index) => (
          <div key={index}>
            <Link
              href={item.link}
              className="hover:cursor-pointer text-orange-400 font-semibold"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
