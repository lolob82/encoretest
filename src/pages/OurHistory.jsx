import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mountain, Calendar, Award, Users, Leaf, Heart } from 'lucide-react';

const OurHistory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2023',
      title: 'Foundation in the French Alps',
      description: 'NatureMama Heritage was born in the heart of the French Alps, inspired by the richness of French biodiversity and ancestral plant wisdom.',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      year: '2023',
      title: 'First Product Development',
      description: 'Development of our unique cold extraction process, combining synergistic ingredients with natural preservation methods.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
    },
    {
      year: '2024',
      title: 'Organic Certification',
      description: 'Achieved European organic certification and Mission-Driven Company label, establishing our commitment to excellence.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Built partnerships with local producers and established our multichannel distribution network across France.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop'
    }
  ];

  const philosophy = [
    {
      title: 'Ancestral Wisdom',
      description: 'We honor traditional plant knowledge passed down through generations, respecting the time-tested wisdom of natural healing.',
      icon: Heart
    },
    {
      title: 'Modern Science',
      description: 'Our patented extraction process preserves the integrity of active ingredients while ensuring maximum bioavailability.',
      icon: Award
    },
    {
      title: 'Sustainable Future',
      description: 'Every decision we make considers the impact on future generations, from sourcing to packaging to community support.',
      icon: Leaf
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Mountain className="h-12 w-12 text-green-600 mr-4" />
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  Our History
                </h1>
                <p className="text-xl text-green-600 font-medium">Born in the French Alps</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The story of NatureMama Heritage begins in 2023, in the pristine mountains of France, 
              where ancestral plant wisdom meets cutting-edge scientific innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Family Heritage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our History: A Family Passion Passed Down Through Generations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From ancestral family traditions to modern scientific excellence, 
              discover the heritage that shapes every product we create.
            </p>
          </motion.div>

          {/* Three Heritage Inserts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Roots - Family Tradition */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop"
                  alt="Family tradition in French countryside"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-green-700 font-bold text-lg">Roots</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Family Tradition
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A family passion for natural remedies passed down through generations 
                  in the French countryside. Our ancestors understood the healing power 
                  of plants long before modern science validated their wisdom.
                </p>
              </div>
            </motion.div>

            {/* 2023 - Foundation */}
            <motion.div
              className="bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                  alt="Modern laboratory meeting traditional knowledge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-amber-700 font-bold text-lg">2023</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Foundation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  NatureMama Heritage was born from the meeting of ancestral secrets 
                  and modern scientific validation. We bridge generations of natural 
                  wisdom with cutting-edge research and innovation.
                </p>
              </div>
            </motion.div>

            {/* Today - Excellence */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                  alt="High-quality organic supplements made in France"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-green-700 font-bold text-lg">Today</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  High-quality, certified organic natural food supplements, made in France 
                  with complete traceability. Every product embodies our commitment to 
                  excellence and our respect for nature's wisdom.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Philosophy & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              NatureMama Heritage is committed to creating food supplements of excellence, 
              in harmony with nature and respectful of the environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                className="text-center bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            className="bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl p-8 lg:p-12 text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              To democratize access to high-quality natural solutions while preserving natural resources 
              for future generations. We believe in making premium wellness accessible to everyone, 
              combining tradition and modernity, accessibility and premium quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From our founding in the French Alps to becoming a trusted name in natural wellness.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-200 to-amber-200 h-full hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <span className="text-2xl font-bold text-green-600">{event.year}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {event.description}
                      </p>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <event.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Complete Traceability',
                description: 'Every ingredient is tracked from source to final product'
              },
              {
                title: 'Exclusive Partnerships',
                description: 'Direct relationships with local French producers'
              },
              {
                title: 'Patented Process',
                description: 'Cold extraction preserving active ingredient integrity'
              },
              {
                title: 'Certified Excellence',
                description: 'European organic and Mission-Driven Company labels'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;