import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/reset-password" exact element={<ForgotPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}