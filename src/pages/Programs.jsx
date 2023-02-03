import React from "react";
import "./styles/programs.css";

const Programs = () => {
  return (
    <main className="programs__page">
      <div className="main__bg-programs">
        <div className="programs__scroll-container">
          <section className="programs__content">
            <img src="/img/Programs/SM12flyer.webp" alt="Super Matinal 12" />
            <img src="/img/Programs/dthoy.webp" alt="Dios te Llama Hoy" />
            <img src="/img/Programs/altantoGB.webp" alt="Al Tanto Tv" />
            <img
              src="/img/Programs/realidadesflyer.webp"
              alt="Flyer Realidades Tv"
            />
            <img
              src="/img/Programs/TENjuan.webp"
              alt="Todo en Noticias con Juan Fernandez"
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Programs;
