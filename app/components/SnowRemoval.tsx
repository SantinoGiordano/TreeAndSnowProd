import React from "react";

export default function SnowRemoval() {
  return (
    <div className="max-w-xl mx-auto bg-white/10 backdrop-blur rounded-2xl shadow-2xl p-8 my-8 flex flex-col items-center">
      <div className="bg-blue-100 rounded-full p-4 mb-4">
        {/* Snowflake icon (Heroicons/Outline) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v20m10-10H2m15.07-7.07L4.93 19.07m0-14.14l14.14 14.14"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-white mb-2 text-center drop-shadow">
        Snow Removal Services
      </h2>
      <p className="text-gray-200 mb-6 text-center">
        Fast, reliable, and safe snow removal for your home or business. We
        clear driveways, walkways, and parking lots so you can stay safe and
        mobile all winter long.
      </p>
      <a
        href="/contact"
        className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Get in Touch
      </a>
    </div>
  );
}
