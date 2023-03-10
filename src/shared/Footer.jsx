import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p className="copy__channel">
          Todos los Derechos Reservados || Copyright JMTv S.R.L
        </p>
        <p className="copy__dev">Designed by FjTechRD</p>
      </div>
      <div className="footer__sponsor"></div>
    </footer>
  );
};

export default Footer;
