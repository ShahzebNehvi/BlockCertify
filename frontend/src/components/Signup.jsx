import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", {
        email: formData.email,
        password: formData.password,
      });
      setSuccessMessage(response.data.message);
      setError(null);
    } catch (error) {
      setError(error.response?.data.message || "Signup failed");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sign Up</h2>
      {error && <div className="text-red-500">{error}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="bg-[#060B0F] p-6 sm:p-8 rounded-xl w-full max-w-md shadow-lg">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input name="email" id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]" />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input name="password" id="password" type="password" placeholder="******************" value={formData.password} onChange={handleChange} required className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]" />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input name="confirmPassword" id="confirmPassword" type="password" placeholder="******************" value={formData.confirmPassword} onChange={handleChange} required className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]" />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#202d37] hover:text-[#202d37] hover:bg-[#94a3ad] text-white py-2 px-4 mt-2 rounded-xl focus:outline-none focus:shadow-outline w-full transition-transform transform hover:scale-105" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
