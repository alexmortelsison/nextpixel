"use client";
import { CgMail } from "react-icons/cg";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Contact", link: "contact" },
  { name: "About", link: "about" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex max-w-7xl mx-auto px-16 pt-4 border-b w-[1100px] border-gray-400 pb-4 justify-between bg-gray-900/60 rounded-lg">
      <div className="text-xl font-righteous text-orange-500 font-black">
        <Link href={"/"}>NextPixel</Link>
      </div>
      <div className="flex space-x-4 items-center text-white flex-1 pl-24">
        <a
          href="https://www.instagram.com/nextpixelstudiolabs?igsh=MW54eDVqbnQzOGgzYg%3D%3D&utm_source=qr"
          target="_blank"
        >
          <AiFillInstagram className="text-3xl" />
        </a>
        <BsFacebook className="text-2xl" />
        <CgMail className="text-3xl" />
      </div>
      <div className="flex items-center space-x-4 pr-6">
        {navLinks.map((item, index) => (
          <div key={index}>
            <Link
              href={item.link}
              className={`hover:cursor-pointer font-semibold ${
                pathname === item.link
                  ? "text-orange-400"
                  : "text-gray-200 hover:text-orange-400"
              }`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
