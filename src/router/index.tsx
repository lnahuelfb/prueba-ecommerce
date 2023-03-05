import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from '../pages/products/Products'
import Home from '../pages/home/home'
import ProductPage from "../pages/productPage/[product]";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router