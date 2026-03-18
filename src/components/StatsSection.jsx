import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { number: 10000, suffix: '+', label: 'Happy Customers', duration: 2 },
    { number: 50, suffix: '+', label: 'Natural Products', duration: 1.5 },
    { number: 15, suffix: '', label: 'Years of Heritage', duration: 2.5 },
    { number: 99, suffix: '%', label: 'Organic Ingredients', duration: 2 },
  ];

  const AnimatedNumber = ({ number, suffix, duration, inView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * number));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [inView, number, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-green-600 to-amber-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedNumber
                number={stat.number}
                suffix={stat.suffix}
                duration={stat.duration}
                inView={inView}
              />
              <p className="text-white/90 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-20 h-20 bg-white/10 rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 bg-white/10 rounded-full"></div>
      </div>
    </section>
  );
};

export default StatsSection;

