import React, { useEffect } from "react";
import { productService } from "../services/product.service";

function HomePage() {
  useEffect(() => {
    productService
      .getAllProducts("?limit=5")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>HomePage</div>;
}

export default HomePage;
