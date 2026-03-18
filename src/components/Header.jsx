import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Leaf, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Our History', path: '/our-history' },
    { name: 'Our Products', path: '/our-products' },
    { name: 'Our Commitments', path: '/our-commitments' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className={`h-10 w-10 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                isScrolled ? 'bg-amber-500' : 'bg-amber-300'
              }`}></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-display font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                NatureMama Heritage
              </span>
              <span className={`text-xs font-medium ${
                isScrolled ? 'text-green-600' : 'text-green-200'
              }`}>
                The power of nature for your well-being
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? isScrolled ? 'text-green-700 border-b-2 border-green-700' : 'text-amber-200 border-b-2 border-amber-200'
                    : isScrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-amber-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Shopping Cart */}
            <Link
              to="/cart"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 relative ${
                isScrolled 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 mx-4 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              className="flex items-center space-x-2 py-3 px-4 mt-2 bg-green-600 text-white rounded-lg font-medium relative"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Shopping Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

