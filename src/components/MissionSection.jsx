import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Leaf, Users } from 'lucide-react';

const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Heart,
      title: 'Passion for Wellness',
      description: 'We believe in the transformative power of natural ingredients to enhance your well-being and vitality.',
      color: 'primary'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Our commitment to the environment drives every decision, from sourcing to packaging.',
      color: 'earth'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We build lasting relationships with our customers, partners, and the communities we serve.',
      color: 'primary'
    },
    {
      icon: Target,
      title: 'Quality Excellence',
      description: 'Every product meets our rigorous standards for purity, potency, and effectiveness.',
      color: 'earth'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-green-600 mb-3">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower individuals on their wellness journey by providing premium, 
                  organic products that harness the healing power of nature. We are committed 
                  to sustainability, transparency, and creating a positive impact on both 
                  personal health and planetary well-being.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-amber-600 mb-3">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the world's most trusted natural wellness brand, inspiring a global 
                  community to embrace the wisdom of nature for a healthier, more sustainable future.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Target Community</h4>
              <p className="text-gray-700">
                We serve health-conscious individuals, wellness enthusiasts, and families who 
                prioritize natural, organic products. Our community includes yoga practitioners, 
                fitness enthusiasts, holistic health advocates, and anyone seeking to enhance 
                their well-being through nature's gifts.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  value.color === 'primary' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-amber-100 text-amber-600'
                }`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold mb-4">
              Making a Difference Together
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our impact goes beyond products – we're building a community committed to wellness and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Organic Ingredients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Partner Farms</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-white/80">Waste Packaging</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Heritage</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;

