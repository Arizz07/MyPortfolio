"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MoonIcon } from "@heroicons/react/24/solid";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative"> {/* 👈 wrapper relative for dropdown */}
      <nav className="flex justify-between items-center bg-sky-500/50 p-2">
        {/* Logo */}
        <div className="p-1 font-semibold tracking-widest px-2 text-xl">
          <Link href={"/"}>Ariizz</Link>
        </div>

       {/* Desktop Menu */}
<div className="hidden md:flex gap-10 mr-6 items-center text-lg font-medium">
  <Link
    href={"#about"}
    className="relative group"
  >
    About
    <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href={"#contact"}
    className="relative group"
  >
    Contact
    <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href={"/about"}
    className="relative group"
  >
    CV
    <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</div>


        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Button */}
          <button>
            <MoonIcon className="w-6 h-6" />
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setShow(!show)} className="md:hidden">
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {show && (
        <div className="md:hidden flex flex-col bg-sky-500/50 text-black absolute top-14 right-4 w-40 rounded-lg shadow-md p-4 space-y-3 z-50">
          <Link href={"#about"} onClick={() => setShow(false)}>About</Link>
          <Link href={"#contact"} onClick={() => setShow(false)}>Contact</Link>
          <Link href={"/about"} onClick={() => setShow(false)}>CV</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
