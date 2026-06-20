export default function WhyParentsChoose() {
  const features = [
    {
      icon: "🛡️",
      title: "Safe Online Learning",
      desc: "Interactive and secure learning environment for children.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentors",
      desc: "Learn from experienced AI and Robotics instructors.",
    },
    {
      icon: "🤖",
      title: "Hands-On Projects",
      desc: "Build real projects instead of only watching lessons.",
    },
    {
      icon: "🎓",
      title: "Certificate Included",
      desc: "Receive a certificate after successful completion.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Why Parents Choose This Workshop
          </h2>

          <p className="text-gray-600 mt-4">
            Designed to help children learn future-ready skills in a fun way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}