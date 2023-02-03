import React from "react";
import "./styles/contact.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Contact = () => {
  return (
    <main className="contact__page">
      <div className="main_bg-contact">
        <div className="contact__content-scroll">
          <div className="contact__content">
            <article className="contact__information">
              <h3>Contacto</h3>
              <div className="google-maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15020.549377761055!2d-70.5561746!3d19.7493185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcce065c2e1190977!2sJMTV%20CANAL%2012!5e0!3m2!1ses!2sdo!4v1673878406272!5m2!1ses!2sdo"
                  width="300"
                  height="250"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="contact-description">
                <h4>Calle principal de la unión, Sosúa, Puerto Plata 57000</h4>
                <h4>+1 (809) 586-0122 || +1 (809) 613-0612</h4>
                <h4>info@jmtv12.com</h4>
              </div>
            </article>
            <article className="contact__form">
              <h3>Ponte en Contacto con nosotros...</h3>
              <form className="contact__form-formulary" action="">
                <div className="form__inputs">
                  <label htmlFor="">Nombre</label>
                  <input type="text" />
                </div>
                <div className="form__inputs">
                  <label htmlFor="">Correo Electronico</label>
                  <input type="text" />
                </div>
                <div className="form__inputs">
                  <label htmlFor="">Asunto</label>
                  <input type="text" />
                </div>
                <div className="form__inputs">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </article>
            <article className="social-networks">
              <IconContext.Provider
                value={{
                  className: "react-icons-contact",
                }}
              >
                <div className="social__icons">
                  <a href="" className="social__icons">
                    <FaFacebookSquare />
                    <p className="social__text">Facebook</p>
                  </a>
                </div>
                <div className="social__icons">
                  <a href="" className="social__icons">
                    <FaInstagramSquare />
                    <p>Instagram</p>
                  </a>
                </div>
                <div className="social__icons">
                  <a href="" className="social__icons">
                    <FaYoutube />
                    <p>Youtube</p>
                  </a>
                </div>
                <div className="social__icons">
                  <a href="" className="social__icons">
                    <FaTiktok />
                    <p>Tik Tok</p>
                  </a>
                </div>
                <div className="social__icons">
                  <a href="" className="social__icons">
                    <FaTwitterSquare />
                    <p>Twiiter</p>
                  </a>
                </div>
                <div>
                  <a href="" className="social__icons">
                    <FaLinkedin />
                    <p>LinkedIn</p>
                  </a>
                </div>
              </IconContext.Provider>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
