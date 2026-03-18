import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mountain, Leaf, Award, Heart, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandStorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Mountain,
      title: 'Alpine Heritage',
      description: 'Born in the French Alps, inspired by pristine mountain biodiversity'
    },
    {
      icon: Leaf,
      title: 'Natural Excellence',
      description: 'Cold extraction process preserving the integrity of active ingredients'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'European organic certification and Mission-Driven Company label'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-green-600 mr-4"></div>
            <span className="text-green-600 font-medium uppercase tracking-wide">Our Story</span>
            <div className="h-1 w-12 bg-green-600 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Where Tradition Meets Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2023, NatureMama Heritage embodies the meeting of ancestral plant wisdom 
            and modern scientific innovation, born in the heart of the French Alps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Our Philosophy & Mission
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Excellence in Harmony</h4>
                  <p className="text-gray-600">
                    We create food supplements of excellence, in harmony with nature and 
                    respectful of the environment, preserving natural resources for future generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accessible Wellness</h4>
                  <p className="text-gray-600">
                    Our mission is to democratize access to high-quality natural solutions, 
                    making premium wellness accessible to everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainable Future</h4>
                  <p className="text-gray-600">
                    1% of our revenue supports biodiversity preservation projects, 
                    with 100% recyclable packaging and active reforestation programs.
                  </p>
                </div>
              </div>
            </div>

            <Link 
              to="/our-history"
              className="inline-flex items-center mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Discover Our Full Story
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
              alt="French Alps landscape"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">French Alps</p>
                  <p className="text-sm text-gray-600">Our birthplace</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStorySection;