import React, { useState } from "react";
import "../../shared/styles/header.css";
import { NavLink } from "react-router-dom";
import {
  FaList,
  FaHome,
  FaStream,
  FaWhmcs,
  FaReadme,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

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
          <div className="logo__mobile-menu">
            <img
              className="logo__channel-menu"
              src="/img/LgJMTv12.png"
              alt="Logo Canal 12"
            />
          </div>
          <IconContext.Provider
            value={{
              className: "react-icons",
            }}
          >
            <NavLink to="/home" onClick={handleClickClose}>
              <FaHome />
              Inicio
            </NavLink>
            <NavLink to="/live" onClick={handleClickClose}>
              <FaStream />
              En Vivo
            </NavLink>
            <NavLink to="/services" onClick={handleClickClose}>
              <FaWhmcs />
              Servicios
            </NavLink>
            <NavLink to="/contact" onClick={handleClickClose}>
              <FaReadme />
              Contacto
            </NavLink>
            <NavLink to="/about-us" onClick={handleClickClose}>
              <FaEnvelopeOpenText />
              Sobre Nosotros
            </NavLink>
          </IconContext.Provider>
          <button
            className={`btn-close ${open && "open"}`}
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
