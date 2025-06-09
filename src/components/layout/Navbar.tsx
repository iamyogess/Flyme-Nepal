"use client";

import { Menu, User, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Guide", link: "/guide" },
  { id: 5, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenu]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenu(false);
      }
    };

    if (isMobileMenu) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenu]);

  return (
    <>
      <nav className="w-full h-20 sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto h-full px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Left side - logo and desktop links */}
          <div className="flex items-center gap-x-14">
            <Link
              href="/"
              className="text-primary font-bold text-3xl md:text-4xl hover:opacity-80 transition-opacity"
            >
              Merofly
            </Link>
            <ul className="hidden lg:flex items-center gap-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className={`font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative group ${
                      pathname === link.link ? "text-primary" : ""
                    }`}
                  >
                    {link.title}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                        pathname === link.link ? "w-full" : ""
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - login button and mobile toggle */}
          <div className="flex items-center gap-x-4">
            <Button className="hidden lg:flex h-11 px-6">
              <Link href="/auth/login" className="flex gap-x-2 items-center">
                <User size={18} />
                Already a member?
              </Link>
            </Button>

            <Button className="md:hidden text-base">
              <Link
                href="/auth/login"
                className="flex gap-x-2 justify-center items-center"
              >
                <User size={20} />
                Login
              </Link>
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-accent transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
            onClick={() => setIsMobileMenu(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border z-50 lg:hidden transform transition-transform duration-300 ease-out ${
              isMobileMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="text-lg font-semibold text-foreground">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenu(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-accent transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile menu content */}
            <div className="flex flex-col h-full">
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Link
                        href={link.link}
                        onClick={() => setIsMobileMenu(false)}
                        className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile login button
              <div className="p-6 border-t border-border">
                <Button className="w-full h-12 text-base">
                  <a href="/auth/login" className="flex gap-x-2 items-center">
                    <User size={20} />
                    Already a member?
                  </a>
                </Button>
              </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
