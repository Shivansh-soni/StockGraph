import "./App.css";

import React from "react";

import Stock from "./components/Stock"

const App = () => {
 
  return (
    <div className="App flex flex-col lg:flex-row lg:mt-20 justify-center items-center gap-10">   
      <Stock></Stock>
    </div>
  );
};

export default App;
