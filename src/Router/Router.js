import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/dashboard/Dashboard";
import Login from "../Components/Login/Login";
import PasswordReset from "../Components/Login/PasswordReset";
import MainPage from '../Components/MainPage'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Router;
