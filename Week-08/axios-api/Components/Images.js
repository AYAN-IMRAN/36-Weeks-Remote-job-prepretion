"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Images() {
  const [newImages, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=12");
        setImages(response.data);
      } catch (err) {
        setError("⚠️ Images load nahi ho saki.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // 👉 Beautiful Loader (CSS Spinner)
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
        <p className="text-white text-lg font-semibold animate-pulse">Loading images...</p>
        <style jsx>{`
          .loader {
            border-top-color: #6366f1; /* Indigo accent */
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 text-red-400 bg-black min-h-screen text-lg font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">
        Modern Image Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newImages.map((image, index) => (
          <div
            key={image.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-3 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-white"
            style={{ animation: `fadeIn 0.3s ease-in ${index * 0.1}s both` }}
          >
            <img
              src={`https://picsum.photos/id/${image.id}/500/300`}
              alt={image.author}
              className="rounded-md w-full h-48 object-cover shadow-md"
            />
            <p className="mt-3 text-sm font-semibold text-center truncate text-white">
              {image.author}
            </p>
          </div>
        ))}
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Images;
