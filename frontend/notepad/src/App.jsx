// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Modal from 'react-modal';

const appElement = document.getElementById('root');

Modal.setAppElement(appElement);

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/SignUp" exact element={<SignUp />} />
    </Routes>
  </Router>
)

const App = () => {
  return (
      <div>
        {routes}
      </div>
  )
}

export default App;