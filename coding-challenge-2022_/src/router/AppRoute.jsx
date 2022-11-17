import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Home/Dashboard";
import { Home } from "../components/Home/Home";
import { HomeRoute } from "../components/Home/routes/HomeRouter";
import { LoginPage } from "../components/Login/LoginPage";
import { Navbar } from "../components/Shared/Navbar";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage></LoginPage>
          </PublicRoute>
        } />
          
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HomeRoute></HomeRoute>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
