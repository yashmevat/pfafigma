"use client";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start min-h-screen bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 md:p-10">
        <Image
          src="/bronfenbrenner.jpg" // 👈 rename your image to this and place in public folder
          alt="Urie Bronfenbrenner teaching"
          width={500}
          height={400}
          className="rounded-md object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-6 text-center md:text-left">
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          The world of the child is not defined by the walls of the home, nor
          even of the classroom, but extends outward to encompass the larger
          society—the community, the culture, the economic system, and the
          political structure.
        </p>
        <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
          - Urie Bronfenbrenner (1917–2005)
        </p>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
          Developmental Psychologist, Researcher, and Professor
          <br />
          (Cornell University)
        </p>
      </div>
    </section>
  );
}
