import React from "react";
import NavBar from "./component/navbar";

const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="overview-text">
        {/* <h1 style={{ fontWeight: "bold", fontSize: "2em" }}>RAG QnA Chatbot</h1> */}
        {/* <br /> */}

        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold mb-5">
              Are you allergic to any medication?
            </h1>
            <input
              type="text"
              placeholder="Your Answer"
              className="w-full px-3 py-2 mb-5 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="px-5 py-2 bg-black text-white rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-gray-800">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
