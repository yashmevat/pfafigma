export default function SchoolProgramCard() {
    return (
        <div className="h-100 flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-full mx-auto my-10">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 flex justify-center self-center ">
                <img
                    src="https://blog.schoolspecialty.com/wp-content/uploads/2023/02/happy-classroom-learning-environment-GettyImages-1210928359-1200x624.jpg"
                    alt="Students in classroom"
                    className="w-200 h-80 object-cover grayscale"
                />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center gap-5">
                <h2 className="text-3xl font-semibold inline-block py-1 mb-5 text-gray-900">
                    CAFs Programs At schools
                </h2>

                <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed mb-3 mr-7.5">
                    Children go through key stages—from early bonding and trust-building in infancy,
                    to developing independence and self-control in toddlerhood, and forming friendships
                    and understanding social rules in early childhood. As they grow, school-age kids
                    build self-esteem, empathy, and teamwork, while adolescents explore identity,
                    values, and emotional regulation, shaping their social and psychological maturity.  Children go through key stages—from early bonding and trust-building in infancy,
                    to developing independence and self-control in toddlerhood, and forming friendships
                    and understanding social rules in early childhood. As they grow, school-age kids
                    build self-esteem, empathy, and teamwork, while adolescents explore identity,
                    values, and emotional regulation.
                </p>
            </div>
        </div>
    );
}
