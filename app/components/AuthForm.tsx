"use client";

import { useState } from "react";
import Image from "next/image";
import { logo } from "@/public/assets";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isSignUp ? "/api/auth/signup" : "/api/auth/login";
    try {
      const res = await fetch(`http://localhost:4000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          ...(isSignUp && { name }),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        console.log("Success:", data);
        // Optionally save token
        localStorage.setItem("token", data.token);
        // Reload page or redirect
        window.location.reload();
      }
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-8 bg-white rounded-2xl">
      <div className="flex flex-col items-center mb-6">
        <Image
          src={logo}
          alt="Logo"
          className="mb-4"
          width={200}
          height={200}
        />
        <h2 className="text-2xl font-bold text-gray-800">
          {isSignUp ? "Create an Account" : "Sign in to your account"}
        </h2>
      </div>

      <div className="flex flex-col mb-4 space-y-4">
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/oauth/google`}
          className="flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </a>

        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/oauth/facebook`}
          className="flex items-center justify-center gap-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="..." />
          </svg>
          Continue with Facebook
        </a>
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500 bg-white">or</span>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 text-sm border rounded-lg"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 text-sm border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 text-sm border rounded-lg"
          required
        />

        {!isSignUp && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        {isSignUp && (
          <label className="flex gap-2 text-xs">
            <input type="checkbox" required /> I agree to terms and conditions
          </label>
        )}

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          {loading ? "Processing..." : isSignUp ? "Sign Up" : "Log In"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-indigo-600 hover:underline"
        >
          {isSignUp ? "Log In" : "Sign Up"}
        </button>
      </p>

      {!isSignUp && (
        <div className="mt-6 text-center">
          <button className="text-sm text-gray-500 hover:underline">
            Continue as Guest
          </button>
        </div>
      )}

      <p className="mt-4 text-xs text-center text-gray-400">
        Secure Login — Your information is protected
      </p>
    </div>
  );
}
