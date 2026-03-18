import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, CreditCard, Lock, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutForm = ({ onSubmit, isLoading }) => {
  const { items, getCartTotal, getPromoDiscount, promoCode } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    postalCode: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const orderData = {
        customer: formData,
        items,
        subtotal: getCartTotal(),
        promoDiscount: getPromoDiscount(),
        promoCode: promoCode?.code || null,
        shipping: getCartTotal() > 50 ? 0 : 4.90,
        total: getCartTotal() - getPromoDiscount() + (getCartTotal() > 50 ? 0 : 4.90)
      };
      onSubmit(orderData);
    }
  };

  const subtotal = getCartTotal();
  const promoDiscount = getPromoDiscount();
  const shipping = subtotal > 50 ? 0 : 4.90;
  const total = subtotal - promoDiscount + shipping;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-display font-bold text-gray-900">
              Shipping Information
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.fullName}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.street ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Street and house number"
                />
              </div>
              {errors.street && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.street}
                </div>
              )}
            </div>

            {/* Postal Code and City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.postalCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Postal code"
                />
                {errors.postalCode && (
                  <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {errors.postalCode}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="City"
                />
                {errors.city && (
                  <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    {errors.city}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing Order...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Complete Order - €{total.toFixed(2)}
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-display font-bold text-gray-900">
              Order Summary
            </h2>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-green-600">{item.line}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">€{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-3 mb-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">€{subtotal.toFixed(2)}</span>
            </div>
            
            {promoDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Promo ({promoCode?.code})</span>
                <span>-€{promoDiscount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? 'Free' : `€${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-600">€{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-700">
              <Lock className="h-5 w-5" />
              <span className="font-medium">Secure Checkout</span>
            </div>
            <p className="text-sm text-green-600 mt-1">
              Your payment information is encrypted and secure.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutForm;