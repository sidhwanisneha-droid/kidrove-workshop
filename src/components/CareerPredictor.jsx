import { useState } from "react";

export default function CareerPredictor() {
  const [career, setCareer] = useState("");

  const predictions = [
    {
      title: "🤖 Robotics Engineer",
      description:
        "You love building machines and solving real-world problems.",
    },
    {
      title: "🧠 AI Scientist",
      description:
        "You enjoy understanding how intelligent systems work.",
    },
    {
      title: "🎮 Game Developer",
      description:
        "You are creative and love designing interactive experiences.",
    },
    {
      title: "🚀 Space Technology Expert",
      description:
        "You dream big and enjoy exploring future technologies.",
    },
  ];

  const generateCareer = () => {
    const random =
      predictions[Math.floor(Math.random() * predictions.length)];

    setCareer(`${random.title} - ${random.description}`);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          ✨ Future Career Predictor
        </h2>

        <p className="text-gray-600 mb-10">
          Discover a future technology career based on your interests.
        </p>

        <button
          onClick={generateCareer}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Predict My Future 🚀
        </button>

        {career && (
          <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700">
              {career}
            </h3>
          </div>
        )}

      </div>
    </section>
  );
}