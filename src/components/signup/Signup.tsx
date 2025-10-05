import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import Layout from "../layouts/Layout";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      setMessage("Signup successful! You can now log in.");
      console.log("Response:", res.data);
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.error("Signup error:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Signup failed.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </Layout>
  );
};

export default Signup;
