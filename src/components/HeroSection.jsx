import { motion } from 'framer-motion';
import { ChevronDown, Mountain, Leaf, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - French Alps */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')`
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Mountain className="h-8 w-8 text-green-300 mr-3" />
          <span className="text-lg font-medium text-green-200">Born in the French Alps</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          NatureMama Heritage
        </motion.h1>
        
        <motion.p
          className="text-2xl md:text-3xl mb-4 text-shadow font-light text-amber-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          The power of nature for your well-being
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-8 text-shadow max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          For everyone, a fusion of ancestral plant wisdom with modern science. 
          Discover our premium natural food supplements, crafted with excellence in the heart of France.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link 
            to="/our-products"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg flex items-center gap-2"
          >
            <Leaf className="h-5 w-5" />
            Discover Our Products
          </Link>
          <Link 
            to="/our-history"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg backdrop-blur-sm border border-white/30 flex items-center gap-2"
          >
            <Award className="h-5 w-5" />
            Our Story
          </Link>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold text-green-200 mb-2">100% Natural</h3>
            <p className="text-sm text-white/90">Certified organic ingredients with complete traceability</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold text-amber-200 mb-2">French Excellence</h3>
            <p className="text-sm text-white/90">Made in France with local producer partnerships</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold text-green-200 mb-2">Scientific Innovation</h3>
            <p className="text-sm text-white/90">Patented extraction process preserving active ingredients</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default HeroSection;

