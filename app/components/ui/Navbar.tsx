"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
// import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/app/lib/utils";
import img from "../../assets/images/logo.png"
// Navigation links and dropdown items
const navLinks = [
  { href: "/", label: "Home", className: "text-pink-500" },
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Product" },
  { href: "/industries", label: "Industry" },
  { href: "/electronicsSemiconductor", label: "Electronics & Semiconductor" },
  { href: "/solar", label: "Solar" },
  { href: "/hydrogen", label: "Hydrogen" },
  { href: "/contact", label: "Contact" },
];



export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleIndustriesDropdown = () =>
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);

  return (
<header className="container">
  <div className="container px-4 w-full">
    <div className="flex justify-between items-center py-2">
      {/* Logo */}
      <Link href="/">
        <div className="flex justify-start">
          <Image
            src={img}
            alt="Haflinger Tech"
            width={110}
            height={110}
            priority
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-black font-nunito font-semibold text-sm hover:text-pink-500",
              link.className
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-800"
        onClick={toggleMobileMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden fixed z-10 right-0 top-0 bg-white shadow-md">
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="container px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col text-gray-800 items-end hover:text-pink-500 font-medium px-0",
                link.className
              )}
              onClick={toggleMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
</header>
  );
}
