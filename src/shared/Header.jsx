import React from "react";
import "./styles/header.css";
import { Link } from "react-router-dom";
import MobileMenu from "../components/shared/MobileMenu";

const Header = () => {
  return (
    <header className="header">
      <MobileMenu />
      <nav className="main-menu">
        <Link to="/home">INICIO</Link>
        <Link to="/live">EN VIVO</Link>
        <Link to="/services">SERVICIOS</Link>
        <Link to="/contact">CONTACTO</Link>
        <Link to="/about-us">SOBRE NOSOTROS</Link>
      </nav>
    </header>
  );
};

export default Header;
