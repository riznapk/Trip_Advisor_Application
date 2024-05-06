import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import PackageForm from "../pages/Packages/PackageForm";
import ViewDetails from "../pages/Packages/ViewDetails";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import Tour from "../pages/Tour/Tour";
import Package from "../pages/Packages/Package";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/package-list"} element={<Package />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/signin"} element={<Signin />}></Route>
        <Route path={"/add-new-package"} element={<PackageForm />}></Route>
        <Route path={"/view-details"} element={<ViewDetails />}></Route>
        <Route path={"/tour-list"} element={<Tour />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
