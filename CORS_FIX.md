# 🔧 CORS Fix - Quick Solution

## The Issue
Your API is deployed but CORS preflight requests are failing because the OPTIONS method isn't returning the correct headers.

## 🚀 **IMMEDIATE FIX (2 minutes)**

### Option 1: Fix via API Gateway Console (Fastest)

1. **Go to API Gateway Console**: https://console.aws.amazon.com/apigateway/
2. **Find your API**: `naturemama-orders-api`
3. **Click on `/orders` resource**
4. **Click on `OPTIONS` method**
5. **Click "Integration Response"**
6. **Click on "200" response**
7. **Click "Header Mappings"**
8. **Add these headers**:
   ```
   Access-Control-Allow-Origin: '*'
   Access-Control-Allow-Headers: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
   Access-Control-Allow-Methods: 'GET,POST,PUT,DELETE,OPTIONS'
   ```
9. **Click "Actions" → "Deploy API"**
10. **Select "prod" stage → Deploy**

### Option 2: Test API Directly (Verify it works)

Open browser and go to:
```
https://83ob2ey6ql.execute-api.us-east-1.amazonaws.com/prod/orders
```

You should see:
```json
{"orders":[],"lastKey":null,"count":0}
```

If you see this, the API works but CORS is the only issue.

## 🔧 **Alternative: Enable CORS via Console**

1. **Go to API Gateway Console**
2. **Select your API**: `naturemama-orders-api`
3. **Click on `/orders` resource**
4. **Click "Actions" → "Enable CORS"**
5. **Set**:
   - Access-Control-Allow-Origin: `*`
   - Access-Control-Allow-Headers: `Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token`
   - Access-Control-Allow-Methods: `GET,POST,PUT,DELETE,OPTIONS`
6. **Click "Enable CORS and replace existing CORS headers"**
7. **Click "Actions" → "Deploy API"**
8. **Select "prod" stage → Deploy**

## 🧪 **Test the Fix**

1. **Clear browser cache** (important!)
2. **Go to your website**
3. **Add products to cart**
4. **Complete checkout**
5. **Check browser console** - should NOT see CORS errors
6. **Check DynamoDB** - order should appear
7. **Check email** - confirmation should arrive

## 🎯 **Expected Result**

After the fix:
- ✅ No CORS errors in browser console
- ✅ Orders appear in DynamoDB table `naturemama-orders`
- ✅ Email confirmations are sent
- ✅ Success message shows on website

## 📞 **If Still Not Working**

Try this manual test:

1. **Open browser developer tools**
2. **Go to Console tab**
3. **Paste this code**:
```javascript
fetch('https://83ob2ey6ql.execute-api.us-east-1.amazonaws.com/prod/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customer: {
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      street: '123 Test St',
      postalCode: '12345',
      city: 'Test City'
    },
    items: [{
      id: 1,
      name: 'Test Product',
      price: 29.90,
      quantity: 1,
      line: 'Test Line'
    }],
    subtotal: 29.90,
    total: 29.90
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

If this works, the API is fine and it's just a CORS configuration issue.

**This should fix your CORS issue in under 5 minutes!**