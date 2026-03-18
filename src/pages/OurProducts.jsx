import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Heart, Shield, Baby, Star, ShoppingCart, Info, Leaf } from 'lucide-react';

const OurProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedLine, setSelectedLine] = useState('all');

  const productLines = [
    { id: 'all', name: 'All Products', icon: Leaf },
    { id: 'vitality', name: 'Vitality Line', icon: Zap },
    { id: 'serenity', name: 'Serenity Line', icon: Heart },
    { id: 'immunity', name: 'Immunity Line', icon: Shield },
    { id: 'children', name: "Children's Line", icon: Baby }
  ];

  const products = [
    {
      id: 1,
      name: 'Natural Energy Complex',
      line: 'vitality',
      price: 29.90,
      originalPrice: 34.90,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      description: 'Boost your daily energy with our unique blend of natural adaptogens and vitamins.',
      ingredients: ['Ginseng', 'Rhodiola', 'Vitamin B Complex', 'Coenzyme Q10'],
      benefits: ['Sustained energy', 'Mental clarity', 'Reduced fatigue'],
      dosage: '2 capsules daily with breakfast',
      duration: '30 days supply'
    },
    {
      id: 2,
      name: 'Stress Relief Formula',
      line: 'serenity',
      price: 32.90,
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
      description: 'Find your inner calm with our scientifically formulated anti-stress blend.',
      ingredients: ['Ashwagandha', 'L-Theanine', 'Magnesium', 'Chamomile'],
      benefits: ['Stress reduction', 'Better sleep', 'Emotional balance'],
      dosage: '1 capsule morning and evening',
      duration: '30 days supply'
    },
    {
      id: 3,
      name: 'Immune Defense Plus',
      line: 'immunity',
      price: 36.90,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      description: 'Strengthen your natural defenses with our powerful immune support formula.',
      ingredients: ['Vitamin C', 'Zinc', 'Elderberry', 'Echinacea'],
      benefits: ['Immune support', 'Antioxidant protection', 'Seasonal wellness'],
      dosage: '1 capsule daily with meals',
      duration: '30 days supply'
    },
    {
      id: 4,
      name: 'Kids Multivitamin Gummies',
      line: 'children',
      price: 24.90,
      rating: 4.9,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      description: 'Delicious and nutritious gummies specially formulated for growing children.',
      ingredients: ['Vitamin D3', 'Vitamin C', 'B Vitamins', 'Natural Fruit Flavors'],
      benefits: ['Healthy growth', 'Immune support', 'Great taste'],
      dosage: '2 gummies daily',
      duration: '30 days supply'
    },
    {
      id: 5,
      name: 'Focus & Concentration',
      line: 'vitality',
      price: 31.90,
      rating: 4.6,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
      description: 'Enhance mental performance and concentration with our cognitive support blend.',
      ingredients: ['Ginkgo Biloba', 'Bacopa Monnieri', 'Lion\'s Mane', 'Phosphatidylserine'],
      benefits: ['Enhanced focus', 'Memory support', 'Mental clarity'],
      dosage: '2 capsules daily with breakfast',
      duration: '30 days supply'
    },
    {
      id: 6,
      name: 'Sleep & Recovery',
      line: 'serenity',
      price: 28.90,
      rating: 4.8,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      description: 'Promote restful sleep and recovery with our natural nighttime formula.',
      ingredients: ['Melatonin', 'Valerian Root', 'Passionflower', 'Magnesium Glycinate'],
      benefits: ['Better sleep quality', 'Faster recovery', 'Morning freshness'],
      dosage: '1 capsule 30 minutes before bed',
      duration: '30 days supply'
    }
  ];

  const filteredProducts = selectedLine === 'all' 
    ? products 
    : products.filter(product => product.line === selectedLine);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Discover our four specialized product lines, each crafted with our unique cold extraction process 
              and formulated for maximum effectiveness.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span>Made in France</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Organic Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Line Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {productLines.map((line) => (
              <button
                key={line.id}
                onClick={() => setSelectedLine(line.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedLine === line.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <line.icon className="h-5 w-5" />
                {line.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save €{(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{product.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.rating}) • {product.reviews} reviews
                    </span>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">
                        €{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          €{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                        <Info className="h-5 w-5" />
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Dosage */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Dosage:</span> {product.dosage}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Cold Extraction',
                description: 'Patented process preserving active ingredients',
                icon: '❄️'
              },
              {
                title: 'Synergistic Formulas',
                description: 'Ingredients work together for maximum effect',
                icon: '🔬'
              },
              {
                title: 'Natural Preservation',
                description: 'No artificial preservatives or additives',
                icon: '🌿'
              },
              {
                title: 'Eco-Packaging',
                description: '100% recyclable and sustainable materials',
                icon: '♻️'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;