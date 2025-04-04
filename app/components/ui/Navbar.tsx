"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to detect active route
import { cn } from "@/app/lib/utils";
import img from "../../assets/images/logo.png";

// Navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/product", label: "Product" },
  { href: "/industries", label: "Industry" },
  { href: "/electronicsSemiconductor", label: "Electronics & Semiconductor" },
  { href: "/solar", label: "Solar" },
  { href: "/hydrogen", label: "Hydrogen" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route
  
  // Removed unused isScrolled state and useEffect

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="container">
      <div className="container px-4 w-full">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/">
            <div className="flex justify-start">
              <Image
                src={img}
                alt="i10Ai Tech"
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
                  "font-nunito font-semibold text-sm hover:text-yellow-500",
                  pathname === link.href ? "text-yellow-500" : "text-black" // Active link is yellow, others black
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-800" onClick={toggleMobileMenu}>
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
              <button className="text-gray-800" onClick={toggleMobileMenu}>
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
                    "flex flex-col items-end font-medium px-0 hover:text-yellow-500",
                    pathname === link.href ? "text-yellow-500" : "text-black" // Active link is yellow, others black
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