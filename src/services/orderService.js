const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod';

export const submitOrder = async (orderData) => {
  try {
    console.log('Submitting order to:', `${API_BASE_URL}/orders`);
    console.log('Order data:', orderData);

    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...orderData,
        timestamp: new Date().toISOString(),
        orderNumber: generateOrderNumber()
      })
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const result = await response.json();
    console.log('Order submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting order:', error);
    
    // If it's a network error and we're in development, show a helpful message
    if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
      console.warn('API not available or CORS issue. This might be expected in development.');
      
      // Return a mock success response for development
      if (import.meta.env.DEV) {
        const mockOrderNumber = generateOrderNumber();
        return {
          success: true,
          orderNumber: mockOrderNumber,
          total: orderData.total,
          message: 'Order created successfully (development mode)'
        };
      }
    }
    
    throw error;
  }
};

const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `NM${timestamp}${random}`;
};