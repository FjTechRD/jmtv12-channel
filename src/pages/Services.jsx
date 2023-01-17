import React from "react";
import "./styles/services.css";

const Services = () => {
  return (
    <main className="services__page">
      <section className="main-bg__services">
        <div className="services__content-scroll">
          <div className="services__content">
            <article className="services__events">
              <div className="events__header">
                <h2>Transmision y Grabación de eventos</h2>
              </div>
              <div className="events__information">
                <div className="events__information-stream">
                  <img src="/img/streaming.jpg" alt="" />
                  <p>
                    Realizamos la transmisión en de evento en vivo en varias
                    plataformas digitales y redes sociales.
                  </p>
                </div>
                <div className="events__information-record">
                  <img src="/img/grabacion.jpg" alt="" />
                  <p>
                    Realizamos la grabación en alta calidad para manejo y
                    post-produccion del mismo
                  </p>
                </div>
              </div>
            </article>
            <article className="services__marketing">
              <div className="marketing__header">
                <h2>Marketing & Publicidad</h2>
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
