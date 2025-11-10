export default function CafAssessments() {
    const assessments = [
        {
            id: 1,
            title: "Enhancing Self-Awareness and Emotional Intelligence",
            desc: "Our assessments are thoughtfully designed to support the holistic development of school children by focusing on their psychological, social, and environmental conduct. These evaluations provide valuable insights into a child’s emotional well-being, interpersonal skills, and awareness of their surroundings, empowering them to grow into well-rounded individuals. Here’s how our assessments can make a meaningful impact:",
        },
        {
            id: 2,
            title: "Improving Social Skills and Empathy",
            desc: "Through scenario-based questions and interactive activities, we assess a child’s ability to empathize, cooperate, and resolve conflicts. These insights equip children with the tools to navigate social situations effectively, fostering kindness, teamwork, and leadership.",
        },
        {
            id: 3,
            title: "Promoting Environmental Responsibility",
            desc: "Our environmental conduct assessments educate children about sustainability and global citizenship. By evaluating their habits and attitudes toward the environment, we inspire eco-friendly practices and a sense of responsibility toward the planet.",
        },
        {
            id: 4,
            title: "Identifying Strengths and Areas for Growth",
            desc: "The assessments provide a clear picture of each child’s strengths and areas that need improvement. This personalized feedback helps parents, teachers, and students create targeted strategies to address specific needs, ensuring balanced growth.",
        },
        {
            id: 5,
            title: "Tracking Progress Over Time",
            desc: "With regular assessments, schools and families can monitor a child’s development journey through the Holistic Development Index (HDI). This progress tracking ensures timely interventions and celebrates milestones, motivating children to continue improving.",
        },
        {
            id: 6,
            title: "Supporting Personalized Learning",
            desc: "Based on assessment results, children receive tailored recommendations, such as mindfulness exercises, educational resources, or social skill-building activities. This individualized approach enhances learning outcomes and nurtures lifelong skills.",
        },
        {
            id: 7,
            title: "Empowering Parents and Educators",
            desc: "Our assessments provide actionable insights to parents and teachers, helping them understand a child’s unique needs. Equipped with this knowledge, they can offer better guidance, create supportive environments, and foster meaningful communication.",
        },
        {
            id: 8,
            title: "Building a Foundation for Future Success",
            desc: "By addressing psychological, social, and environmental aspects early on, our assessments lay the groundwork for academic success and emotional resilience, preparing students for lifelong achievement.",
        },
    ];

    const colors = [
        "bg-[#ededf6] text-black border-3 border-[#4a4c99]",
        "bg-[#f2edf6] text-black border-3 border-[#744999]",
        "bg-[#f6edf3] text-black border-3 border-[#9d497e]",
        "bg-[#fdf6ec] text-black border-3 border-[#e9a642]",
        "bg-[#f1faf4] text-black border-3 border-[#6bc88d]",
        "bg-[#ebfbf9] text-black border-3 border-[#30d3c1]",
        "bg-[#ebf4fc] text-black border-3 border-[#3690e5]",
        "bg-[#ededf6] text-black border-3 border-[#4a4c99]",
    ];

    const linecolor = [
        "bg-[#2880d3]",
        "bg-[#a98dbe]",
        "bg-[#cea3be]",
        "bg-[#eebc6d]",
        "bg-[#a3dcb8]",
        "bg-[#80e3d8]",
        "bg-[#4d9ee8]",
        "bg-[#a4a5cb]",

    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                How the CAF’s assessments would help the students
            </h2>

            {/* Intro Paragraph */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10 ml-10">
                Our assessments are thoughtfully designed to support the holistic development of school children by focusing
                on their psychological, social, and environmental conduct. These evaluations provide valuable insights into a
                child’s emotional well-being, interpersonal skills, and awareness of their surroundings, empowering them to grow
                into well-rounded individuals. Here’s how our assessments can make a meaningful impact:
            </p>

            {/* Assessment Cards */}
            <div className="flex flex-col ml-20 space-y-6 max-w-5xl">
                {assessments.map((item, index) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-8 bg-white rounded-lg p-5"
                    >
                        {/* Number Badge */}
                        <div
                            className={`flex items-center justify-center w-12 h-12 rounded-md font-semibold ${colors[index]} flex-shrink-0`}
                        >
                            {item.id}
                        </div>

                        {/* Text Content */}
                        <div>
                            <div>
                                <div>

                                    <h3 className="text-gray-900 font-bold mb-1 text-sm md:text-lg">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className={` w-140 h-0.5 ${linecolor[index]}`}>

                                </div>

                            </div>
                            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
