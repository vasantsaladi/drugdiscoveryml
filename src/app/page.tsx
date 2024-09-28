import React, { useState } from "react";
import NavBar from "./component/navbar";

const Home: React.FC = () => {
  const [desire, setDesire] = useState<string>("");

  const handleDesireChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesire(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">RAG QnA Chatbot</h1>

        <div className="mb-8">
          <label
            htmlFor="desire"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            What desire are you currently experiencing?
          </label>
          <input
            type="text"
            id="desire"
            value={desire}
            onChange={handleDesireChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your current desire..."
          />
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            With this RAG (Retrieval-Augmented Generation) application, you can
            quickly deploy a chatbot that is enhanced by your own data. By
            simply uploading any PDF file(s) of your choosing, you will be
            creating your own custom Questions and Answers (QnA) chatbot.
          </p>

          <h2 className="text-2xl font-semibold italic mb-4">
            Getting Started
          </h2>
          <ul className="list-disc pl-5 mb-6">
            <li>Navigate to the "Train" tab above.</li>
            <li>
              Here you can upload any number of PDF files you wish to ask the
              chatbot about, or that you wish the chatbot would consider when
              providing an answer.
            </li>
            <li>After uploading your files, navigate to "QnA" tab.</li>
            <li>
              In the prompt, you can now ask questions about the uploaded PDF
              files in natural language, and receive a response.
            </li>
          </ul>

          <p>
            This application leverages MongoDB's robust vector store
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
