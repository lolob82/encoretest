# NatureMama Heritage - Architecture Diagram

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           NatureMama Heritage E-commerce                        │
│                                Architecture                                     │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   Customer      │    │   React App     │    │   AWS Amplify   │
│   Browser       │◄──►│   (Frontend)    │◄──►│   (Hosting)     │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                │ HTTPS API Calls
                                ▼
                       ┌─────────────────┐
                       │                 │
                       │  API Gateway    │
                       │  (REST API)     │
                       │                 │
                       └─────────────────┘
                                │
                                │ Invoke
                                ▼
                       ┌─────────────────┐
                       │                 │
                       │  Lambda         │
                       │  Function       │
                       │  (Node.js 20.x) │
                       │                 │
                       └─────────────────┘
                                │
                    ┌───────────┼───────────┐
                    │           │           │
                    ▼           ▼           ▼
          ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
          │             │ │             │ │             │
          │  DynamoDB   │ │  Amazon     │ │ CloudWatch  │
          │  (Orders)   │ │  SES        │ │ (Logs)      │
          │             │ │ (Email)     │ │             │
          └─────────────┘ └─────────────┘ └─────────────┘
```

## Component Details

### Frontend Layer
- **React Application**: Modern SPA with shopping cart, checkout, and order management
- **AWS Amplify**: Static website hosting with CDN and SSL
- **Features**: Product catalog, cart management, checkout form, order confirmation

### API Layer
- **API Gateway**: RESTful API endpoints for order processing
- **Endpoints**:
  - `POST /orders` - Create new order
  - `GET /orders` - List all orders (admin)
  - `GET /orders/{orderNumber}` - Get specific order
- **CORS**: Configured for cross-origin requests from frontend

### Processing Layer
- **Lambda Function**: Serverless order processing
- **Runtime**: Node.js 20.x with CommonJS syntax
- **Functions**:
  - Order validation and creation
  - Email notification sending
  - Database operations
  - Error handling and logging

### Data Layer
- **DynamoDB**: NoSQL database for order storage
- **Table**: `naturemama-orders`
- **Key**: `orderNumber` (String)
- **Features**: Pay-per-request billing, point-in-time recovery

### Communication Layer
- **Amazon SES**: Email service for order confirmations
- **Features**: HTML email templates, delivery tracking
- **Templates**: Branded order confirmation emails

### Monitoring Layer
- **CloudWatch**: Logging and monitoring
- **Metrics**: API calls, Lambda executions, error rates
- **Logs**: Detailed execution logs for debugging

## Data Flow

### Order Creation Process
1. **Customer** fills out checkout form on website
2. **React App** validates form data and sends POST request
3. **API Gateway** receives request and invokes Lambda
4. **Lambda Function**:
   - Validates order data
   - Generates unique order number
   - Saves order to DynamoDB
   - Sends confirmation email via SES
   - Returns success response
5. **Frontend** displays order confirmation
6. **Customer** receives email confirmation

### Order Retrieval Process
1. **Admin/Customer** requests order information
2. **API Gateway** routes GET request to Lambda
3. **Lambda Function** queries DynamoDB
4. **DynamoDB** returns order data
5. **Lambda** formats and returns response
6. **Frontend** displays order information

## Security Features

### Authentication & Authorization
- API Gateway with CORS configuration
- Lambda execution role with minimal permissions
- DynamoDB access restricted to specific table

### Data Protection
- HTTPS encryption for all communications
- Environment variables for sensitive configuration
- Input validation and sanitization

### Email Security
- SES sender verification required
- HTML email templates with XSS protection
- Rate limiting through AWS service limits

## Scalability & Performance

### Auto-scaling
- **Lambda**: Automatic scaling based on demand
- **DynamoDB**: On-demand billing scales automatically
- **API Gateway**: Handles high request volumes
- **Amplify**: Global CDN for fast content delivery

### Cost Optimization
- **Serverless**: Pay only for actual usage
- **DynamoDB**: Pay-per-request pricing
- **Lambda**: Millisecond billing
- **SES**: Pay per email sent

## Monitoring & Maintenance

### Health Monitoring
- CloudWatch metrics for all services
- Lambda function logs for debugging
- API Gateway access logs
- DynamoDB performance metrics

### Error Handling
- Comprehensive error responses
- Retry logic for transient failures
- Dead letter queues for failed processes
- Alerting for critical errors

## Deployment Strategy

### Infrastructure as Code
- CloudFormation template for all AWS resources
- Version-controlled infrastructure
- Repeatable deployments
- Environment-specific configurations

### CI/CD Pipeline
- Local development with hot reload
- Build process for production optimization
- Automated deployment to Amplify
- Environment variable management

This architecture provides a robust, scalable, and cost-effective solution for the NatureMama Heritage e-commerce platform, handling everything from product browsing to order fulfillment with automated email confirmations.