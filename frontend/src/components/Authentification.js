import React from "react";
import { Navigate } from "react-router-dom";

const Authentification = ({ childComponent }) => {
  const isUserLoggedIn = () => {
    // ==> verify  token in  storage
    const authToken = sessionStorage.getItem("authToken");
    return authToken !== null;
  };

  if (isUserLoggedIn()) {
    return childComponent;
  } else {
    alert("You must login first to access this page!");
    return <Navigate to="/login" replace />;
  }
};

export default Authentification;
