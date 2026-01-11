# Shop App - E-commerce React Application

A modern, responsive e-commerce application built with React, featuring product listings, product details, brand pages, and a beautiful user interface.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd shop-app
```

2. Install dependencies:
```bash
npm install
```

### Running the Project

#### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Error overlay in the browser

#### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.

#### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

#### Linting

To check code quality and find potential issues:

```bash
npm run lint
```

## 🛠️ Technologies Used

### Core Framework & Libraries

- **React 19.2.0** - Modern UI library for building user interfaces
- **React Router DOM 7.12.0** - Client-side routing for single-page applications
- **Vite 7.2.4** - Fast build tool and development server

### UI & Styling

- **Swiper 12.0.3** - Modern touch slider for carousels and sliders
- **React Icons 5.5.0** - Popular icons library (Feather Icons)
- **CSS3** - Custom styling with CSS variables and modern features

### SEO & Meta Tags

- **React Helmet Async 2.0.5** - Manage document head tags for SEO

### Development Tools

- **ESLint 9.39.1** - Code linting and quality checks
- **@vitejs/plugin-react 5.1.1** - Vite plugin for React support
- **TypeScript Types** - Type definitions for React and React DOM

## 📁 Project Structure

```
shop-app/
├── public/
│   ├── css/          # Global CSS files (common.css, style.css, swiper)
│   ├── fonts/        # Custom font files
│   ├── img/          # Images and assets
│   └── js/           # JavaScript utilities
├── src/
│   ├── components/   # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── ProductCard.jsx
│   │   └── TestimonialCard.jsx
│   ├── pages/        # Page components
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   └── BrandsListing.jsx
│   ├── data/         # JSON data files
│   │   ├── products.json
│   │   ├── brands.json
│   │   ├── navigation.json
│   │   ├── testimonials.json
│   │   └── ...
│   ├── App.jsx       # Main app component with routing
│   ├── App.css       # Application styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Product Catalog** - Browse products with filtering and sorting options
- **Product Details** - Detailed product pages with image galleries
- **Brand Pages** - Dedicated pages for different brands
- **Hero Slider** - Animated hero section with multiple slides
- **Testimonials** - Customer reviews and testimonials carousel
- **Mobile Navigation** - Burger menu for mobile devices
- **SEO Optimized** - Meta tags and structured data for search engines

## 🎨 Key Components

### Header
- Responsive navigation menu
- Mobile burger menu
- Logo switching based on scroll state
- Contact button and favorites/cart icons

### Hero Slider
- Vertical sliding carousel
- Fade transitions
- Auto-play functionality
- Navigation controls

### Product Card
- Product image
- Name and price
- Hover effects
- Link to product details

### Product Detail
- Image gallery with color variants
- Product information
- Add to cart functionality
- Related products

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👤 Author

Celtis Australis

---

For questions or support, please contact the development team.
