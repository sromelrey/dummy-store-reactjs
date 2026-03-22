import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import { HomePage, ProductPage, CartPage } from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='products/:id' element={<ProductPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
