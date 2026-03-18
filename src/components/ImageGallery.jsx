import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      alt: 'Organic herb garden',
      category: 'Ingredients'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Natural skincare products',
      category: 'Products'
    },
    {
      src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop',
      alt: 'Laboratory testing',
      category: 'Quality'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Sustainable packaging',
      category: 'Sustainability'
    },
    {
      src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop',
      alt: 'Customer testimonial',
      category: 'Community'
    },
    {
      src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop',
      alt: 'Herbal tea preparation',
      category: 'Process'
    },
    {
      src: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop',
      alt: 'Natural ingredients',
      category: 'Ingredients'
    },
    {
      src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop',
      alt: 'Essential oils collection',
      category: 'Products'
    }
  ];

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Visual Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our world through images that capture the essence of our natural heritage, 
            from ingredients to finished products.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${image.category}`}
                className="image-gallery-item cursor-pointer rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(image, index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Image
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 bg-white/90 text-gray-900 px-4 py-2 rounded-lg">
                  <p className="font-medium">{selectedImage.alt}</p>
                  <p className="text-sm text-gray-600">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageGallery;

