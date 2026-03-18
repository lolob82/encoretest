import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CompanyTimeline from '../components/CompanyTimeline';
import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import LocationsMap from '../components/LocationsMap';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
              Our Natural Heritage
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              For over 15 years, NatureMama Heritage has been dedicated to bringing you 
              the finest natural products, rooted in tradition and powered by innovation. 
              Our journey began with a simple belief: nature holds the key to wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Company Timeline */}
      <CompanyTimeline />

      {/* Team Section */}
      <TeamSection />

      {/* Locations Map */}
      <LocationsMap />
    </div>
  );
};

export default About;

