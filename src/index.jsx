import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/global.css";
import AppErrorBoundary from "./app/ErrorBoundary";
import { ProductProvider } from "./store/product/product.store";
import { CartProvider } from "./store/cart/cart.store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppErrorBoundary>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </AppErrorBoundary>
  </React.StrictMode>,
);
