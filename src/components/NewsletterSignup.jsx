import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, CheckCircle, Gift } from 'lucide-react';

const NewsletterSignup = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-green-700 to-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-12">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Mail className="h-10 w-10 text-white" />
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  Join Our Natural Community
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Get exclusive access to new products, wellness tips, and special offers. 
                  Plus, receive 15% off your first order!
                </p>
              </div>

              {/* Benefits */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Gift className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-white mb-2">Exclusive Offers</h3>
                  <p className="text-white/80">Be the first to know about sales and special promotions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Mail className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-white mb-2">Wellness Tips</h3>
                  <p className="text-white/80">Weekly natural wellness advice from our experts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <CheckCircle className="h-8 w-8 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-white mb-2">New Products</h3>
                  <p className="text-white/80">Early access to our latest natural innovations</p>
                </div>
              </motion.div>

              {/* Signup Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm border border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                      </div>
                    ) : (
                      'Get 15% Off'
                    )}
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.form>
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Welcome to the Family!
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Thank you for joining our natural community. Check your email for your 15% discount code!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-white/80 hover:text-white underline transition-colors duration-200"
              >
                Subscribe another email
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-white/10 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-8 h-8 bg-white/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

