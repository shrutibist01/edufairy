import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li><Link to="/dashboard/calendar">📅 Calendar</Link></li>
        <li><Link to="/dashboard/summarize">📝 Summarize</Link></li>
        <li><Link to="/dashboard/mock-tests">📚 Mock Tests</Link></li>
        <li><Link to="/dashboard/qna">❓ Q&A</Link></li>
        <li><Link to="/dashboard">🏠 Home</Link></li>
      </ul>
      <style>{`
        .sidebar {
          width: 200px;
          height: 100vh;
          background: linear-gradient(to bottom, #667eea, #764ba2);
          color: white;
          padding: 1rem;
          position: fixed;
        }
        .sidebar-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .sidebar-links {
          list-style: none;
          padding: 0;
        }
        .sidebar-links li {
          margin-bottom: 1rem;
        }
        .sidebar-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        .sidebar-links a:hover {
          color: #fbbf24;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
