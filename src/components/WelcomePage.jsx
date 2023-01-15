import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUserName,
  setUserLastName,
  setUserAge,
} from "../store/slices/entrieUser.slice";
import "./styles/welcomePage.css";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    dispatch(setUserName(data));
    navigate("/home");
  };

  return (
    <main className="welcome__page">
      <section className="main_bg">
        <div className="welcome__form">
          <img className="logo__home" src="/img/LgJMTv12.png" alt="" />
          <h2>Bienvenidos</h2>

          <div className="home__presentation">
            <form onSubmit={handleSubmit(submit)}>
              <div className="firstname">
                <h3>Introduce tu nombre</h3>
                <input id="name" type="text" {...register("name")} />
              </div>
              <div className="lastname">
                <h3>introduce tus apellidos</h3>
                <input id="lastname" type="text" {...register("lastname")} />
              </div>
              <div className="age">
                <h3>¿que edad tienes?</h3>
                <input type="number" {...register("age")} />
              </div>
              <input id="age" className="submit__home" type="submit" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WelcomePage;
