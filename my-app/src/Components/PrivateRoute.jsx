import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const state = useContext(AuthContext);

  if (!state.authState.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
