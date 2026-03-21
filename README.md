# DummyStore (React.js) - E-commerce Shopping Experience (Rsbuild-Oriented)

A comprehensive e-commerce shopping application with multiple implementations using modern web technologies. This version of the project adopts a **feature-based and scalable architecture inspired by Rsbuild**, making it suitable for large-scale and enterprise applications.

---

## Features

- Product Grid (responsive)
- Product Details (modal or page)
- Advannce Search (real-time)
- Category Filtering
- Pagination (limit & skip)
- Shopping Cart (add, update, remove)
- Cart Persistence (localStorage)
- Quantity Management
- Loading States (skeleton UI)
- Error Handling
- Fully Responsive Design

---

## Architecture (Rsbuild-Inspired)

This project follows a **feature-based modular architecture** instead of a purely layered structure.

### Core Principle

- Group code by **business domain (features)**
- Keep logic **isolated and scalable**
- Separate **UI, state, and services**
- Prepare for **monorepo/ enterprise scaling**

---

## Project structure

```bash
dummy-store-reactjs/
├── public
├── srcs/
│   ├── app
│   ├── routes
│   ├── components
│   ├── features/
│   │   ├── products
│   │   ├── cart
│   │   └── categories
│   ├── services
│   ├── store
│   ├── hooks
│   ├── utils
│   ├── styles
│   └── index.tsx
├── resbuild.config.ts
└── package.json
```

## Feature-Base Modules

#### Products Module

- Product listing
- Product details
- Search functionality

#### Cart Module

- Cart state
- Add/ remove Items
- Persistence (localStorage)

#### Categories Module

- Category filtering
- API-driven category listing

---

## Data flow

```text
UI (routes/components)
        ↓
Features (business logic)
        ↓
Store (state management)
        ↓
Services (API layer)
        ↓
External API (DummyJSON)
```

---

## Stack

#### React.js Implementation

- React (javascript)
- Resbuild
- React Router
- Context API
- Reducers
- Fetch API
- localStorage

---

### API Integrations

#### Base API: https://dummyjson.com/

- /products
- /products/search?q={query}
- /products/categories
- /products/category/{category}
- /products/{id}
- /products?limit={limit}&skip={skip}

## Why this Architecture?

#### This Rsbuild-inspired structure provides:

- [x] Scalability (enterprise-ready)
- [x] Maintainability (clean separation)
- [x] Feature isolation
- [x] Easier onboarding for teams
- [x] Monorepo compatibility

### Getting started

#### Prerequisites

- Node.js (v16+)
- npm or yarn or pnpm

#### Installation

```text
# Clone repository
git clone <repo-url>

# Navigate to app
cd dummy-store-reactjs

# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Variables

Create `.env.local`

```text
API_BASE_URL=https://dummyjson.com
```

## 📱 Responsive Design

- Mobile-first approach

### Breakpoints

| Device  | Width   |
| ------- | ------- |
| Mobile  | 320px+  |
| Tablet  | 768px+  |
| Desktop | 1024px+ |
| Large   | 1440px+ |

---

## 📊 State Management

- React Context
- Feature-based state separation
- Persistent cart state

---

## 🔍 Search & Filtering

- Real-time search
- Debounced API calls
- Category filtering
- Sorting options

---

## 🛒 Cart System

- Add / remove items
- Quantity updates
- Price calculations
- localStorage persistence

---

## 🛡️ Error Handling

- API error handling
- Retry mechanisms
- User-friendly feedback
- Fallback UI

---

## 🧪 Testing Strategy

- Unit tests (components, utils)
- Integration tests (flows)
- E2E tests (shopping experience)

---

## 📈 Performance Optimization

- Code splitting
- Lazy loading
- API caching
- Memoization

---

## 🔒 Security Considerations

- HTTPS API calls
- Input validation
- XSS prevention
- Safe localStorage usage

---

## 🚀 Deployment

### React App

- Vercel

---

## 📚 Learning Highlights

This project demonstrates:

- Feature-based architecture
- Scalable frontend design
- E-commerce patterns
- API integration best practices
- State management strategies
