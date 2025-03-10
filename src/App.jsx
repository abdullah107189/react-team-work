import React from "react";
import Siam from "./Siam";
import Banner from "./components/Banner";
import Siam from "./components/Navbar/Siam";

const App = () => {
  return (
    <div>
      <h1 className="text-red-600 bg-blue-300">hello word</h1>
      <h1 className="text-xl">hello word</h1>
      <Banner />
      <Siam />
    </div>
  );
};

export default App;
