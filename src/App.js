import React from "react";

import "./App.css";
import Search from "./components/search";
import Photos from "./components/Photos";

const App = () => {
  //const SecretKey = ("e1acdb80dcb667d04ced148eade931aff00f5315c7bca5886d37d0215612a6f8");

  return (
    <div className="App">
      <Search />
      <Photos />
    </div>
  );
};

export default App;
