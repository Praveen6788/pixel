import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-50 shadow-md w-full z-30 min-h-[10vh] border-gray-50  border-b-1 border-opacity-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white text-xl ">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/team">Team</Link>
          <Link to="/update">Updates</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 text-black font-semibold text-lg bg-gray-50 ">
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/update" onClick={() => setIsOpen(false)}>Updates</Link>
        </div>
      )}
    </nav>
  );
}
