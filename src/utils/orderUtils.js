// Utility functions for managing orders in localStorage

export const getStoredOrders = () => {
  try {
    const orders = localStorage.getItem('naturemama-orders');
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error reading stored orders:', error);
    return [];
  }
};

export const clearStoredOrders = () => {
  try {
    localStorage.removeItem('naturemama-orders');
    console.log('Stored orders cleared');
  } catch (error) {
    console.error('Error clearing stored orders:', error);
  }
};

export const exportOrdersToConsole = () => {
  const orders = getStoredOrders();
  console.log('=== STORED ORDERS ===');
  console.table(orders);
  console.log('Total orders:', orders.length);
  return orders;
};

// Add to window for easy access in browser console
if (typeof window !== 'undefined') {
  window.NatureMamaOrders = {
    getOrders: getStoredOrders,
    clearOrders: clearStoredOrders,
    exportOrders: exportOrdersToConsole
  };
}