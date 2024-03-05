import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import OrderPage from "./pages/OrderPage";

const App = () => {
  const location = useLocation();
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      {
        location.pathname !== '/cart' &&
          ( <Footer/>)
        
      }
    </div>
  );
};

export default App;
