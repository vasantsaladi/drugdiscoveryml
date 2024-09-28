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
          <p>
            With this RAG (Retrieval-Augmented Generation) application, you can
            quickly deploy a chatbot that is enhanced by your own data. By
            simply uploading any PDF file(s) of your choosing, you will be
            creating your own custom Questions and Answers (QnA) chatbot.
          </p>
          <h2 style={{ fontStyle: "italic", marginTop: "20px" }}>
            Getting Started
          </h2>
          <ul style={{ textAlign: "left", marginTop: "10px" }}>
            <li>Navigate to the &ldquo;Train&rdquo; tab above.</li>
            <li>
              Here you can upload any number of PDF files you wish to ask the
              chatbot about, or that you wish the chatbot would consider when
              providing an answer.
            </li>
            <li>
              After uploading your files, navigate to &ldquo;QnA&rdquo; tab.
            </li>
            <li>
              In the prompt, you can now ask questions about the uploaded PDF
              files in natural language, and receive a response.
            </li>
          </ul>
          <p style={{ marginTop: "20px" }}>
            This application leverages MongoDB&apos;s robust vector store
            capabilities. Each uploaded PDF is embedded in a vectorized format
            into your MongoDB Atlas cluster. The vector store efficiently
            organizes and indexes data, streamlining the process of generating
            responses and insights from the RAG model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
