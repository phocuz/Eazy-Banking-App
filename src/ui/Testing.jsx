import hamburger from "../assets/icon-hamburger.svg"
import closeHamburger from "../assets/icon-close.svg"
import { useState } from "react";

function Testing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Logo</h1>
        
        {/* Hamburger / Close Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <closeHamburger className="w-6 h-6" /> // Close icon
            ) : (
              <hamburger className="w-6 h-6" /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default Testing
