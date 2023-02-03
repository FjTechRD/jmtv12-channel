import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <main className="about-us__page">
      <section className="main-bg__about-us">
        <div className="about-us__btn-menu">
          <button
            onClick={() => {
              navigate("/staff");
            }}
          >
            STAFF
          </button>
          <button
            onClick={() => {
              navigate("/programs");
            }}
          >
            PROGRAMAS
          </button>
          {/* <button
            onClick={() => {
              navigate("/comunicators");
            }}
          >
            COMUNCIADORES
          </button> */}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
