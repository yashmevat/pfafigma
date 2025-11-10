"use client";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, MoreVertical, Globe, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full shadow-2xl">
      {/* --- Top Black Bar --- */}
      <div className="bg-black text-white">
        <div
          className="
            flex items-center justify-between px-4 md:px-6 h-14
            max-w-7xl mx-auto
            2xl:max-w-none 2xl:mx-0 2xl:px-20
          "
        >
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CAF Logo"
              width={32}
              height={32}
              className="object-contain rounded-sm"
            />
            {/* Hide full name on small screens */}
            <span className="font-bold text-sm sm:text-md leading-none hidden sm:inline">
              Cognitive Alliance Forumz (CAF)
            </span>
            <span className="font-medium text-xs sm:hidden">CAF</span>
          </div>

          {/* Right: Greeting + Icons + Hamburger */}
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            {/* Greeting (desktop only) */}
            <span className="whitespace-nowrap hidden sm:inline mr-5">
              Hi Daniel Brin
            </span>

            {/* User icon always visible */}
            <User className="w-5 h-5" />

            {/* Three-dot icon: hide on mobile */}
            <MoreVertical className="w-5 h-5 hidden sm:flex" />

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded hover:bg-white/10 active:scale-[.98] transition"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Navigation Bar --- */}
      <div className="bg-white shadow-2xl">
        <div
          className="
            flex items-center justify-between px-4 md:px-6 md:h-14
            max-w-7xl mx-auto
            2xl:max-w-none 2xl:mx-0 2xl:px-20
            shadow-2xl
          "
        >
          {/* Left-aligned Nav Links */}
          <nav className="hidden md:flex items-center gap-10 text-sm sm:text-base font-semibold text-gray-800 h-full justify-center w-full">
            {[
              { name: "Home", href: "/" },
              { name: "Evaluation", href: "/evaluation" },
              { name: "Programs", href: "/programs" },
              { name: "Articles & Discussions", href: "/articles" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative flex items-center h-full transition-colors duration-200 text-gray-800 hover:text-[#2E98DA] group"
              >
                <span className="pb-1">{link.name}</span>

                {/* Blue underline effect */}
                <span
                  className="
                    absolute left-0 bottom-0 h-[2px] w-0 bg-[#2E98DA]
                    transition-all duration-300 group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Right-side options (desktop only) */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#2E98DA]">
            <Link
              href="/login"
              className="hover:text-[#2E98DA] transition-colors duration-200 whitespace-nowrap"
            >
              Member login
            </Link>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#2E98DA] transition-colors duration-200">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu (slide down from top hamburger) --- */}
        <div
          className={`md:hidden bg-white shadow-md transition-max-height duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="lg:block hidden pb-6 space-y-4">
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "Evaluation", href: "/evaluation" },
                { name: "Programs", href: "/programs" },
                { name: "Articles & Discussions", href: "/articles" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded hover:bg-gray-50 text-gray-800 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded text-[#2E98DA] font-semibold hover:bg-gray-50"
              >
                Member login
              </Link>

              <button
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <Globe className="w-4 h-4" />
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
