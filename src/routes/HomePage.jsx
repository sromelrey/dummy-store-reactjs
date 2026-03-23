import React, { useEffect } from "react";
import { useProduct } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

function HomePage() {
  const { products, fetchProducts, loading, error } = useProduct();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
