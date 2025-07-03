"use client";

import { useState } from "react";
import Image from "next/image";
import { logo } from "@/public/assets";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

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

      <div className="flex flex-col space-y-4 mb-4">
        <button className="flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <button className="flex items-center justify-center gap-3 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.85 7.94 9.8v-6.93H7.1v-2.87h2.84V9.5c0-2.8 1.67-4.34 4.22-4.34 1.22 0 2.5.22 2.5.22v2.75h-1.41c-1.39 0-1.82.86-1.82 1.75v2.1h3.09l-.49 2.87h-2.6v6.93C18.56 20.85 22 16.84 22 12z" />
          </svg>
          Continue with Facebook
        </button>
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">or</span>
        </div>
      </div>

      <form className="space-y-4">
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg text-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg text-sm"
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
          <label className="text-xs flex gap-2">
            <input type="checkbox" required /> I agree to terms and conditions
          </label>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
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

      <p className="text-center text-xs text-gray-400 mt-4">
        Secure Login — Your information is protected
      </p>
    </div>
  );
}
