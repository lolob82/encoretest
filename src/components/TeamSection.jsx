import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Maria founded NatureMama Heritage with a vision to bring natural wellness to everyone. With 20+ years in organic farming.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria@naturemama.com'
      }
    },
    {
      name: 'Dr. James Chen',
      role: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Dr. Chen leads our research team with expertise in botanical science and natural product development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@naturemama.com'
      }
    },
    {
      name: 'Sarah Thompson',
      role: 'Head of Sustainability',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Sarah ensures all our practices align with our environmental values and sustainability goals.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@naturemama.com'
      }
    },
    {
      name: 'Michael Park',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Michael oversees our production and ensures the highest quality standards in every product we create.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@naturemama.com'
      }
    }
  ];

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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind NatureMama Heritage, dedicated to bringing you 
            the finest natural products with expertise and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4 text-gray-600 hover:text-green-600" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Twitter className="h-4 w-4 text-gray-600 hover:text-green-600" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 text-gray-600 hover:text-green-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our commitment to natural wellness 
              and sustainable practices. Explore career opportunities with us.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-lg px-8 py-4">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

