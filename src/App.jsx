import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import { HomePage, ProductPage, CartPage, NotFoundPage } from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route path=':id' element={<ProductPage />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
