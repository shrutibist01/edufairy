import React from "react";

const RegisterPage = () => {
  return (
    <>
      <style>
        {`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to right, #667eea, #764ba2);
          padding: 2rem;
        }

        .register-box {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          text-align: center;
        }

        .register-box h2 {
          margin-bottom: 0.5rem;
          font-size: 2rem;
          color: #333;
        }

        .register-box p {
          margin-bottom: 1.5rem;
          color: #555;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .register-form label {
          font-size: 0.9rem;
          color: #444;
        }

        .register-form input {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .register-form button {
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

        .register-form button:hover {
          background-color: #5a67d8;
        }

        .register-footer {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #555;
        }

        .register-footer a {
          color: #667eea;
          text-decoration: none;
          font-weight: bold;
        }
      `}
      </style>

      <div className="register-container">
        <div className="register-box">
          <h2>Create an Account</h2>
          <p>Join us and start your journey</p>
          <form className="register-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />

            <button type="submit">Register</button>
          </form>
          <div className="register-footer">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
