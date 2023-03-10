import React from "react";
import "./styles/staff.css";
import {
  FaPhoneSquareAlt,
  FaMailBulk,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTiktok,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Staff = () => {
  return (
    <main className="staff__page">
      <div className="main-bg__staff">
        <div className="cards-scroll__container">
          <section className="staff__cards">
            {/* ORLANDO MULLER */}
            <article className="staff__card">
              <div className="card__header">
                <div className="card-header__data">
                  <h3 className="card-header__name">Orlando Muller</h3>
                  <h4 className="card-header__name">Presidente / Director</h4>
                </div>
                <img
                  src="/img/employees/orlandomuller.webp"
                  alt="Presidente Orlando Muller"
                />
              </div>
              <IconContext.Provider value={{ color: "#21e5e4" }}>
                <div className="card__body">
                  <h2>Contact Info</h2>
                  <div className="card__body-info">
                    <FaPhoneSquareAlt />
                    <p>(809) 613-0612</p>
                  </div>
                  <div className="card__body-info">
                    <FaMailBulk />
                    <p>osbmuller@gmail.com</p>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="card__footer">
                <IconContext.Provider
                  value={{
                    className: "react-icons-staff",
                  }}
                >
                  <div className="social__icons">
                    <a
                      href="https://www.facebook.com/orlandomuller"
                      target="_blank"
                    >
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.instagram.com/orlandomuller7/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.youtube.com/@jmtvcanal1237"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.tiktok.com/@jmtvcanal12"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://twitter.com/orlandomuller7"
                      target="_blank"
                    >
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.linkedin.com/in/orlando-muller-b83a3939/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </article>
            {/* EDGAR THOMAS 
            <article className="staff__card">
              <div className="card__header">
                <div className="card-header__data">
                  <h3 className="card-header__name">Edgar Thomas Pelegrin</h3>
                  <h4 className="card-header__name">Director</h4>
                </div>
                <img
                  src="/img/employees/edgarthomas.webp"
                  alt="Director Edgar Thomas"
                />
              </div>
              <IconContext.Provider value={{ color: "#21e5e4" }}>
                <div className="card__body">
                  <h2>Contact Info</h2>
                  <div className="card__body-info">
                    <FaPhoneSquareAlt />
                    <p>(829) 801-6590</p>
                  </div>
                  <div className="card__body-info">
                    <FaMailBulk />
                    <p>LaVozDelPuebloSosua@gmail.com</p>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="card__footer">
                <IconContext.Provider
                  value={{
                    className: "react-icons-staff",
                  }}
                >
                  <div className="social__icons">
                    <a
                      href="https://www.facebook.com/orlandomuller"
                      target="_blank"
                    >
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.instagram.com/orlandomuller7/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.youtube.com/@jmtvcanal1237"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.tiktok.com/@jmtvcanal12"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://twitter.com/orlandomuller7"
                      target="_blank"
                    >
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.linkedin.com/in/orlando-muller-b83a3939/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </article>*/}
            {/* JAVIER GONZALEZ */}
            <article className="staff__card">
              <div className="card__header">
                <div className="card-header__data">
                  <h3 className="card-header__name">Fco. Javier Gonz??lez</h3>
                  <h4 className="card-header__name">Director T??cnico</h4>
                </div>
                <img
                  src="/img/employees/javigonzalez.webp"
                  alt="Director Edgar Thomas"
                />
              </div>
              <IconContext.Provider value={{ color: "#21e5e4" }}>
                <div className="card__body">
                  <h2>Contact Info</h2>
                  <div className="card__body-info">
                    <FaPhoneSquareAlt />
                    <p>(829) 839-7479</p>
                  </div>
                  <div className="card__body-info">
                    <FaMailBulk />
                    <p>FjTechnologyrd@gmail.com</p>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="card__footer">
                <IconContext.Provider
                  value={{
                    className: "react-icons-staff",
                  }}
                >
                  <div className="social__icons">
                    <a
                      href="https://www.facebook.com/profile.php?id=100087280723773"
                      target="_blank"
                    >
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.instagram.com/fjtechnologyrdrd/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.youtube.com/@jmtvcanal1237"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.tiktok.com/@jmtvcanal12"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://twitter.com/orlandomuller7"
                      target="_blank"
                    >
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.linkedin.com/in/orlando-muller-b83a3939/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </article>
            {/* SOBEUDA MOREL 
            <article className="staff__card">
              <div className="card__header">
                <div className="card-header__data">
                  <h3 className="card-header__name">Sobeyda Morel More</h3>
                  <h4 className="card-header__name">Secretaria de Direcci??n</h4>
                </div>
                <img
                  src="/img/employees/sobeidamorel.webp"
                  alt="Director Edgar Thomas"
                />
              </div>
              <IconContext.Provider value={{ color: "#21e5e4" }}>
                <div className="card__body">
                  <h2>Contact Info</h2>
                  <div className="card__body-info">
                    <FaPhoneSquareAlt />
                    <p>(809) 586-0122</p>
                  </div>
                  <div className="card__body-info">
                    <FaMailBulk />
                    <p>info@jmtv12.com</p>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="card__footer">
                <IconContext.Provider
                  value={{
                    className: "react-icons-staff",
                  }}
                >
                  <div className="social__icons">
                    <a href="https://www.facebook.com/jmtv12" target="_blank">
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.instagram.com/jmtvcanal.12/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.youtube.com/channel/UCR5qt_ljvfQwlgqnnaNWfTA"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.tiktok.com/@jmtvcanal12"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a href="https://twitter.com/JMTv82440280" target="_blank">
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.linkedin.com/in/orlando-muller-b83a3939/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </article>*/}
            {/* JOS?? RAMON */}
            <article className="staff__card">
              <div className="card__header">
                <div className="card-header__data">
                  <h3 className="card-header__name">Jos?? Ramon Ferreras</h3>
                  <h4 className="card-header__name">Control Master</h4>
                </div>
                <img
                  src="/img/employees/joserammon.webp"
                  alt="Director Edgar Thomas"
                />
              </div>
              <IconContext.Provider value={{ color: "#21e5e4" }}>
                <div className="card__body">
                  <h2>Contact Info</h2>
                  <div className="card__body-info">
                    <FaPhoneSquareAlt />
                    <p>(809) 586-0122</p>
                  </div>
                  <div className="card__body-info">
                    <FaMailBulk />
                    <p>info@jmtv12.com</p>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="card__footer">
                <IconContext.Provider
                  value={{
                    className: "react-icons-staff",
                  }}
                >
                  <div className="social__icons">
                    <a href="https://www.facebook.com/jmtv12" target="_blank">
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.instagram.com/jmtvcanal.12/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.youtube.com/channel/UCR5qt_ljvfQwlgqnnaNWfTA"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.tiktok.com/@jmtvcanal12"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a href="https://twitter.com/JMTv82440280" target="_blank">
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.linkedin.com/in/orlando-muller-b83a3939/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </article>
            {/* JAIRO MESSON */}
            <article className="staff__card">
              <div className="card__header">
                <div className="card-header__data">
                  <h3 className="card-header__name">Jairo Messon</h3>
                  <h4 className="card-header__name">Control Master</h4>
                </div>
                <img
                  src="/img/employees/jairomesson.webp"
                  alt="Director Edgar Thomas"
                />
              </div>
              <IconContext.Provider value={{ color: "#21e5e4" }}>
                <div className="card__body">
                  <h2>Contact Info</h2>
                  <div className="card__body-info">
                    <FaPhoneSquareAlt />
                    <p>(809) 586-0122</p>
                  </div>
                  <div className="card__body-info">
                    <FaMailBulk />
                    <p>info@jmtv12.com</p>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="card__footer">
                <IconContext.Provider
                  value={{
                    className: "react-icons-staff",
                  }}
                >
                  <div className="social__icons">
                    <a href="https://www.facebook.com/jmtv12" target="_blank">
                      <FaFacebookSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.instagram.com/jmtvcanal.12/"
                      target="_blank"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.youtube.com/channel/UCR5qt_ljvfQwlgqnnaNWfTA"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.tiktok.com/@jmtvcanal12"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a href="https://twitter.com/JMTv82440280" target="_blank">
                      <FaTwitterSquare />
                    </a>
                  </div>
                  <div className="social__icons">
                    <a
                      href="https://www.linkedin.com/in/orlando-muller-b83a3939/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Staff;
