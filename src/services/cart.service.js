import { apiClient } from "./api-client";

export const cartService = {
  getCart: (id) => apiClient(`/carts/${id}`),

  getUserCart: (userId) => apiClient(`/carts/user/${userId}`),

  addToCart: (cart) =>
    apiClient(`/carts/add`, {
      method: "POST",
      body: JSON.stringify(cart),
    }),

  updateCart: (id, data) =>
    apiClient(`/carts/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteCart: (id) =>
    apiClient(`/carts/${id}`, {
      method: "DELETE",
    }),
};
