import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate();
  const staff = () => {
    navigate("/staff");
  };
  const programs = () => {
    console.log("me estas pulsando");
  };
  const comunicators = () => {
    console.log("me estas pulsando");
  };

  return (
    <main className="about-us__page">
      <section className="main-bg__about-us">
        <div className="about-us__btn-menu">
          <button onClick={staff}>STAFF</button>
          <button onClick={programs}>PROGRAMAS</button>
          <button onClick={comunicators}>COMUNCIADORES</button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
