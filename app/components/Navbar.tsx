"use client";
import { BiMenuAltRight } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="max-w-7xl mx-auto lg:px-0 md:px-8 pr-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={200}
              height={200}
              className="object-cover w-40 h-50"
            />
          </Link>
        </div>

        <div className="lg:flex border px-16 py-4 space-x-4 tracking-tight bg-gray-800/10 backdrop-blur-sm rounded-full hidden">
          {navLinks.map((link) => (
            <div key={link.href} className="">
              <Link
                href={link.href}
                className={`tracking-tight ${
                  pathName === link.href
                    ? "text-[#82d8dd] font-bold underline underline-offset-8"
                    : "text-gray-400 hover:underline underline-offset-8"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="lg:hidden z-0">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BiMenuAltRight className="text-white" size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Separator />
              <DropdownMenuItem className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center gap-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`tracking-tight ${
                        pathName === link.href
                          ? "text-[#82d8dd] font-bold underline underline-offset-8"
                          : "text-gray-400 hover:underline underline-offset-8"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
