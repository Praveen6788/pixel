import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function LoginForm({setIsAuthenticated}) {
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/admin`,
        { data: formData }
      );

      if (response.status === 200) {
        // Redirect to admin home page on successful login
         
        navigate("/");
        setIsAuthenticated(true);
      } else {
        // Handle unexpected success status codes if needed
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.log("Login failed:", error);
      // Optionally show error to user here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Admin Name
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contact Lead
          </a>
        </p>
      </div>
    </div>
  );
}
