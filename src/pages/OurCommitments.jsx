import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Recycle, TreePine, Award, Users, Globe, Heart, Shield, Target } from 'lucide-react';

const OurCommitments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const commitments = [
    {
      icon: Leaf,
      title: 'Natural Excellence',
      description: 'Complete traceability of our ingredients with European organic certification',
      details: [
        '100% natural and organic ingredients',
        'Complete supply chain transparency',
        'Regular third-party quality testing',
        'No artificial preservatives or additives'
      ],
      stat: '100%',
      statLabel: 'Organic Certified'
    },
    {
      icon: Recycle,
      title: 'Sustainable Packaging',
      description: '100% recyclable packaging with eco-responsible design',
      details: [
        'Biodegradable and recyclable materials',
        'Minimal packaging design',
        'Carbon-neutral shipping options',
        'Refillable container program'
      ],
      stat: '100%',
      statLabel: 'Recyclable'
    },
    {
      icon: TreePine,
      title: 'Environmental Impact',
      description: 'Active reforestation program supporting biodiversity preservation',
      details: [
        '1% of revenue donated to environmental projects',
        'Partnership with local reforestation initiatives',
        'Carbon offset for all operations',
        'Biodiversity preservation support'
      ],
      stat: '1%',
      statLabel: 'Revenue Donated'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Supporting local producers and communities across France',
      details: [
        'Exclusive partnerships with local farmers',
        'Fair trade practices',
        'Community development programs',
        'Educational initiatives on natural wellness'
      ],
      stat: '50+',
      statLabel: 'Local Partners'
    }
  ];

  const certifications = [
    {
      name: 'European Organic Certification',
      description: 'Certified organic ingredients meeting the highest EU standards',
      icon: Award,
      details: 'All our products are certified organic by accredited European certification bodies, ensuring the highest quality and purity standards.'
    },
    {
      name: 'Mission-Driven Company Label',
      description: 'Official recognition as a purpose-driven business',
      icon: Target,
      details: 'We are officially recognized as a Mission-Driven Company, legally committing us to our social and environmental objectives.'
    },
    {
      name: 'Made in France Guarantee',
      description: 'Proudly manufactured in France with local expertise',
      icon: Globe,
      details: 'All our products are formulated and manufactured in France, supporting local economy and ensuring quality control.'
    },
    {
      name: 'GMP Certified Facilities',
      description: 'Good Manufacturing Practices certification',
      icon: Shield,
      details: 'Our manufacturing facilities are GMP certified, ensuring the highest standards of quality, safety, and consistency.'
    }
  ];

  const impactStats = [
    { number: '1000+', label: 'Trees Planted', description: 'Through our reforestation partnerships' },
    { number: '50+', label: 'Local Producers', description: 'Supporting French agricultural communities' },
    { number: '0', label: 'Waste to Landfill', description: 'Zero waste manufacturing process' },
    { number: '100%', label: 'Renewable Energy', description: 'Powered by clean energy sources' }
  ];

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
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-green-600 mr-4" />
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  Our Commitments
                </h1>
                <p className="text-xl text-green-600 font-medium">Sustainable Excellence</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Our commitment goes beyond creating exceptional products. We're dedicated to 
              preserving our planet and supporting communities for future generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Commitments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl p-8 lg:p-10"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <commitment.icon className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-display font-bold text-gray-900">
                        {commitment.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-700">
                          {commitment.stat}
                        </div>
                        <div className="text-xs font-medium text-green-600 uppercase tracking-wide">
                          {commitment.statLabel}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {commitment.description}
                    </p>

                    <ul className="space-y-3">
                      {commitment.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Certified Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications guarantee the highest standards of quality, 
              sustainability, and ethical business practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-3">
                      {cert.description}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-amber-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our Environmental Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Measurable results from our commitment to sustainability and community support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white/90 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-white/80">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Future Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're continuously working towards even greater sustainability and positive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: '2025',
                title: 'Carbon Neutral Operations',
                description: 'Achieve complete carbon neutrality across all operations and supply chain.'
              },
              {
                year: '2026',
                title: 'Zero Waste Manufacturing',
                description: 'Implement circular economy principles with zero waste to landfill.'
              },
              {
                year: '2027',
                title: 'Biodiversity Restoration',
                description: 'Launch major biodiversity restoration project in the French Alps.'
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                className="text-center bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-green-600 mb-4">
                  {goal.year}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {goal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCommitments;