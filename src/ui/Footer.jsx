import logo from "../assets/logo.svg"
import instagram from "../assets/icon-instagram.svg"
import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import youtube from "../assets/icon-youtube.svg"
import pinterest from "../assets/icon-pinterest.svg"
import Button from "./Button"
import { Link } from "react-router-dom"

function Footer() {
    return (
         <footer className="bg-customDarkBlue p-6 md:p-8 lg:p-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Logo and Social Links Column */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <img src={logo} alt="EasyBank logo" className="text-white h-6 bg-white px-2 " />
            
            <div className="flex items-center space-x-4">
              <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-70 cursor-pointer transition-opacity" />
              <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-70 cursor-pointer transition-opacity" />
              <img src={twitter} alt="Twitter" className="w-6 h-6 hover:opacity-70 cursor-pointer transition-opacity" />
              <img src={youtube} alt="YouTube" className="w-6 h-6 hover:opacity-70 cursor-pointer transition-opacity" />
              <img src={pinterest} alt="Pinterest" className="w-6 h-6 hover:opacity-70 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center md:text-left">
            <div className="space-y-4">
              <a href="#" className="block text-white hover:text-gray-300 transition-colors">About Us</a>
              <Link to="/contact" className="block text-white hover:text-gray-300 transition-colors">Contact</Link>
              <Link to="/payments" className="block text-white hover:text-gray-300 transition-colors">Payments</Link>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-white hover:text-gray-300 transition-colors">Careers</a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors">Support</a>
              <a href="#" className="block text-white hover:text-gray-300 transition-colors">Privacy Policy</a>
            </div>
          </nav>

          {/* CTA and Copyright */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <Button 
              text="Request Invite" 
              type="primary" 
              className="w-full sm:w-auto px-8 py-3"
            />
            <p className="text-white text-sm">
              © EasyBank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>

    )
}

export default Footer
