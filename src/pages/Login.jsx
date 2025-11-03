import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn, IsLoggedIn }) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const router = useNavigate();

const handleLogin = async () => {
    if (!email || !password) {
    alert("Please enter both email and password");
    return;
    }

    setIsLoggedIn(true);
    try {
    const res = await axios.post(
        "http://localhost:2000/api/User/Login",
        { email, password },
        { withCredentials: true }
    );

    if (res.data.success) {
        setIsLoggedIn(true);
        router("/");
    } else {
        alert("Login failed. Please check your credentials.");
    }
    } catch (error) {
    console.error("Error during Login:", error);
    alert("Something went wrong. Please try again.");
    }
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
            </label>
            <input
            id="email"
            value={email}
            type="email"
            name="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
            </label>
            <input
            id="password"
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        <button
            onClick={handleLogin}
            className={`w-full py-2 px-4 ${
            IsLoggedIn ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold rounded-md transition`}
        >Login
        </button>

        {IsLoggedIn && (
            <p className="mt-4 text-green-600 text-center">
            You are logged in
            <br />
            Now, Enjoy Reading.
            </p>
        )}
        </div>
    </div>
);
};

export default Login;
