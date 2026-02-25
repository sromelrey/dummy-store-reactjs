# DummyStore - E-commerce Shopping Experience

A comprehensive e-commerce shopping application with three different implementations using modern web technologies. DummyStore provides a complete shopping experience with product browsing, cart management, and responsive design patterns.

## 🛒 Features

- **Product Grid**: Responsive grid display of all products
- **Product Details**: Detailed product information in modal or dedicated page
- **Advanced Search**: Real-time product search functionality
- **Category Filtering**: Filter products by categories using API endpoints
- **Pagination**: Server-side pagination with limit and skip parameters
- **Shopping Cart**: Full cart functionality with add, update, and remove operations
- **Cart Persistence**: Cart data stored in localStorage
- **Quantity Management**: Update item quantities in cart
- **Loading States**: Smooth loading indicators and skeleton screens
- **Error Handling**: Graceful error handling with user feedback
- **Responsive Design**: Optimized for all device sizes

## 🏗️ Architecture

The application maintains a clean separation of concerns:

- **Data Layer**: API service for product and cart data fetching
- **State Management**: Centralized state for products, cart, filters, and UI state
- **UI Components**: Reusable components with clear responsibilities
- **Cart System**: Local storage integration for cart persistence
- **Routing**: Client-side and server-side routing implementations

## 📁 Project Structure

```
dummy-store/
├── reactjs/           # React.js implementation
├── nextjs/            # Next.js App Router implementation
├── tanstack-start/    # TanStack Start implementation
└── README.md          # This file
```

## 🛠️ Technology Stacks

### React.js Implementation

- **Framework**: React.js with JavaScript
- **Styling**: CSS Modules / CSS
- **State Management**: React Context + useReducer
- **Routing**: React Router (SPA)
- **Rendering**: Client-Side Rendering (CSR)
- **HTTP Client**: Fetch API
- **Storage**: localStorage for cart persistence
- **Additional**: TanStack features where applicable

### Next.js Implementation

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: SCSS
- **Components**: shadcn/ui component library
- **State Management**: RTK (Redux Toolkit)
- **Data Fetching**: Server Actions
- **Storage**: localStorage for cart persistence
- **Additional**: Next.js specific features

### TanStack Start Implementation

- **Framework**: TanStack Start
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui component library
- **State Management**: Zustand
- **Storage**: localStorage for cart persistence
- **Additional**: TanStack ecosystem features

## 📡 API Integration

