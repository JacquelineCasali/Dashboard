import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../page/Home";
import Error from "../page/Error/Error";
import Users from "../page/Users/Users";
import Products from "../page/Products";
import Loginelogaut from "../page/Login";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../components/Menu/Menu";

const AppRoutes = () => {
  return (
    <Router>

    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route exact path="/login" element={<Loginelogaut />} />
      <Route path="/users" element={<Users />} />
      <Route path="/produtos" element={<Products />} />
    
    </Routes>

  </Router>
  );
};
export default AppRoutes;
