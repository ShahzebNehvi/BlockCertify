import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // Adjust the path as necessary

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", response.data.token); // Store token in local storage
      login(); // Call the login function from the context
      navigate("/generate"); // Redirect to generate page
    } catch (error) {
      setError(error.response?.data.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Login</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-[#060B0F] p-6 sm:p-8 rounded-xl w-full max-w-md shadow-lg">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#202d37] hover:text-[#202d37] hover:bg-[#94a3ad] text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full transition-transform transform hover:scale-105"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
