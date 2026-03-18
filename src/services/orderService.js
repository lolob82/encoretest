const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod';

export const submitOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...orderData,
        timestamp: new Date().toISOString(),
        orderNumber: generateOrderNumber()
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting order:', error);
    throw error;
  }
};

const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `NM${timestamp}${random}`;
};