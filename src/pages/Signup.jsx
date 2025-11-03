    import React, { useState } from "react";
    import axios from "axios";


    const Signup = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const handleSignUp = async () => {
        if (password.trim() !== confirmPassword.trim()) {
        alert("Passwords do not match!");
        return;
        }

        try {
        const res = await axios.post(
            "http://localhost:2000/api/User/Signup",
            { email, password, name },
            { withCredentials: true }
        );
        if (res.data.success) {
            setIsLoggedIn(true);
        } else {
            console.log("Signup failed");
        }
        } catch (error) {
        console.error("Error during signup:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

            <div className="mb-4">
            <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
            >
                Email:
            </label>
            <input
                id="email"
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
            >
                Name:
            </label>
            <input
                id="name"
                value={name}
                type="text"
                name="username"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
            >
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

            <div className="mb-6">
            <label
                htmlFor="confpass"
                className="block text-sm font-medium text-gray-700"
            >
                Confirm Password:
            </label>
            <input
                id="confpass"
                value={confirmPassword}
                type="password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            </div>

            <button
            onClick={handleSignUp}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
            >
            Sign Up
            </button>
        </div>
        </div>
    );
    };

    export default Signup;
