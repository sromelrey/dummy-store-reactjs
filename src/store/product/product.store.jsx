import { createContext, useState } from "react";
import { productService } from "../../services/product.service";

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await productService.getAllProducts("?limit=10");
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      // * Provide product data, loading state, and error state to the component tree
      value={{ products, loading, error, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
