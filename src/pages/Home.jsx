import React from "react";
import "./styles/home.css";

const Home = () => {
  return (
    <main className="home__page">
      <section className="main_bg-home">
        <div className="home__content">
          <h2>Bienvenidos</h2>
          <div className="home__content-presentation">
            <div className="home__description-box">
              <article className="home__logo">
                <img
                  className="home__logo"
                  src="/img/LgJMTv12.png"
                  alt="Logo Canal 12"
                />
              </article>
              <article className="home__description">
                <h2>Somos JMTv S.R.L</h2>
                <h4 className="home__description">
                  Un Canal de Televisión ubicado en la region norte de la
                  República Dominicana, siendo nuestra principal labor, ofrecer
                  una programación de valores, con calidad, educativa y que
                  fomente las buenas costumbres y educación.{" "}
                </h4>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
