const services = [
  { title: "Film Production", desc: "From concept to completion — cinematic storytelling for every platform." },
  { title: "Branding", desc: "Crafting strong visual identities that connect with your audience." },
  { title: "Art Curation", desc: "Creative direction and design that elevate brand aesthetics." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50 px-6 text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
