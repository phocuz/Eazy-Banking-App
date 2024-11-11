import hamburger from "../assets/icon-hamburger.svg"
import closeHamburger from "../assets/icon-close.svg"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import Button from "./Button"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/payments", label: "Payment" }
  ];

     const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className=" w-full py-6 flex justify-between sticky z-10 items-center px-8 bg-white shadow-md">
     
            <Link to="/" className="w-1/3 sm:w-1/4 md:w-1/5"> <img src={logo} alt="logo"  /></Link>
            <nav className="hidden sm:block text-gray-600 justify-between space-x-6 text-2xl font-light ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/payments">Payments</Link>
            </nav>

             <Button text="Request Invite" type="primary" className ="hidden md:block"  />

            <>
      <button 
        onClick={toggleMenu} 
        className=" top-4 right-4 z-50 text-white focus:outline-none sm:hidden"
      
      >
        <img 
          src={isOpen ? closeHamburger : hamburger} 
          alt="menu" 
          className="w-8 h-6 transition-opacity duration-300"
        />
      </button>

      <div 
        className={`fixed inset-0 bg-white transform transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        } z-40`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <div className="space-y-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                // className={`transform transition-all duration-300 ease-in-out ${
                //   isOpen 
                //     ? 'translate-y-0 opacity-100' 
                //     : 'translate-y-8 opacity-0'
                // }`}
                // style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  to={item.path}
                  className="text-2xl text-customDarkBlue font-medium hover:text-gray-300 transition-colors block text-center"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
        </div>
    )
}

export default Header
