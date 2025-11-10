"use client";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center bg-white ">
      {/* Left Side - Image */}
      <div className="w-full md:w-[40%] flex justify-center items-center p-4 md:p-10">
        <Image
          src="/bronfenbrenner.webp"
          alt="Urie Bronfenbrenner teaching"
          width={400}
          height={300}
          className="object-cover h-full w-auto md:h-[400px] rounded-md"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-[60%] flex flex-col justify-center px-6 md:px-12 py-8 text-center md:text-left ">
        <p className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed mb-6">
          The world of the child is not defined by the walls of the home, nor
          even of the classroom, but extends outward to encompass the larger
          society—the community, the culture, the economic system, and the
          political structure.
        </p>
        <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg text-center">
          - Urie Bronfenbrenner (1917–2005)
        </p>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1 md:pl-4 sm:pl-2  text-center">
          Developmental Psychologist, Researcher, and Professor
          <br />
          (Cornell University)
        </p>
      </div>
    </section>
  );
}
