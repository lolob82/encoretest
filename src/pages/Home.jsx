import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HeroSection';
import BrandStorySection from '../components/BrandStorySection';
import ProductLinesPreview from '../components/ProductLinesPreview';
import CommitmentsPreview from '../components/CommitmentsPreview';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Story Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <BrandStorySection />
      </motion.div>

      {/* Product Lines Preview */}
      <ProductLinesPreview />

      {/* Commitments Preview */}
      <CommitmentsPreview />

      {/* Customer Testimonials */}
      <TestimonialsCarousel />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default Home;

