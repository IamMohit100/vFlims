export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-orange-600">VFilms</h1>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-orange-500">About</a></li>
        <li><a href="#services" className="hover:text-orange-500">Services</a></li>
        <li><a href="#portfolio" className="hover:text-orange-500">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
      </ul>
    </nav>
  );
}
