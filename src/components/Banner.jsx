import React from "react";

export default function WelcomeSection() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center text-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?technology')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Explore new opportunities, learn, and grow with us. Join today and
          start your journey!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
