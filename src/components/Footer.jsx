import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Leaf className="h-8 w-8 text-green-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400"></div>
              </div>
              <div>
                <span className="text-xl font-display font-bold">NatureMama Heritage</span>
                <p className="text-xs text-green-300">The power of nature for your well-being</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Born in the French Alps, we combine ancestral plant wisdom with modern science 
              to create exceptional natural food supplements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/our-history" className="text-gray-400 hover:text-white transition-colors">Our History</Link></li>
              <li><Link to="/our-products" className="text-gray-400 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/our-commitments" className="text-gray-400 hover:text-white transition-colors">Our Commitments</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Product Lines */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Lines</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vitality Line</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Serenity Line</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Immunity Line</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Children's Line</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">contact@naturemama-heritage.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+33 (0)4 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">French Alps, France</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Organic EU</span>
                <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs">Made in France</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Mission-Driven</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 NatureMama Heritage. All rights reserved. Made with 💚 in the French Alps.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

