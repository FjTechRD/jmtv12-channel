import React from "react";
import { useSelector } from "react-redux";
import "../../shared/styles/header.css";

const RegisterUser = () => {
  const userName = useSelector((state) => state.user);

  return <div>RegisterUser</div>;
};

export default RegisterUser;
