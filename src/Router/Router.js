import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login";
import PasswordReset from "../Components/Login/PasswordReset";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default Router;
