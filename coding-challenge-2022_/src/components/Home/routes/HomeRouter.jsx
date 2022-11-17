import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../../Shared/Navbar";
import { Home } from "../Home";

export const HomeRoute = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
};
