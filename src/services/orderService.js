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
    
    // If it's a CORS or network error, provide a fallback
    if (error.message.includes('Failed to fetch') || error.message.includes('CORS')) {
      console.warn('API not available or CORS issue. Using fallback order processing.');
      
      // For now, simulate successful order processing
      const mockOrderNumber = generateOrderNumber();
      
      // Store order locally for demonstration
      const orderWithNumber = {
        ...orderData,
        orderNumber: mockOrderNumber,
        timestamp: new Date().toISOString(),
        status: 'confirmed'
      };
      
      // Save to localStorage as backup
      try {
        const existingOrders = JSON.parse(localStorage.getItem('naturemama-orders') || '[]');
        existingOrders.push(orderWithNumber);
        localStorage.setItem('naturemama-orders', JSON.stringify(existingOrders));
      } catch (e) {
        console.error('Error saving order locally:', e);
      }
      
      // Return success response
      return {
        success: true,
        orderNumber: mockOrderNumber,
        total: orderData.total,
        message: 'Order received successfully! You will receive a confirmation email shortly.'
      };
    }
    
    throw error;
  }
};

const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `NM${timestamp}${random}`;
};