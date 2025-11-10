"use client";
import Image from "next/image";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Assessments",
      description:
        "Free Assessments on Social, Psychological and environmental conduct.",
      image: "/1.png",
    },
    {
      title: "Trainings",
      description:
        "Free Trainings for kids to improve their social and environmental conduct.",
      image: "/2.webp",
    },
    {
      title: "Kids Artifacts",
      description:
        "Free Artifacts such as animated videos, Worksheets and PPTs designed for different grades.",
      image: "/3.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 w-full">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
        Programs by Cognitive Alliance Forumz (CAF)
      </h2>

      {/* Flexbox layout for cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[18%] max-w-sm gap-6"
          >
            <h3 className="text-[#3290E9] font-semibold text-lg md:text-xl mb-3">
              {program.title}
            </h3>
            <p className="text-[#9D9D9D] text-sm md:text-base mb-6">
              {program.description}
            </p>
            <Image
              src={program.image}
              alt={program.title}
              width={220}
              height={180}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
