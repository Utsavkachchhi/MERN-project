import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import ProductComponent from "./Containers/ProductComponent";
import ProductDetails from "./Containers/ProductDetails";
import ProductListing from "./Containers/ProductListing";
import Breadcrumb from "./Component/Breadcrumb";
import Cart from "./Containers/Cart";
import Signup from "./Component/Signup";
import Order from "./Component/Orders";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
