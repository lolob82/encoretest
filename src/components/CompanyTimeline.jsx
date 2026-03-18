import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Leaf, Users, Globe, Heart } from 'lucide-react';

const CompanyTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded by Maria Rodriguez with a passion for natural wellness and a small herb garden in her backyard.',
      icon: Leaf,
      color: 'primary'
    },
    {
      year: '2011',
      title: 'First Products',
      description: 'Launched our first line of organic skincare products, handcrafted in small batches with locally sourced ingredients.',
      icon: Heart,
      color: 'earth'
    },
    {
      year: '2014',
      title: 'Organic Certification',
      description: 'Achieved USDA Organic certification, ensuring the highest standards of purity and quality in all our products.',
      icon: Award,
      color: 'primary'
    },
    {
      year: '2017',
      title: 'Community Growth',
      description: 'Reached 1,000 happy customers and established partnerships with local organic farms across three states.',
      icon: Users,
      color: 'earth'
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Launched our e-commerce platform and expanded our reach to customers nationwide during the wellness revolution.',
      icon: Globe,
      color: 'primary'
    },
    {
      year: '2023',
      title: 'Sustainability Milestone',
      description: 'Achieved carbon-neutral operations and launched our zero-waste packaging initiative.',
      icon: Leaf,
      color: 'earth'
    },
    {
      year: '2026',
      title: 'Heritage Continues',
      description: 'Today, we serve over 10,000 customers worldwide while maintaining our commitment to natural, sustainable wellness.',
      icon: Award,
      color: 'primary'
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to a thriving natural wellness company, 
            discover the milestones that shaped our heritage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-200 via-amber-200 to-green-200 h-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
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
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span className="text-2xl font-bold text-gray-900">{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                    event.color === 'primary' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-amber-500 text-white'
                  }`}>
                    <event.icon className="h-8 w-8" />
                  </div>
                  {/* Connecting line for mobile */}
                  {index < timelineEvents.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-200 mt-4"></div>
                  )}
                </div>

                {/* Spacer for desktop */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Be Part of Our Story
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands of customers who have made NatureMama Heritage part of their wellness journey. 
              Your story is the next chapter in our heritage.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-lg px-8 py-4">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimeline;

