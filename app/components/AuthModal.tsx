"use client";

import { useEffect } from "react";
import AuthForm from "./AuthForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-30 z-40"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
        <div
          className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <AuthForm />
        </div>
      </div>
    </>
  );
}
