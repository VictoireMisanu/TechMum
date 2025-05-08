import { Facebook, Instagram, Music, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-gray-100 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/">
                <img src="/images/logoMumTech.png" alt="Logo" className="w-32 h-32 mb-4" />
              </Link>
              <p className="text-gray-700 text-sm text-center md:text-left">Mum's Tech</p>
            </div>
  
            {/* About */}
            <div>
              <h3 className="text-primaryViolete font-bold mb-4">A PROPPOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/notre-mission" className="text-gray-700 hover:text-primaryViolete">
                    NOTRE MISSION
                  </Link>
                </li>
                <li>
                  <Link to="/nos-valeurs" className="text-gray-700 hover:text-primaryViolete">
                    NOS VALEURS
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-primaryViolete font-bold mb-4">CONTACTEZ-NOUS</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">+4238 1291 9502</li>
                <li>
                  <a href="mailto:venuedailleurs@gmail.com" className="text-gray-700 hover:text-primaryViolete">
                    mumstech@gmail.com
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-4">
              <Link to="https://facebook.com" className="text-gray-700 hover:text-primaryViolete">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="https://instagram.com" className="text-gray-700 hover:text-primaryViolete">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="https://X.com" className="text-gray-700 hover:text-primaryViolete">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="https://tiktok.com" className="text-gray-700 hover:text-primaryViolete">
                <Music className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
  
          <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">©2025 by mumstech enterprise</div>
        </div>
      </footer>
    )
  }
  