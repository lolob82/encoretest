import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ShoppingCart, Filter, Search } from 'lucide-react';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'skincare', 'wellness', 'aromatherapy', 'supplements'];

  const products = [
    {
      id: 1,
      name: 'Organic Face Serum',
      category: 'skincare',
      price: 49.99,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      description: 'Rejuvenating serum with natural botanicals for youthful, glowing skin.',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Herbal Wellness Tea',
      category: 'wellness',
      price: 24.99,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
      description: 'Organic herbal blend for daily wellness and vitality.',
      badge: 'Organic'
    },
    {
      id: 3,
      name: 'Natural Body Butter',
      category: 'skincare',
      price: 34.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop',
      description: 'Rich moisturizer with shea and cocoa butter for silky smooth skin.',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Essential Oil Set',
      category: 'aromatherapy',
      price: 79.99,
      rating: 5.0,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
      description: 'Collection of pure essential oils for aromatherapy and wellness.',
      badge: 'Premium'
    },
    {
      id: 5,
      name: 'Vitamin C Supplement',
      category: 'supplements',
      price: 39.99,
      rating: 4.7,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      description: 'Natural vitamin C from organic sources for immune support.',
      badge: 'Popular'
    },
    {
      id: 6,
      name: 'Lavender Night Cream',
      category: 'skincare',
      price: 42.99,
      rating: 4.8,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop',
      description: 'Soothing night cream with organic lavender for restful sleep.',
      badge: 'Bestseller'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Natural Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Discover our carefully curated collection of premium organic products, 
              each crafted with love and the finest natural ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="skincare">Skincare</option>
                <option value="wellness">Wellness</option>
                <option value="aromatherapy">Aromatherapy</option>
                <option value="supplements">Supplements</option>
              </select>
            </div>
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
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

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;

