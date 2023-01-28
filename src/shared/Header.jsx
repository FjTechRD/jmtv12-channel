import React from "react";
import "./styles/header.css";
import { NavLink } from "react-router-dom";
import MobileMenu from "../components/shared/MobileMenu";

const Header = () => {
  return (
    <header className="header">
      <MobileMenu />
      <nav className="main-menu">
        <NavLink to="/home">INICIO</NavLink>
        <NavLink to="/live">EN VIVO</NavLink>
        <NavLink to="/services">SERVICIOS</NavLink>
        <NavLink to="/contact">CONTACTO</NavLink>
        <NavLink to="/about-us">SOBRE NOSOTROS</NavLink>
      </nav>
    </header>
  );
};

export default Header;
