# NatureMama Heritage - Deployment Guide

This guide will help you deploy your NatureMama Heritage e-commerce website with full order processing capabilities.

## Prerequisites

Before starting, ensure you have:
- An AWS account with appropriate permissions
- A verified email address in Amazon SES
- Basic familiarity with AWS Console

## Step 1: Set Up Amazon SES (Email Service)

1. **Go to Amazon SES Console**
   - Navigate to https://console.aws.amazon.com/ses/
   - Make sure you're in the **us-east-1** region

2. **Verify Your Email Address**
   - Click "Verified identities" in the left sidebar
   - Click "Create identity"
   - Select "Email address"
   - Enter your business email (e.g., `orders@naturemama-heritage.com`)
   - Click "Create identity"
   - Check your email and click the verification link

3. **Request Production Access** (Important!)
   - By default, SES is in "sandbox mode" (can only send to verified emails)
   - Click "Account dashboard" in the left sidebar
   - If you see "Sandbox" status, click "Request production access"
   - Fill out the form explaining your use case
   - This usually takes 24-48 hours to approve

## Step 2: Deploy AWS Infrastructure

### Option A: Quick Fix (Immediate Solution)
If you're experiencing CORS issues, use the fixed template:

1. **Delete Current Stack** (if it exists and has issues):
   - Go to CloudFormation Console
   - Select your stack (`naturemama-heritage-infrastructure`)
   - Click "Delete" and wait for completion

2. **Deploy Fixed Template**:
   - Click "Create stack" → "With new resources (standard)"
   - Select "Upload a template file"
   - Choose `aws-infrastructure-fixed.yaml` (the new fixed version)
   - **Stack name**: `naturemama-heritage-infrastructure`
   - **SenderEmail**: Enter your verified email address
   - Complete deployment (5-10 minutes)

### Option B: Update Existing Stack
If you want to update your existing stack:

1. **Update CloudFormation Stack**:
   - Go to CloudFormation Console
   - Select your stack
   - Click "Update" → "Replace current template"
   - Upload `aws-infrastructure-fixed.yaml`
   - Complete the update

2. **Force API Gateway Redeploy**:
   - Go to API Gateway Console
   - Find your API (`naturemama-orders-api`)
   - Click "Actions" → "Deploy API"
   - Select "prod" stage → "Deploy"

## Step 3: Configure Your Website

1. **Create Environment File**
   - Copy `.env.example` to `.env`
   - Replace `your-api-gateway-url` with the API URL from Step 2.6
   
   ```
   VITE_API_URL=https://abc123.execute-api.us-east-1.amazonaws.com/prod
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Test Locally**
   ```bash
   npm run dev
   ```
   - Open http://localhost:5173
   - Add products to cart and test checkout process

## Step 4: Deploy to AWS Amplify

1. **Build Your Site**
   ```bash
   npm run build
   ```

2. **Go to AWS Amplify Console**
   - Navigate to https://console.aws.amazon.com/amplify/
   - Click "Get started" under "Deploy"

3. **Deploy from Local Files**
   - Select "Deploy without Git provider"
   - Enter app name: `naturemama-heritage`
   - Drag and drop your `dist` folder
   - Click "Save and deploy"

4. **Get Your Website URL**
   - Once deployed, you'll get a URL like: `https://abc123.amplifyapp.com`

## Step 5: Test Everything

1. **Test Order Process**
   - Visit your live website
   - Add products to cart
   - Complete checkout with real information
   - Check that you receive confirmation email

2. **Check Orders in Database**
   - Go to DynamoDB Console
   - Find table `naturemama-orders`
   - Click "Explore table items" to see orders

## Step 6: Domain Setup (Optional)

1. **Purchase Domain** (if you don't have one)
   - Use Route 53 or your preferred registrar

2. **Configure Custom Domain in Amplify**
   - In Amplify console, click "Domain management"
   - Click "Add domain"
   - Follow the setup wizard

## Troubleshooting

### CORS Errors
If you see CORS errors when submitting orders:
1. **Update CloudFormation Stack**:
   - Go to CloudFormation console
   - Select your stack (`naturemama-heritage-infrastructure`)
   - Click "Update"
   - Choose "Replace current template"
   - Upload the updated `aws-infrastructure.yaml` file
   - Complete the update process

2. **Redeploy API Gateway**:
   - Go to API Gateway console
   - Find your API (`naturemama-orders-api`)
   - Click "Actions" → "Deploy API"
   - Select "prod" stage
   - Click "Deploy"

3. **Test CORS**:
   - In browser developer tools, check if OPTIONS requests are successful
   - Verify API responses include `Access-Control-Allow-Origin: *` header

### Email Not Sending
- Check SES is out of sandbox mode
- Verify sender email address in SES
- Check CloudWatch logs for Lambda function

### API Errors
- Check Lambda function logs in CloudWatch
- Verify API Gateway is deployed correctly
- Test API endpoints directly in API Gateway console

### Website Not Loading
- Check Amplify build logs
- Verify environment variables are set correctly
- Check browser console for errors

## Important Notes

- **Costs**: This setup uses AWS pay-as-you-go services. Typical costs for low traffic:
  - DynamoDB: ~$1-5/month
  - Lambda: ~$0-2/month
  - API Gateway: ~$1-3/month
  - SES: ~$0-1/month
  - Amplify: ~$1-5/month

- **Security**: The API is currently open (no authentication). For production, consider adding API keys or authentication.

- **Monitoring**: Check CloudWatch regularly for errors and performance metrics.

## Support

If you encounter issues:
1. Check AWS CloudWatch logs
2. Verify all services are in us-east-1 region
3. Ensure SES is out of sandbox mode
4. Test API endpoints directly in API Gateway console

Your NatureMama Heritage e-commerce site is now ready to accept orders and process them automatically!