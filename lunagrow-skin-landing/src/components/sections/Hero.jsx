import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 py-20 bg-gradient-to-br from-indigo-100 to-white"
    >
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-800 mb-4">
          Radiance Starts with LunaGrow ✨
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Discover the power of nature-infused skincare — gentle, glowing, and
          made for every skin tone.
        </p>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-200">
          Shop Now
        </button>
      </div>

      <div className="flex-1 mt-10 md:mt-0 md:ml-10">
        <img
          src={heroImage}
          alt="LunaGrow natural skincare products"
          className="rounded-3xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;