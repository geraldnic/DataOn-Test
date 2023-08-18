import React from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const [cookies] = useCookies(["access_token"]);
  const isAuthenticated = cookies.access_token;
  return isAuthenticated ? children : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
