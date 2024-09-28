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
        <div className={styles.backgroundBar}>
          <div className={styles.left}>
            <h1>
              <a href="/">RAG QnA Chatbot</a>
            </h1>
          </div>
          <NavBar />
        </div>
        <div className="overview-text">
          {/* <ul style={{ textAlign: "left", marginTop: "10px" }}>
            <li>Navigate to the &ldquo;Train&rdquo; tab above.</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
