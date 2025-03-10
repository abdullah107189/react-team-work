import React from "react";
import Footer from "./components/Footer";
import Siam from "./components/Navbar/Siam";
import Blog from "./Blog/Blog";

const App = () => {
  return (
    <div>
      <h1 className="text-red-600 bg-blue-300">hello word</h1>
      <h1 className="text-xl">hello word</h1>
      <Siam />
      <Blog></Blog>
      <Footer />
    </div>
  );
};

export default App;
