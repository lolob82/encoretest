import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import YouTube from 'react-youtube';

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Our Story: From Heritage to Innovation',
      description: 'Discover how NatureMama Heritage began and our commitment to natural wellness.'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Behind the Scenes: Product Creation',
      description: 'See how we carefully craft each product with love and attention to detail.'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      title: 'Customer Success Stories',
      description: 'Real testimonials from customers who have transformed their wellness journey.'
    }
  ];

  const opts = {
    height: '315',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
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
            Our Journey in Motion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our story unfold through these carefully curated videos that showcase 
            our passion, process, and the people who make it all possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="aspect-video">
                <YouTube
                  videoId={video.id}
                  opts={opts}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-50 to-amber-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                The NatureMama Heritage Experience
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Join us on a virtual tour of our facilities and meet the passionate team 
                behind every product. See firsthand our commitment to quality, sustainability, 
                and the natural wellness of our customers.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Watch Full Documentary
              </button>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <YouTube
                videoId="dQw4w9WgXcQ" // Replace with actual featured video ID
                opts={{ ...opts, height: '100%' }}
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

