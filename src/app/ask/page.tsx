"use client";

import NavBar from "../component/navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl font-bold">Header</h1>
      </header>
      <main className="flex-grow bg-gray-50">{/* Main content area */}</main>
    </div>
  );
}
