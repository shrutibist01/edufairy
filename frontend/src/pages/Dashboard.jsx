import React from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <style>{`
        .main-content {
          margin-left: 200px;
          margin-top: 60px;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
