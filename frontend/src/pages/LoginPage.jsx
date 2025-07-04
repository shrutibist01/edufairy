import React from "react";

const LoginPage = () => {
  return (
    <>
      <style>
        {`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to right, #667eea, #764ba2);
          padding: 2rem;
        }

        .login-box {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .login-box h2 {
          margin-bottom: 0.5rem;
          font-size: 2rem;
          color: #333;
        }

        .login-box p {
          margin-bottom: 1.5rem;
          color: #555;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .login-form label {
          font-size: 0.9rem;
          color: #444;
        }

        .login-form input {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .login-form button {
          background-color: #667eea;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-form button:hover {
          background-color: #5a67d8;
        }

        .login-footer {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #555;
        }

        .login-footer a {
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
        }
      `}
      </style>

      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back 👋</h2>
          <p>Please login to your account</p>
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />

            <button type="submit">Login</button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <a href="/register">Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
