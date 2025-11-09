export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-orange-100 to-pink-100 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Bringing Stories to Life through Visuals 🎥
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        We are a creative film production team passionate about crafting visually stunning stories for brands and creators.
      </p>
      <a
        href="#contact"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}
