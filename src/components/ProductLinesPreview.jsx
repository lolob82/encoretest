import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Heart, Shield, Baby, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductLinesPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const productLines = [
    {
      id: 'vitality',
      name: 'Vitality Line',
      description: 'Natural energy boosters for daily vitality and performance',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      features: ['Natural energy boost', 'Enhanced focus', 'Sustained vitality'],
      priceRange: '€25-35'
    },
    {
      id: 'serenity',
      name: 'Serenity Line',
      description: 'Anti-stress solutions for mental balance and relaxation',
      icon: Heart,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
      features: ['Stress reduction', 'Better sleep', 'Mental clarity'],
      priceRange: '€28-40'
    },
    {
      id: 'immunity',
      name: 'Immunity Line',
      description: 'Natural defense reinforcement for optimal health',
      icon: Shield,
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      features: ['Immune support', 'Antioxidant protection', 'Seasonal wellness'],
      priceRange: '€30-45'
    },
    {
      id: 'children',
      name: "Children's Line",
      description: 'Supplements specially adapted for younger users',
      icon: Baby,
      color: 'from-pink-400 to-red-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop',
      features: ['Age-appropriate formulas', 'Pleasant taste', 'Safe ingredients'],
      priceRange: '€20-30'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-amber-500 mr-4"></div>
            <span className="text-amber-600 font-medium uppercase tracking-wide">Our Products</span>
            <div className="h-1 w-12 bg-amber-500 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Four Specialized Lines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each product line is carefully formulated with our unique cold extraction process, 
            combining synergistic ingredients for maximum effectiveness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productLines.map((line, index) => (
            <motion.div
              key={line.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={line.image}
                  alt={line.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 ${line.bgColor} rounded-full flex items-center justify-center`}>
                  <line.icon className={`h-6 w-6 ${line.textColor}`} />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{line.priceRange}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {line.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {line.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {line.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-100 hover:bg-green-600 hover:text-white text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Discover Our Complete Range
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Explore all our products with detailed information, ingredients, and customer reviews. 
            Find the perfect natural solution for your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/our-products"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View All Products
            </Link>
            <Link
              to="/cart"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductLinesPreview;