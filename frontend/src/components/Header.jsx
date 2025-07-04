import React from 'react';

const Header = () => {
  const userName = "Shruti"; // Replace

  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <h1>🧚 EduFairy</h1>
        </div>
        <div className="user-section">
          <span className="greeting">Hello, {userName}</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>

      <style>{`
        .header {
          height: 60px;
          background: white;
          color: #764ba2;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1000;
        }

        .header-content {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .brand h1 {
          font-size: 1.4rem;
          font-weight: bold;
        }

        .user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.95rem;
        }

        .greeting {
          color: #764ba2;
        }

        .logout-btn {
          background: #764ba2;
          color: white;
          border: none;
          padding: 0.4rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .logout-btn:hover {
          background: #5c3a88;
        }
      `}</style>
    </header>
  );
};

export default Header;
