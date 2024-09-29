"use client";

import React from "react";
import NavBar from "./component/navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.videoBackground}>
        <video
          autoPlay
          muted
          loop
          style={{ height: "66.67vh", objectFit: "cover", width: "50%" }}
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className={styles.content}>
        <div className="overview-text">
          <div
            className="flex justify-center items-center"
            style={{ marginTop: "40vh" }}
          >
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter a disease we can cure..."
                className="bg-white bg-opacity-20 backdrop-blur-md text-blue-600 placeholder-gray-600 border border-white border-opacity-30 rounded-full py-3 px-6 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 font-sf-pro"
              />
              <button
                className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-full transition duration-300 ease-in-out"
                onClick={() => (window.location.href = "/ask")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* <div
            className="flex justify-center items-center h-screen"
            style={{ marginTop: "30vh" }}
          ></div> */}
          {/* <ul style={{ textAlign: "left", marginTop: "10px" }}>
            <li>Navigate to the &ldquo;Train&rdquo; tab above.</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
