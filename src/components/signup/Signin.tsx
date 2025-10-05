import React, { useState } from "react";
import axios from "axios";
import Layout from "../layouts/Layout";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      setMessage(response.data.message);

      // Example: store user info in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Example: redirect to homepage
      window.location.href = "/home";
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server error. Please try again.");
      }
    }
  };

  return (
    <Layout>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", width: "100%", marginBottom: "10px" }}
          />
          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </Layout>
  );
};

export default Signin;
