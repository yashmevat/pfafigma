export default function SchoolProgramCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center rounded-lg overflow-hidden max-w-8xl mx-auto my-10 bg-white">
      {/* Left Image Section (for md and above) */}
      <div className="hidden lg:flex w-full md:w-160 justify-center ml-10 self-center">
        <img
          src="/programs.png"
          alt="Students in classroom"
          className="w-full h-[22rem] object-cover grayscale"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-200 p-6 md:p-10 flex flex-col justify-center lg:text-center lg:text-left lg:gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold inline-block py-1 mb-4 text-gray-900">
          CAFs Programs At schools
        </h2>

        {/* Image only visible on small devices (below md) */}
        <div className="block lg:hidden mb-4">
          <img
            src="/programs.png"
            alt="Students in classroom"
            className="w-full h-60 sm:h-72 object-cover rounded-md grayscale"
          />
        </div>

        <p className="text-gray-700 text-sm sm:text-base md:text-[1rem] lg:text-[1.1rem] leading-relaxed md:pr-6">
          Children go through key stages—from early bonding and trust-building in infancy,
          to developing independence and self-control in toddlerhood, and forming friendships
          and understanding social rules in early childhood. As they grow, school-age kids
          build self-esteem, empathy, and teamwork, while adolescents explore identity,
          values, and emotional regulation, shaping their social and psychological maturity.
          Children go through key stages—from early bonding and trust-building in infancy,
          to developing independence and self-control in toddlerhood, and forming friendships
          and understanding social rules in early childhood. As they grow, school-age kids
          build self-esteem, empathy, and teamwork, while adolescents explore identity,
          values, and emotional regulation.
        </p>
      </div>
    </div>
  );
}
