import React from "react";
import "./styles/services.css";
import { IconContext } from "react-icons/lib";
import { GoFileMedia } from "react-icons/go";

const Services = () => {
  return (
    <main className="services__page">
      <section className="main-bg__services">
        <div className="services__content-scroll">
          <div className="services__content">
            <article className="services__events">
              <div className="events__header">
                <h2>Transmision & Grabación</h2>
              </div>
              <div className="events__information">
                <div className="events__information-stream">
                  <img src="/img/streaming.jpg" alt="" />
                  <div className="stream__information">
                    <p>
                      Realizamos la transmisión de su evento en vivo en varias
                      plataformas digitales y redes sociales.
                    </p>
                    <div className="social-media__examples">
                      <h4>Revisa alguno de nuestros trabajos</h4>
                      <div className="examples__links">
                        <IconContext.Provider
                          value={{
                            className: "react-icons__examples__links",
                          }}
                        >
                          <a
                            href="https://www.facebook.com/jmtv12/videos/273948350743743"
                            target="_blank"
                          >
                            <GoFileMedia />
                          </a>
                          <a
                            href="https://www.facebook.com/jmtv12/videos/625587875394997"
                            target="_blank"
                          >
                            <GoFileMedia />
                          </a>
                          <a
                            href="https://www.facebook.com/jmtv12/videos/273948350743743"
                            target="_blank"
                          >
                            <GoFileMedia />
                          </a>
                        </IconContext.Provider>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="events__information-record">
                  <img src="/img/grabacion.jpg" alt="" />
                  <div className="record__informartion">
                    <p>
                      Realizamos la grabación en alta calidad para manejo y
                      post-produccion del mismo
                    </p>
                    <div className="social-media__examples">
                      <h4>Revisa alguno de nuestros trabajos</h4>
                      <div className="examples__links">
                        <IconContext.Provider
                          value={{
                            className: "react-icons__examples__links",
                          }}
                        >
                          <a
                            href="https://www.facebook.com/jmtv12/videos/1399691040803138"
                            target="_blank"
                          >
                            <GoFileMedia />
                          </a>
                          <a
                            href="https://www.facebook.com/jmtv12/videos/6128889487156104"
                            target="_blank"
                          >
                            <GoFileMedia />
                          </a>
                          <a
                            href="https://www.facebook.com/jmtv12/videos/886559728790843"
                            target="_blank"
                          >
                            <GoFileMedia />
                          </a>
                        </IconContext.Provider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="services__marketing">
              <div className="marketing__header">
                <h2>Marketing & Publicidad</h2>
                <div className="marketing__information">
                  <div className="marketing__project-manager">
                    <h3>Project Manajer</h3>
                    <img
                      src="/img/project-managers.png"
                      alt="Imagen sobre Proyect Manager"
                    />
                    <ul className="project-manager__description">
                      <li>
                        ♦ Identificar y mitigar los riesgos en entrega de
                        proyectos.
                      </li>
                      <li>
                        ♦ Punto de enlace entre el equipo del proyecto y la alta
                        dirección.
                      </li>
                      <li>
                        ♦ Responsable de planificar y supervisar proyectos
                        dentro de una organización.
                      </li>
                    </ul>
                  </div>
                  <div className="marketing__SEO-specialist">
                    <h4>Posicionamiento SEO</h4>
                    <img src="/img/SEO.jpg" alt="Imagene SEO" />
                    <ul className="seo__description">
                      <li>♦ Buscadores web y optimización.</li>
                      <li>
                        ♦ Análisis de plataforma y generación de palabras clave.
                      </li>
                      <li>
                        ♦ Análisis e interpretación los resultados obtenidos.
                      </li>
                    </ul>
                  </div>
                  <div className="marketing__advertising">
                    <h4>Publicidad</h4>
                    <img
                      src="/img/plan-de-medios.jpg"
                      alt="Imagen para trabajo de publicidad"
                    />
                    <ul className="advertising__description">
                      <li>♦ Creación de campañas publicitarias.</li>
                      <li>♦ Spots, Banners, flyers y mucho más...</li>
                      <li>
                        ♦ Contenido personalizado y asesoramiento de marca.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="marketing__information"></div>
              </div>
            </article>
            <article className="services__production">
              <div className="production__header">
                <h2>Produccion de Contenido</h2>
              </div>
            </article>
            <article className="services__social-media">
              <div className="social-media__header">
                <h2>Social Media Marketing</h2>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
