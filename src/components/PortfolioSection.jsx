const projects = [
  { title: "Short Film Project", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqtcWA2RgHI_6EEd4-rY8DE0E0_DJy7XBcQ&s" },
  { title: "Music Video", img: "https://i.ytimg.com/vi/ekr2nIex040/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJZTqR7YMkd2UaueVH4cc3O9NScg" },
  { title: "Ad Campaign", img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2db585167415283.6428861a16aa3.png" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold text-orange-500 mb-10">Our Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <h3 className="text-lg font-semibold p-4">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
