"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Staff() {
  const [schedule, setSchedule] = useState({
    degree: "",
    year: "",
    semester: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

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
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 tracking-wide">
          Schedule Exam
        </h2>

        {/* Dropdown Fields */}
        {["degree", "year", "semester"].map((field) => (
          <div key={field} className="relative mb-4">
            <select
              name={field}
              value={schedule[field]}
              onChange={handleChange}
              className="w-full p-4 pl-12 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 transition-all appearance-none"
            >
              <option value="" disabled>
                Select {field.charAt(0).toUpperCase() + field.slice(1)}
              </option>
              {field === "degree" && (
                <>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="PhD">PhD</option>
                </>
              )}
              {field === "year" && (
                <>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </>
              )}
              {field === "semester" && (
                <>
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>
                </>
              )}
            </select>
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
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </div>
        ))}

        {/* Date and Time Inputs */}
        <div className="relative mb-4">
          <input
            type="date"
            name="date"
            value={schedule.date}
            onChange={handleChange}
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
            <path d="M15 3h4v4M9 3H5v4M3 11h18M3 16h18M3 21h18M8 3v18"></path>
          </svg>
        </div>

        <div className="relative mb-4">
          <input
            type="time"
            name="time"
            value={schedule.time}
            onChange={handleChange}
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>

        {/* Schedule Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600 transition-all font-medium"
        >
          Schedule
        </motion.button>
      </motion.div>
    </div>
  );
}
