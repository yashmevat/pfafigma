"use client";
import Image from "next/image";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Assessments",
      description:
        "Free Assessments on Social, Psychological and environmental conduct.",
      image: "/assessment3.svg",
    },
    {
      title: "Trainings",
      description:
        "Free Trainings for kids to improve their social and environmental conduct.",
      image: "/assessment1.svg",
    },
    {
      title: "Kids Artifacts",
      description:
        "Free Artifacts such as animated videos, Worksheets and PPTs designed for different grades.",
      image: "/assessment2.svg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 w-full">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
        Programs by Cognitive Alliance Forumz (CAF)
      </h2>

      {/* Flexbox layout for cards */}
      <div className="flex flex-wrap justify-center gap-10 ">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-md transition-all p-10 px-14 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[80%] max-w-sm gap-6
                 h-130 md:h-150 lg:h-150
            "
          >
            <h3 className="text-[#3290E9] font-semibold text-xl md:text-2xl mb-3">
              {program.title}
            </h3>
            <p className="text-[#9D9D9D] text-xl sm:text-[1rem] md:text-base mb-6 lg:text-2xl">
              {program.description}
            </p>
            <div className="w-[220px] h-[380px] flex justify-center items-center">
              <Image
                src={program.image}
                alt={program.title}
                width={220}
                height={180}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
