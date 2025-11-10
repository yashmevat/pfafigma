"use client";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-12">
      {/* Top Quote Section */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-gray-700 pb-10">
        {/* Image */}
        <div className="flex-shrink-0 p-[2px]">
          <Image
            src="/UrieBronfenbrenner.jpg"
            alt="Urie Bronfenbrenner"
            width={260}
            height={180}
            className="object-cover grayscale"
          />
        </div>

        {/* Quote and Author */}
        <div className="flex flex-col w-full">
          {/* Quote */}
          <p className="text-[#8888] leading-relaxed mb-4">
            In order to develop—intellectually, emotionally, socially—a child
            requires participation in progressively more complex activities,
            typically with one or more adults who have an irrational emotional
            attachment to the child.
          </p>

          {/* Author info aligned right but text left */}
          <div className="flex flex-col items-end">
            <div className="text-left">
              <h3 className="text-white font-semibold">
                -Urie Bronfenbrenner (1917–2005)
              </h3>
              <p className="text-sm text-[#8888]">
                Developmental Psychologist, Researcher, and Professor <br />
                (Cornell University)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="max-w-5xl mx-auto px-6 mt-8 flex flex-col items-center justify-between text-sm text-gray-400 space-y-4">
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact Us
          </a>
        </div>
        <p className="text-gray-500">@2025 CognitiveAllianceForumz</p>
      </div>
    </footer>
  );
}
