function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold text-indigo-700">LunaGrow Skin</h1>

      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#hero" className="hover:text-indigo-600">Home</a>
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </nav>

      <button className="md:hidden text-indigo-700">
        <span className="text-xl">☰</span>
      </button>
    </header>
  );
}

export default Header;