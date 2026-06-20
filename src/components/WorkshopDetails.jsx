export default function WorkshopDetails() {
  const details = [
    {
      icon: "👦",
      title: "Age Group",
      value: "8–14 Years",
    },
    {
      icon: "📅",
      title: "Duration",
      value: "4 Weeks",
    },
    {
      icon: "🌐",
      title: "Mode",
      value: "Online",
    },
    {
      icon: "💰",
      title: "Fee",
      value: "₹2,999",
    },
    {
      icon: "🚀",
      title: "Start Date",
      value: "15 July 2026",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Workshop Details
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Everything you need to know before starting your AI journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {details.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700">
                {item.value}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}