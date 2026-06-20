export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-600 text-white min-h-screen flex items-center">

      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">
        🤖
      </div>

      <div className="absolute bottom-20 right-10 text-6xl opacity-20">
        🚀
      </div>

      <div className="absolute top-40 right-32 text-5xl opacity-20">
        ⚙️
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
            Limited Seats Available
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight">
            AI & Robotics
            <br />
            Summer
            <br />
            Workshop
          </h1>

          <p className="text-xl text-blue-100 mt-6 max-w-xl">
            Build your first robot, explore Artificial Intelligence,
            and become a future innovator through fun projects,
            challenges, and hands-on learning.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              🚀 Start Your Mission
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>

          {/* Workshop Quick Details */}

          <div className="flex flex-wrap gap-8 mt-12">

            <div>
              <h3 className="text-3xl font-bold">4 Weeks</h3>
              <p className="text-blue-100">Duration</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">8–14 Years</h3>
              <p className="text-blue-100">Age Group</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Online</h3>
              <p className="text-blue-100">Mode</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">₹2,999</h3>
              <p className="text-blue-100">Fee</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">15 Jul</h3>
              <p className="text-blue-100">Start Date</p>
            </div>

          </div>

        </div>

        {/* Right Side Card */}

        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full">

            <div className="text-center text-8xl">
              🤖
            </div>

            <h3 className="text-3xl font-bold text-center mt-4">
              Mission Future
            </h3>

            <p className="text-center mt-3 text-blue-100">
              Learn AI, Build Robots, Create Amazing Projects
            </p>

            <div className="mt-8 space-y-4">

              <div className="bg-white/10 p-4 rounded-xl">
                ✔ Interactive Sessions
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                ✔ Hands-on Projects
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                ✔ Certificate Included
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}