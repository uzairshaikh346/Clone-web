"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black w-full uppercase tracking-[0.22px] text-[16px] md:text-[18px] lg:text-[22px] p-6 md:p-8 lg:p-11 relative z-50">
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/images/logo-black.png" // Place the image in the 'public/images' folder
              alt="Shop Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-8 lg:gap-16 justify-end items-center">
          <li>
            <Link href="#" className="hover:underline">
              Catalogue
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Fashion
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Favourite
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Lifestyle
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-black text-white rounded-md py-2 px-3 md:py-3 md:px-4 hover:bg-gray-800 transition"
            >
              Sign up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <div className="space-y-1 cursor-pointer" onClick={toggleMobileMenu}>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col justify-start gap-5 h-screen absolute top-0 left-0 bg-yellow-300 p-10 items-start transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden z-50`}
        >
          <li>
            <Link href="#" className="hover:underline" onClick={toggleMobileMenu}>
              Catalogue
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline" onClick={toggleMobileMenu}>
              Fashion
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline" onClick={toggleMobileMenu}>
              Favourite
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline" onClick={toggleMobileMenu}>
              Lifestyle
            </Link>
          </li>
          <li>
            <Link href="#" className="bg-black text-white rounded-md py-2 px-3 hover:bg-gray-800 transition" onClick={toggleMobileMenu}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
