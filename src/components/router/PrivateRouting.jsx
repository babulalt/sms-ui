import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../AppBar";

function PrivateRoute() {
  const authValue = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {authValue ? (
        <>
         <ResponsiveAppBar>
          <Outlet />
        </ ResponsiveAppBar>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default PrivateRoute;
