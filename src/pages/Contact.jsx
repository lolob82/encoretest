import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import LocationsMap from '../components/LocationsMap';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@naturemama.com</p>
                    <p className="text-gray-600">support@naturemama.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">123 Nature Street</p>
                    <p className="text-gray-600">Green Valley, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">How long does shipping take?</h4>
                    <p className="text-gray-600 text-sm">Standard shipping takes 3-5 business days.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Do you offer international shipping?</h4>
                    <p className="text-gray-600 text-sm">Yes, we ship to most countries worldwide.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">What is your return policy?</h4>
                    <p className="text-gray-600 text-sm">30-day money-back guarantee on all products.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LocationsMap />
    </div>
  );
};

export default Contact;

