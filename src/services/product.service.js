import { apiClient } from "./api-client";

export const productService = {
  getAllProducts: (params = "") => apiClient(`/products${params}`),

  getProductById: (id) => apiClient(`/products/${id}`),

  searchProducts: (query) => apiClient(`/products/search?q=${query}`),

  getCategories: () => apiClient(`/products/categories`),

  getProductsByCategory: (category) =>
    apiClient(`/products/category/${category}`),
};
