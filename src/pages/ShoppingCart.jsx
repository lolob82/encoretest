import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Plus, Minus, Trash2, Gift, Truck, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/CheckoutForm';
import { submitOrder } from '../services/orderService';

const ShoppingCartPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { 
    items: cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartTotal, 
    getCartItemsCount,
    getPromoDiscount,
    promoCode,
    applyPromoCode,
    removePromoCode,
    clearCart
  } = useCart();

  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handlePromoCodeSubmit = () => {
    const validPromoCodes = {
      'welcome10': { code: 'WELCOME10', discount: 0.1, description: '10% off your first order' },
      'nature15': { code: 'NATURE15', discount: 0.15, description: '15% off for nature lovers' }
    };

    const promo = validPromoCodes[promoCodeInput.toLowerCase()];
    if (promo) {
      applyPromoCode(promo);
      setPromoCodeInput('');
    } else {
      alert('Invalid promo code');
    }
  };

  const handleOrderSubmit = async (orderData) => {
    setIsSubmitting(true);
    try {
      const result = await submitOrder(orderData);
      setOrderDetails(result);
      setOrderComplete(true);
      clearCart();
      
      // Show additional message if in fallback mode
      if (result.fallbackMode) {
        console.log('Order processed in fallback mode - API not available');
      }
    } catch (error) {
      alert('There was an error processing your order. Please try again.');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const subtotal = getCartTotal();
  const promoDiscount = getPromoDiscount();
  const shipping = subtotal > 50 ? 0 : 4.90;
  const total = subtotal - promoDiscount + shipping;

  if (orderComplete) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your order. You will receive a confirmation email shortly.
            </p>
            {orderDetails && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <p className="text-green-700 font-medium">
                  Order Number: {orderDetails.orderNumber}
                </p>
                <p className="text-green-600">
                  Total: €{orderDetails.total?.toFixed(2)}
                </p>
              </div>
            )}
            <Link
              to="/our-products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
            >
              Continue Shopping
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => setShowCheckout(false)}
              className="text-green-600 hover:text-green-700 font-medium mb-4 inline-flex items-center gap-2"
            >
              ← Back to Cart
            </button>
            <h1 className="text-3xl font-display font-bold text-gray-900">
              Checkout
            </h1>
          </motion.div>
          <CheckoutForm onSubmit={handleOrderSubmit} isLoading={isSubmitting} />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <ShoppingCart className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-display font-bold text-gray-900">
              Shopping Cart
            </h1>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              {getCartItemsCount()} items
            </span>
          </div>
        </motion.div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our natural products and start your wellness journey.
            </p>
            <Link
              to="/our-products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
            >
              Shop Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="p-6 hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-green-600 mb-2">{item.line}</p>
                          <p className="text-sm text-gray-600">{item.duration}</p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-lg font-bold text-green-600">
                              €{item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                €{item.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Promo Code */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 mt-6"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Promo Code</h3>
                </div>
                
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={handlePromoCodeSubmit}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Apply
                  </button>
                </div>

                {promoCode && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-medium">
                          {promoCode.code} applied: {promoCode.description}
                        </span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-green-600 hover:text-green-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo ({promoCode.code})</span>
                      <span>-€{promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="text-sm text-gray-500">
                      Free shipping on orders over €50
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">€{total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium transition-colors duration-200 mb-4"
                >
                  Proceed to Checkout
                </button>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span>Free shipping on orders over €50</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-green-600" />
                    <span>Eco-friendly packaging included</span>
                  </div>
                </div>
              </motion.div>

              {/* Recommended Products */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-6 mt-6"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  You might also like
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      name: 'Immune Defense Plus',
                      price: 36.90,
                      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop'
                    },
                    {
                      name: 'Sleep & Recovery',
                      price: 28.90,
                      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=100&h=100&fit=crop'
                    }
                  ].map((product, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                        <p className="text-green-600 font-bold text-sm">€{product.price}</p>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;