import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity === 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'APPLY_PROMO':
      return {
        ...state,
        promoCode: action.payload
      };

    case 'REMOVE_PROMO':
      return {
        ...state,
        promoCode: null
      };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  promoCode: null
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('naturemama-cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.items.forEach(item => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      });
      if (parsedCart.promoCode) {
        dispatch({ type: 'APPLY_PROMO', payload: parsedCart.promoCode });
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('naturemama-cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const applyPromoCode = (promoCode) => {
    dispatch({ type: 'APPLY_PROMO', payload: promoCode });
  };

  const removePromoCode = () => {
    dispatch({ type: 'REMOVE_PROMO' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getPromoDiscount = () => {
    if (!state.promoCode) return 0;
    const subtotal = getCartTotal();
    return subtotal * state.promoCode.discount;
  };

  const value = {
    items: state.items,
    promoCode: state.promoCode,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyPromoCode,
    removePromoCode,
    getCartTotal,
    getCartItemsCount,
    getPromoDiscount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};