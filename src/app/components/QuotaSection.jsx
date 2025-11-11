"use client";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="flex flex-col lg:flex-row items-stretch justify-center bg-white w-full">
      {/* Left Side - Image */}
      <div className="w-full md:w-[80%] lg:w-[90%] 2xl:w-[55%] flex justify-center lg:justify-start items-center p-4 md:p-10 md:ml-20">
        <Image
          src="/bronfenbrenner.webp"
          alt="Urie Bronfenbrenner teaching"
          width={450}
          height={400}
          className="object-cover h-[300px] w-[80%] sm:h-100 lg:h-110"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full  flex flex-col justify-center px-6 md:px-12 lg:px-0 lg:mr-15 xl:mr-0 py-8 md:gap-14">
        {/* Quote Text */}
        <p className="text-gray-700 xl:w-[70%] w-full text-sm sm:text-lg md:text-md lg:text-xl xl:text-2xl leading-relaxed mb-4 text-center md:text-left">
          The world of the child is not defined by the walls of the home, nor
          even of the classroom, but extends outward to encompass the larger
          society—the community, the culture, the economic system, and the
          political structure.
        </p>

        {/* Author Info */}
        <div className="text-center md:text-left md:self-end mt-4 md:mr-20 w-full md:w-[70%]">
          <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-2xl">
            - Urie Bronfenbrenner (1917–2005)
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-xl">
            Developmental Psychologist, Researcher, and Professor
            <br />
            (Cornell University)
          </p>
        </div>
      </div>
    </section>
  );
}
