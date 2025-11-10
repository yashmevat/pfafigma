"use client";
import Image from "next/image";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Assessments",
      description:
        "Free Assessments on Social, Psychological and environmental conduct.",
      image: "/assessment.png",
    },
    {
      title: "Trainings",
      description:
        "Free Trainings for kids to improve their social and environmental conduct.",
      image: "/training.png",
    },
    {
      title: "Kids Artifacts",
      description:
        "Free Artifacts such as animated videos, Worksheets and PPTs designed for different grades.",
      image: "/kids-artifacts.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 w-full">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
        Programs by Cognitive Alliance Forumz (CAF)
      </h2>

      {/* Flexbox layout for cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white shadow-sm hover:shadow-md transition-all p-8 flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[18%] max-w-sm"
          >
            <h3 className="text-sky-600 font-semibold text-lg md:text-xl mb-3">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6">
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
