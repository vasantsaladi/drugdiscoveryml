"use client";

import React from "react";
import NavBar from "./component/navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className={styles.content}>
        {/* <div className={styles.backgroundBar}>
          <div className={styles.left}>
            <h1>
              <a href="/">RAG QnA Chatbot</a>
            </h1>
          </div>
          <NavBar />
        </div> */}
        {/* <NavBar /> */}
        <div className="overview-text">
          <div
            className="flex justify-center items-center"
            style={{ marginTop: "40vh" }}
          >
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
              onClick={() => (window.location.href = "/ask")}
              style={{ marginTop: "-20vh" }}
            >
              Try us out!
            </button>
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
