# NatureMama Heritage - E-commerce Website

A modern, elegant e-commerce website for NatureMama Heritage, a French natural food supplements company born in the Alps. Built with React and designed to reflect the authentic brand story and values.

## 🌿 About NatureMama Heritage

**Tagline:** "The power of nature for your well-being"

NatureMama Heritage combines ancestral plant wisdom with modern scientific innovation. Founded in 2023 in the French Alps, we create premium natural food supplements with complete traceability, European organic certification, and a commitment to sustainability.

## 🏗️ Website Structure

The website is organized into 4 main sections as per the business plan:

### 1. **Our History** (`/our-history`)
- Company founding story in the French Alps (2023)
- Philosophy: fusion of ancestral wisdom and modern science
- Mission: democratize access to high-quality natural solutions
- Timeline of key milestones and achievements
- What makes us different: traceability, partnerships, patented process

### 2. **Our Products** (`/our-products`)
- **Vitality Line**: Natural energy boosters (€25-35)
- **Serenity Line**: Anti-stress solutions (€28-40)
- **Immunity Line**: Natural defense reinforcement (€30-45)
- **Children's Line**: Supplements for younger users (€20-30)
- Product filtering, detailed information, and shopping features

### 3. **Our Commitments** (`/our-commitments`)
- 100% natural and organic certification
- Sustainable packaging (100% recyclable)
- Environmental impact (1% revenue to biodiversity)
- Community support (50+ local producer partnerships)
- Future sustainability goals

### 4. **Shopping Cart** (`/cart`)
- Full e-commerce functionality
- Promo code system
- Order summary with shipping calculation
- Product recommendations
- Secure checkout process

## 🎨 Design & Brand Identity

### Color Palette
- **Sage Green**: Primary brand color representing nature
- **Earth Brown**: Secondary color for warmth and authenticity  
- **Natural White**: Clean, pure background
- **Amber Accents**: Highlighting and call-to-action elements

### Typography
- **Display Font**: Playfair Display (elegant, heritage feel)
- **Body Font**: Inter (modern, readable)

### Visual Elements
- French Alps imagery and mountain motifs
- Natural textures and organic shapes
- Clean, minimalist design with premium feel
- Authentic product photography
- Certification badges and trust indicators

## 🚀 Key Features

### Modern User Experience
- Responsive design for all devices
- Smooth animations with Framer Motion
- Interactive product filtering and search
- Shopping cart with real-time updates
- Promo code system

### Brand Storytelling
- Authentic French Alps heritage narrative
- Scientific credibility with certifications
- Sustainability commitment showcase
- Customer testimonials and reviews
- Educational content about natural wellness

### E-commerce Functionality
- Product catalog with detailed information
- Shopping cart and checkout process
- Inventory management ready
- Payment integration ready
- Order tracking system ready

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd naturemama-heritage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

### Development URLs
- Home: `http://localhost:5173/`
- Our History: `http://localhost:5173/our-history`
- Our Products: `http://localhost:5173/our-products`
- Our Commitments: `http://localhost:5173/our-commitments`
- Shopping Cart: `http://localhost:5173/cart`

## 🌍 Deployment to AWS Amplify

This project is optimized for AWS Amplify deployment:

### Quick Deploy
1. **Push to GitHub** - Commit your code to a GitHub repository
2. **Connect to Amplify** - Link your GitHub repo to AWS Amplify
3. **Auto-Deploy** - Amplify will automatically build and deploy

### Build Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

### Environment Variables (if needed)
Add any required environment variables in the Amplify console.

## 📊 Business Alignment

### Target Market
- **Demographics**: Urban, 25-55 years, upper-middle class
- **Psychographics**: Environmentally conscious, quality-focused
- **Values**: Natural wellness, sustainability, authenticity

### Pricing Strategy
- **Mid-to-premium positioning**: €25-45 per month supply
- **Value proposition**: Premium quality at accessible prices
- **Competitive advantage**: French heritage, organic certification

### Distribution Channels
- **Primary**: E-commerce website
- **Secondary**: Pharmacies, organic stores
- **Future**: B2B partnerships, subscription services

## 🔧 Customization Guide

### Content Updates
- **Product Information**: Update `/src/pages/OurProducts.jsx`
- **Company History**: Modify `/src/pages/OurHistory.jsx`
- **Commitments**: Edit `/src/pages/OurCommitments.jsx`
- **Contact Details**: Update footer and contact information

### Visual Customization
- **Colors**: Modify `tailwind.config.js` for brand colors
- **Images**: Replace placeholder images with actual product photos
- **Logo**: Update logo in header component
- **Fonts**: Change font imports in `index.css`

### Functionality Extensions
- **Payment Integration**: Add Stripe/PayPal to shopping cart
- **User Authentication**: Implement user accounts and profiles
- **Inventory Management**: Connect to inventory system
- **Analytics**: Add Google Analytics or similar tracking
- **Email Marketing**: Integrate with email service providers

## 📈 SEO & Performance

### SEO Optimizations
- Semantic HTML structure
- Meta tags and descriptions
- Alt text for all images
- Clean URL structure
- Fast loading times

### Performance Features
- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size
- Fast build times with Vite

## 🤝 Contributing

This website reflects the authentic NatureMama Heritage brand story and business model. When making updates:

1. Maintain brand consistency
2. Follow the established design system
3. Ensure mobile responsiveness
4. Test all functionality thoroughly
5. Keep content aligned with business values

## 📄 License

This project is created for NatureMama Heritage. All rights reserved.

---

**NatureMama Heritage** - *The power of nature for your well-being*  
Born in the French Alps 🏔️ | Made with 💚 for natural wellness