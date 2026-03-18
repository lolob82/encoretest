import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationsMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const locations = [
    {
      id: 1,
      name: 'NatureMama Heritage - Main Store',
      address: '123 Nature Street, Green Valley, CA 90210',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      coordinates: [34.0522, -118.2437] // Los Angeles coordinates as example
    },
    {
      id: 2,
      name: 'NatureMama Heritage - Wellness Center',
      address: '456 Organic Avenue, Eco City, CA 90211',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Sat: 8AM-7PM, Sun: 10AM-5PM',
      coordinates: [34.0622, -118.2537]
    },
    {
      id: 3,
      name: 'NatureMama Heritage - Production Facility',
      address: '789 Sustainable Way, Green Valley, CA 90212',
      phone: '+1 (555) 456-7890',
      hours: 'Mon-Fri: 8AM-5PM (Tours by appointment)',
      coordinates: [34.0422, -118.2337]
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
            Visit Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us at one of our convenient locations or schedule a visit to our production facility 
            to see how we craft our natural products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="h-96 bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center relative">
              {/* Interactive Map Placeholder */}
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  Click on markers to view location details
                </p>
              </div>

              {/* Simulated Map Markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-amber-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Map Controls */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>🗺️ Interactive map with directions</span>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Locations List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {location.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{location.hours}</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1">
                    Get Directions
                  </button>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1">
                    Call Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600 to-amber-600 rounded-3xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Schedule a Facility Tour
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Interested in seeing how we create our natural products? Book a guided tour of our 
            production facility and learn about our sustainable practices firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Book a Tour
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsMap;

