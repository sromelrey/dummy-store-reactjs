# ✅ DummyStore Development TODO (Rsbuild Feature-Based)

> Status: 🟡 In Progress  
> Goal: Build a scalable, feature-based e-commerce app

---

## 🧩 1. Core Foundation

- [x] Setup routing (`routes/`)
- [x] Create base layout (Header, Footer)
- [x] Setup global styles
- [x] Configure environment variables (`API_BASE_URL`)
- [x] Setup error boundary

---

## 🔌 2. API Layer (Services)

- [x] Create `services/api-client.ts`
- [x] Create `product.service.ts`
- [X] Create `cart.service.ts`
// Optional or we can do this later
- [ ] Create `auth.service.ts`

---

## 🧠 3. State Management (Store)

- [ ] Setup global store (Zustand / Context)
- [ ] Create product store
- [ ] Create cart store
- [ ] Handle loading states
- [ ] Handle error states

---

## 📦 4. Features Implementation

### 🛍️ Products Feature

- [ ] Create product list page
- [ ] Create product card component
- [ ] Implement product details (modal/page)
- [ ] Add pagination support

---

### 🔍 Search & Filtering

- [ ] Implement search input (debounced)
- [ ] Add category filter
- [ ] Add sorting options

---

### 🛒 Cart Feature

- [ ] Add to cart functionality
- [ ] Remove item from cart
- [ ] Update item quantity
- [ ] Create cart drawer / page
- [ ] Persist cart (localStorage)

---

### 🔐 Auth Feature (Optional)

- [ ] Implement login API
- [ ] Store auth token
- [ ] Protect routes (optional)

---

## 🎨 5. UI Components

- [ ] Button component
- [ ] Input component
- [ ] Modal component
- [ ] Card component
- [ ] Loader / Skeleton component

---

## 🔄 6. Integration

- [ ] Connect services → store
- [ ] Connect store → UI
- [ ] Handle loading states
- [ ] Handle API errors

---

## ⚡ 7. UX Improvements

- [ ] Add loading skeletons
- [ ] Handle empty states
- [ ] Show error messages
- [ ] Add toast notifications

---

## 📱 8. Responsive Design

- [ ] Mobile layout optimization
- [ ] Responsive grid system
- [ ] Adjust cart UI for mobile

---

## 🧪 9. Testing

- [ ] Unit tests (components, utils)
- [ ] Test cart logic
- [ ] Test API services

---

## 🚀 10. Finalization

- [ ] Clean code (remove logs, unused files)
- [ ] Optimize performance
- [ ] Finalize README
- [ ] Deploy (Vercel / Netlify)

---

## 🧠 Suggested Execution Order

- [ ] Products (fetch + display)
- [ ] Cart functionality
- [ ] Search & filtering
- [ ] UI polish
- [ ] Optimization & deployment

---

## 📌 Notes

- Follow **feature-based architecture**
- Keep logic isolated per module
- Avoid mixing UI and business logic
- Reuse components when possible

---
