import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurHistory from './pages/OurHistory';
import OurProducts from './pages/OurProducts';
import OurCommitments from './pages/OurCommitments';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import './utils/orderUtils'; // Initialize order utilities

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-history" element={<OurHistory />} />
              <Route path="/our-products" element={<OurProducts />} />
              <Route path="/our-commitments" element={<OurCommitments />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

