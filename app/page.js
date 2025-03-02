"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] px-4 sm:px-6">
      {/* Main Container */}
      <motion.div
        className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 tracking-wide">
          Elective Selection
        </h1>

        {/* Email Input */}
        <div className="relative mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-4 pl-12 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>

        {/* Get OTP Button */}
        <motion.button
          onClick={() => router.push("/otp")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600 transition-all font-medium"
        >
          Get OTP
        </motion.button>
      </motion.div>
    </div>
  );
}