The application uses [DummyJSON API](https://dummyjson.com/) for comprehensive e-commerce data:

### Products API

- **All Products**: `https://dummyjson.com/products`
- **Product Search**: `https://dummyjson.com/products/search?q={query}`
- **Product Categories**: `https://dummyjson.com/products/categories`
- **Category Filter**: `https://dummyjson.com/products/category/{category}`
- **Product Details**: `https://dummyjson.com/products/{id}`
- **Pagination**: `https://dummyjson/products?limit={limit}&skip={skip}`

### Product Data Structure

- **Basic Info**: Title, description, price, discount percentage
- **Media**: Thumbnail and product images
- **Metadata**: Rating, stock, brand, category, SKU
- **Dimensions**: Weight, dimensions information
- **Reviews**: Product reviews and ratings

## 🎯 Key Components

### Product Components

- **Product Grid**: Responsive grid layout with product cards
- **Product Card**: Compact product information display
- **Product Detail**: Comprehensive product information view
- **Product Modal**: Modal-based product details
- **Product Image**: Optimized image display with zoom

### Cart Components

- **Cart Drawer**: Slide-out cart interface
- **Cart Page**: Dedicated cart management page
- **Cart Item**: Individual cart item with quantity controls
- **Cart Summary**: Subtotal, tax, and total calculations
- **Checkout Button**: Proceed to checkout action

### Search & Filter Components

- **Search Bar**: Real-time product search with debouncing
- **Category Filter**: Dropdown or checkbox category selection
- **Sort Options**: Sort by price, rating, name, etc.
- **Active Filters**: Display and manage active filters

### Layout Components

- **Header**: Application header with search and cart
- **Navigation**: Category navigation menu
- **Footer**: Application footer with links
- **Container**: Responsive layout containers

## 🛒 Cart Functionality

### Cart Operations

- **Add to Cart**: Add products with quantity selection
- **Update Quantity**: Increase or decrease item quantities
- **Remove Item**: Remove individual items from cart
- **Clear Cart**: Remove all items from cart
- **Cart Persistence**: Automatic localStorage synchronization

### Cart Features

- **Quantity Validation**: Prevent negative quantities
- **Stock Checking**: Validate against available stock
- **Price Calculation**: Real-time price updates
- **Discount Application**: Apply product discounts
- **Cart Count**: Display cart item count in header

### Cart Storage

- **localStorage**: Persistent cart across sessions
- **JSON Serialization**: Efficient data storage
- **Error Recovery**: Handle storage failures
- **Sync State**: Keep UI in sync with storage

## 🔄 Data Flow

1. **Initial Load** → Fetch products and categories from API
2. **User Search** → Filter products by search query
3. **Category Filter** → Filter products by selected categories
4. **Pagination** → Load products with limit and skip
5. **Product Selection** → Show product details in modal/page
6. **Add to Cart** → Update cart state and localStorage
7. **Cart Management** → Update quantities or remove items
8. **Error Handling** → Display user-friendly error messages

## 🎨 Design System

### Color Palette

- **Primary Colors**: Consistent brand colors throughout
- **Secondary Colors**: Complementary accent colors
- **Neutral Colors**: Gray scale for text and backgrounds
- **Status Colors**: Success, warning, error indicators

### Typography

- **Headings**: Clear hierarchy and readability
- **Product Titles**: Optimized for product names
- **Pricing**: Prominent price display
- **Body Text**: Readable descriptions and content

### Layout

- **Grid System**: Responsive product grid layouts
- **Card Design**: Consistent product card styling
- **Spacing**: Consistent spacing system
- **Breakpoints**: Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Navigate to the desired implementation folder:
   ```bash
   cd dummy-store/reactjs     # or nextjs or tanstack-start
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

Each implementation includes standard npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests (if applicable)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root of each implementation:

```env
# API Base URL
NEXT_PUBLIC_API_URL=https://dummyjson.com

# Additional environment variables as needed
```

## 📱 Responsive Design

The application features:

- **Mobile-First**: Optimized for mobile devices (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Screens**: Optimized for large displays (1440px+)

### Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large**: 1440px+

### Responsive Features

- **Product Grid**: Adaptive grid columns (1-4 columns)
- **Cart Drawer**: Full-screen on mobile, drawer on desktop
- **Search**: Optimized search interface for all devices
- **Navigation**: Collapsible navigation on mobile

## 📊 State Management

### React.js

- React Context for global application state
- useReducer for complex state logic
- Local state for component-specific data
- Custom hooks for cart and product logic

### Next.js

- RTK for global state management
- Server Actions for server-side state
- React hooks for component state
- Persistent state for cart data

### TanStack Start

- Zustand for lightweight state management
- TanStack Query for server state
- React state for UI state
- Persistent state for cart preferences

## 🔍 Search & Filtering

### Search Functionality

- **Real-time Search**: Instant results as user types
- **Debouncing**: Optimized API calls
- **Case Insensitive**: Search regardless of case
- **Partial Matching**: Find products with partial names
- **Search History**: Recent search suggestions

### Category Filtering

- **Dynamic Categories**: Fetch categories from API
- **Multi-select**: Filter by multiple categories
- **Category Count**: Show product count per category
- **Clear Filters**: Reset all filters with one click
- **Active State**: Visual indication of selected categories

### Sorting Options

- **Price**: Low to high, high to low
- **Rating**: Highest rated first
- **Name**: Alphabetical order
- **Discount**: Highest discount first
- **Newest**: Recently added products

## 📄 Product Information

### Basic Information

- **Title**: Product name and description
- **Price**: Current price with discount display
- **Rating**: Star rating with review count
- **Brand**: Product brand information
- **Category**: Product category classification

### Media Content

- **Thumbnail**: Small product preview images
- **Gallery**: Multiple product images
- **Image Zoom**: Enlarged image viewing
- **Image Alt**: Accessible image descriptions

### Additional Details

- **Description**: Detailed product description
- **Stock**: Availability status
- **SKU**: Product identifier
- **Weight**: Product weight information
- **Dimensions**: Product dimensions
- **Discount**: Discount percentage and calculation

## 🛒 Cart Management

### Cart Operations

- **Add Items**: Add products with custom quantities
- **Quantity Updates**: Real-time quantity adjustments
- **Remove Items**: Single item or bulk removal
- **Clear Cart**: Remove all cart items
- **Cart Persistence**: Automatic save to localStorage

### Cart Calculations

- **Subtotal**: Sum of all item prices
- **Discounts**: Applied product discounts
- **Tax**: Tax calculation (if applicable)
- **Shipping**: Shipping cost calculation
- **Total**: Final cart total

### Cart Features

- **Item Count**: Display total number of items
- **Stock Validation**: Prevent over-ordering
- **Price Updates**: Real-time price changes
- **Empty State**: Empty cart message and suggestions

## 🛡️ Error Handling

### Network Errors

- **API Failures**: Graceful handling of API errors
- **Timeout Errors**: Handle slow or failed requests
- **Retry Logic**: Automatic retry for failed requests
- **Offline Support**: Cached data for offline browsing

### User Errors

- **Invalid Search**: Handle invalid search queries
- **No Results**: Friendly message for empty results
- **Validation**: Input validation and feedback
- **Cart Errors**: Handle cart operation failures

### Error Recovery

- **Retry Buttons**: Allow users to retry failed operations
- **Alternative Content**: Fallback content when available
- **Error Logging**: Track errors for debugging
- **User Feedback**: Clear error messages and next steps

## 🧪 Testing Strategy

### Unit Tests

- **Component Testing**: Individual component functionality
- **Utility Testing**: Helper function validation
- **State Testing**: State management logic
- **API Testing**: API service functions
- **Cart Testing**: Cart operation logic

### Integration Tests

- **User Flows**: Complete user journey testing
- **API Integration**: End-to-end API communication
- **Cart Integration**: Cart functionality testing
- **Storage Integration**: localStorage operations

### E2E Tests

- **Shopping Flow**: Complete shopping workflow
- **Search Functionality**: Search and filter workflow
- **Cart Management**: Add to cart and checkout flow
- **Responsive Testing**: Cross-device functionality

## 📈 Performance Optimization

### Code Splitting

- **Lazy Loading**: Components loaded on demand
- **Route Splitting**: Separate bundles per route
- **Dynamic Imports**: Optimized bundle sizes
- **Image Optimization**: Lazy load product images

### Data Optimization

- **API Caching**: Cache API responses
- **Image Caching**: Browser image caching
- **Pagination**: Efficient data loading
- **Debouncing**: Optimized search performance

### Rendering Optimization

- **Virtual Scrolling**: For large product lists
- **Memoization**: Prevent unnecessary re-renders
- **Optimistic Updates**: Improve perceived performance
- **Skeleton Loading**: Smooth loading experience

## 🔒 Security Considerations

### API Security

- **HTTPS Only**: Secure API communication
- **Input Validation**: Sanitize user inputs
- **Rate Limiting**: Respect API rate limits
- **Error Handling**: Secure error message display

### Data Security

- **Local Storage**: Secure cart data storage
- **No Sensitive Data**: No personal information stored
- **Content Security**: Secure content delivery
- **Cross-Site Scripting**: XSS prevention

## 🚀 Deployment

### React.js

- **Static Hosting**: Deploy to Vercel, Netlify, or GitHub Pages
- **SPA Configuration**: Proper routing configuration
- **Asset Optimization**: Optimized asset delivery
- **CDN Integration**: Content delivery network setup

### Next.js

- **Vercel Deployment**: Optimal Next.js hosting
- **Server-Side Rendering**: SSR configuration
- **Environment Variables**: Production environment setup
- **Performance Monitoring**: Built-in analytics

### TanStack Start

- **Node.js Hosting**: Deploy to Node.js servers
- **SSR Configuration**: Server-side rendering setup
- **Caching Strategy**: Server-side caching
- **Load Balancing**: Handle high traffic

## 📚 Learning Resources

This project demonstrates:
- **E-commerce Patterns**: Common e-commerce functionality
- **State Management**: Complex state management scenarios
- **API Integration**: REST API best practices
- **Cart Systems**: Shopping cart implementation patterns
- **Performance**: Optimization techniques for large datasets
- **Architecture**: Scalable application architecture

---

**DummyStore** - A modern e-commerce application showcasing best practices in web development, shopping cart implementation, and user experience design across multiple frameworks.

