import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsContainer from "./Components/Pages/Products/Products.container";
import Login from "./Components/Common/Login/Login";
import Registro from "./Components/Common/Registro/Registro";
import Home from "./Components/Pages/Home/Home";
import NotFound from "./Components/Pages/NotFound/NotFound";
import CartContainer from "./Components/Pages/Cart/CartContainer";
import CreateProduct from "./Components/Pages/CreateProduct/CreateProduct.container";
import NavbarLayout from "./Components/Layout/NavbarLayout/NavbarLayout";
import FooterLayout from "./Components/Layout/FooterLayout/FooterLayout";
import CreateProductContainer from "./Components/Pages/CreateProduct/CreateProduct.container";
import ProductDetailContainer from "./Components/Pages/ProductDetail/ProductDetail.container";
import CartContextReducerProvider from "./Context/CartContextReducer";
import NavbarMaterial from "./Components/Layout/NavbarMaterial/NavbarMaterial";

function App() {
  return (
    <BrowserRouter>
      <CartContextReducerProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          <Route element={<NavbarMaterial />}>
            <Route element={<FooterLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductsContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route
                path="/productDetail/:id"
                element={<ProductDetailContainer />}
              ></Route>
           </Route>
          </Route>
          <Route path="/create-product" element={<CreateProductContainer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextReducerProvider>
    </BrowserRouter>
  );
}

export default App;
