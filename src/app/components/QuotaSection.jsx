"use client";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-[40%] flex justify-center items-center p-4 md:p-10">
        <Image
          src="/bronfenbrenner.webp"
          alt="Urie Bronfenbrenner teaching"
          width={400}
          height={300}
          className="object-cover h-full w-auto md:h-[400px]"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-[60%] flex flex-col justify-center px-6 md:px-12 py-8">
        {/* Quote Text */}
        <p className="text-gray-700 w-[70%] text-sm sm:text-base md:text-xl leading-relaxed mb-4 text-center md:text-left">
          The world of the child is not defined by the walls of the home, nor
          even of the classroom, but extends outward to encompass the larger
          society—the community, the culture, the economic system, and the
          political structure.
        </p>

        {/* Author Info - right aligned but text left-justified */}
        <div className="text-left self-end mt-4 mr-20 w-[70%]">
          <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            - Urie Bronfenbrenner (1917–2005)
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Developmental Psychologist, Researcher, and Professor
            <br />
            (Cornell University)
          </p>
        </div>
      </div>
    </section>
  );
}
