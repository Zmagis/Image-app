import React from "react";

import Search from "./components/Search";
import SearchResults from "./components/SearchResult";
import SavedQueries from "./components/SavedQueries";

const App = () => {
  return (
    <div className="App">
      <Search />
      <div className="photos">
        <SearchResults />
        <SavedQueries />
      </div>
    </div>
  );
};

export default App;
