import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../page/Home";
import Error from "../page/Error/Error";
import Users from "../page/Users/Users";
import Products from "../page/Products";
import Loginelogaut from "../page/Login";
import User from "../page/User";
import Product from "../page/Product";


const AppRoutes = () => {
  return (
    <Router>

    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Loginelogaut />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />

      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product />} />

    </Routes>

  </Router>
  );
};
export default AppRoutes;
