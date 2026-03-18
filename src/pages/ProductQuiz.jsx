import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Star } from 'lucide-react';

const ProductQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'skinType',
      question: 'What is your skin type?',
      options: [
        { value: 'dry', label: 'Dry - Often feels tight or flaky' },
        { value: 'oily', label: 'Oily - Shiny with enlarged pores' },
        { value: 'combination', label: 'Combination - Oily T-zone, dry cheeks' },
        { value: 'sensitive', label: 'Sensitive - Easily irritated or reactive' },
        { value: 'normal', label: 'Normal - Balanced and comfortable' }
      ]
    },
    {
      id: 'concerns',
      question: 'What are your main wellness concerns?',
      options: [
        { value: 'aging', label: 'Anti-aging and wrinkle prevention' },
        { value: 'acne', label: 'Acne and blemish control' },
        { value: 'hydration', label: 'Deep hydration and moisture' },
        { value: 'stress', label: 'Stress relief and relaxation' },
        { value: 'energy', label: 'Energy boost and vitality' }
      ]
    },
    {
      id: 'lifestyle',
      question: 'Which lifestyle describes you best?',
      options: [
        { value: 'active', label: 'Very active - Regular exercise and outdoor activities' },
        { value: 'busy', label: 'Busy professional - Limited time for self-care' },
        { value: 'wellness', label: 'Wellness focused - Prioritize natural health' },
        { value: 'family', label: 'Family oriented - Looking for safe, gentle products' },
        { value: 'minimalist', label: 'Minimalist - Prefer simple, effective routines' }
      ]
    },
    {
      id: 'budget',
      question: 'What is your preferred price range?',
      options: [
        { value: 'budget', label: 'Budget-friendly - Under $30' },
        { value: 'moderate', label: 'Moderate - $30-60' },
        { value: 'premium', label: 'Premium - $60-100' },
        { value: 'luxury', label: 'Luxury - $100+' }
      ]
    }
  ];

  const productRecommendations = {
    'dry-aging-active-premium': {
      name: 'Organic Anti-Aging Serum',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      description: 'Perfect for active individuals with dry skin seeking anti-aging benefits.',
      benefits: ['Reduces fine lines', 'Deep hydration', 'Natural peptides']
    },
    'oily-acne-busy-moderate': {
      name: 'Clarifying Tea Tree Set',
      price: '$49.99',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      description: 'Quick and effective solution for busy professionals with oily, acne-prone skin.',
      benefits: ['Controls oil', 'Fights acne', 'Quick routine']
    }
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const getRecommendation = () => {
    const key = `${answers.skinType}-${answers.concerns}-${answers.lifestyle}-${answers.budget}`;
    return productRecommendations[key] || productRecommendations['dry-aging-active-premium'];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  className="bg-white rounded-2xl shadow-xl p-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    {questions[currentQuestion].question}
                  </h2>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          answers[questions[currentQuestion].id] === option.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option.label}</span>
                          {answers[questions[currentQuestion].id] === option.value && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevQuestion}
                      disabled={currentQuestion === 0}
                      className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      Previous
                    </button>
                    <button
                      onClick={nextQuestion}
                      disabled={!answers[questions[currentQuestion].id]}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            /* Results */
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Your Perfect Match!
              </h2>
              <p className="text-gray-600 mb-8">
                Based on your answers, we recommend this product for your wellness journey:
              </p>

              {(() => {
                const recommendation = getRecommendation();
                return (
                  <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-6 mb-8">
                    <img
                      src={recommendation.image}
                      alt={recommendation.name}
                      className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {recommendation.name}
                    </h3>
                    <p className="text-green-600 text-2xl font-bold mb-3">
                      {recommendation.price}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {recommendation.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {recommendation.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-600">(4.9/5)</span>
                    </div>
                  </div>
                );
              })()}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Add to Cart
                </button>
                <button
                  onClick={resetQuiz}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductQuiz;

