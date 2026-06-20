

import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setMessage("⚠ Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("🎉 Registration Successful!");

        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("❌ Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">
            Register Now
          </h2>

          <p className="text-gray-600 mt-4">
            Start your AI & Robotics journey today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Enroll Now 🚀"}
          </button>

          {message && (
            <div className="mt-5 text-center font-semibold">
              {message}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}