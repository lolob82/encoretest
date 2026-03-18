import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Recycle, TreePine, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommitmentsPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const commitments = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'Complete traceability of ingredients with European organic certification',
      stat: '100%',
      statLabel: 'Organic'
    },
    {
      icon: Recycle,
      title: 'Eco-Packaging',
      description: '100% recyclable packaging with eco-responsible design',
      stat: '100%',
      statLabel: 'Recyclable'
    },
    {
      icon: TreePine,
      title: 'Reforestation',
      description: 'Active reforestation program supporting biodiversity preservation',
      stat: '1%',
      statLabel: 'Revenue Donated'
    }
  ];

  const certifications = [
    {
      name: 'European Organic',
      description: 'Certified organic ingredients',
      icon: Award
    },
    {
      name: 'Mission-Driven Company',
      description: 'Official sustainable business label',
      icon: Users
    },
    {
      name: 'French Excellence',
      description: 'Made in France guarantee',
      icon: Globe
    }
  ];

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
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-12 bg-green-600 mr-4"></div>
            <span className="text-green-600 font-medium uppercase tracking-wide">Our Commitments</span>
            <div className="h-1 w-12 bg-green-600 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Sustainable Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment goes beyond creating exceptional products. We're dedicated to 
            preserving our planet for future generations through sustainable practices.
          </p>
        </motion.div>

        {/* Main Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <commitment.icon className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-green-700 mb-1">
                  {commitment.stat}
                </div>
                <div className="text-sm font-medium text-green-600 uppercase tracking-wide">
                  {commitment.statLabel}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {commitment.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="bg-gray-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Certified Excellence
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications guarantee the highest standards of quality, 
              sustainability, and ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <cert.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Impact */}
          <div className="bg-gradient-to-r from-green-600 to-amber-600 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-display font-bold mb-4">
              Our Environmental Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white/90">Local Producer Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">0</div>
                <div className="text-white/90">Waste to Landfill</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-white/90">Trees Planted</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/our-commitments"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
          >
            Learn About All Our Commitments
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentsPreview;