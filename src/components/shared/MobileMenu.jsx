import React, { useState } from "react";
import "../../shared/styles/header.css";
import { Link } from "react-router-dom";
import {
  FaList,
  FaHome,
  FaStream,
  FaWhmcs,
  FaReadme,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <div className="header__mobile-device">
        <button
          className={`btn__mobile-menu ${open && "open"}`}
          onClick={() => setOpen(!open)}
        >
          <FaList />
        </button>
        <nav className={`main-menu__movile ${open && "open"}`}>
          <div className="separator"></div>
          <Link to="/home" onClick={handleClickClose}>
            <FaHome />
            Inicio
          </Link>
          <Link to="/live" onClick={handleClickClose}>
            <FaStream />
            En Vivo
          </Link>
          <Link to="/services" onClick={handleClickClose}>
            <FaWhmcs />
            Servicios
          </Link>
          <Link to="/contact" onClick={handleClickClose}>
            <FaReadme />
            Contacto
          </Link>
          <Link to="/about-us" onClick={handleClickClose}>
            <FaEnvelopeOpenText />
            Sobre Nosotros
          </Link>
          <button
            className={`btn__mobile-menu btn-close ${open && "open"}`}
            onClick={() => setOpen(!open)}
          >
            X
          </button>
        </nav>
      </div>
    </section>
  );
};

export default MobileMenu;
