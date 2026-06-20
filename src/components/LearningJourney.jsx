export default function LearningJourney() {
  const outcomes = [
    "🤖 Build Basic Robots",
    "🧠 Understand AI Concepts",
    "💻 Learn Programming Logic",
    "🚀 Create Mini Projects",
    "🎯 Improve Problem Solving Skills",
  ];

  const weeks = [
    {
      week: "Week 1",
      title: "Meet AI",
      desc: "Learn what Artificial Intelligence is and how it impacts our daily lives.",
    },
    {
      week: "Week 2",
      title: "Build Robots",
      desc: "Explore robotics components and create your first robot model.",
    },
    {
      week: "Week 3",
      title: "Program Robots",
      desc: "Use simple coding concepts to make robots perform tasks.",
    },
    {
      week: "Week 4",
      title: "Final Project Showcase",
      desc: "Present your AI & Robotics project with confidence.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            What You'll Learn
          </h2>

          <p className="text-gray-600 mt-4">
            A fun and engaging journey into AI and Robotics.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">

          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-2 text-center"
            >
              <p className="font-semibold text-lg">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* Timeline Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            4 Week Learning Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {weeks.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                {item.week}
              </span>

              <h3 className="text-2xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}