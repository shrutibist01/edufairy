import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Calendar from "./components/Calendar";
import Summarize from "./components/Summarize";
import MockTests from "./components/MockTests";
import QnA from "./components/QnA";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/calendar" element={<Calendar />} />
      <Route path="/dashboard/summarize" element={<Summarize />} />
      <Route path="/dashboard/mock-tests" element={<MockTests />} />
      <Route path="/dashboard/qna" element={<QnA />} />
    </Routes>
  );
};

export default AppRoutes;
