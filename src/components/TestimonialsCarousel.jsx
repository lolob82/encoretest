import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Wellness Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'NatureMama Heritage has completely transformed my skincare routine. The organic face serum is absolutely amazing - my skin has never looked better!',
      location: 'California, USA'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'As a fitness coach, I recommend NatureMama products to all my clients. The herbal wellness tea has become an essential part of my daily routine.',
      location: 'New York, USA'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The essential oil set is incredible! I use them in my yoga classes and the quality is outstanding. My students always ask where I get them.',
      location: 'Texas, USA'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Naturopathic Doctor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'I recommend NatureMama Heritage to my patients because of their commitment to pure, organic ingredients. The quality is consistently excellent.',
      location: 'Oregon, USA'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Holistic Nutritionist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The natural body butter is a game-changer! It\'s rich, nourishing, and made with ingredients I can trust. My clients love it too.',
      location: 'Washington, USA'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have experienced the transformative power of our natural products.
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl p-8 lg:p-12 shadow-xl max-w-3xl mx-auto">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Quote Icon */}
                    <div className="flex-shrink-0">
                      <Quote className="h-16 w-16 text-green-300" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start items-center mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg lg:text-xl text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonials[currentIndex].text}"
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-green-600 font-medium">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {testimonials[currentIndex].location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">5K+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

