import Image from "next/image";
import Link from "next/link";
import { User, MoreVertical, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      {/* --- Top Black Bar --- */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CAF Logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="font-medium text-sm sm:text-base">
              Cognitive Alliance Forumz (CAF)
            </span>
          </div>

          {/* Right: Greeting + Icons */}
          <div className="flex items-center gap-4 text-sm sm:text-base">
            <span>Hi Daniel Brin</span>
            <User className="w-5 h-5" />
            <MoreVertical className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* --- Navigation Bar --- */}
      <div className="bg-white border-b shadow-md">
        {/* NOTE: set py-0 so we control vertical spacing with a fixed height (h-12) */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
          {/* Nav Links: same row height (h-12) and vertically centered */}
          <nav className="flex items-center gap-8 text-sm sm:text-base font-semibold text-gray-800 h-12">
            {[
              { name: "Home", href: "/" },
              { name: "Evaluation", href: "/evaluation" },
              { name: "Programs", href: "/programs" },
              { name: "Articles & Discussions", href: "/articles" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center h-full transition-colors duration-200 ${
                  link.active
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-blue-500"
                } 
                  after:content-[''] after:absolute after:left-0 

                  after:bottom-[-6px] after:h-[2px] after:w-0 hover:after:w-full 
                  after:bg-blue-500 after:transition-all after:duration-300`}
              >
                <span className="pb-1">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right-side options: same row height so they line up */}
          <div className="flex items-center gap-6 text-sm text-blue-500 h-12">
            <Link
              href="/login"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Member login
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors duration-200">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
