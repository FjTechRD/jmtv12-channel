import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import "./styles/protectedRoutes.css";

const ProtectedRoutes = () => {
  // const user = useSelector((state) => state.user);
  const [isLoggin, setIsLoggin] = useState();
  const navigate = useNavigate();

  if (true) {
    return (
      <div className="protected__routes">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return navigate("/");
  }
};

export default ProtectedRoutes;
