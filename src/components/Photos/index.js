import React from "react";

import SearchResults from "./SearchResult";
import SavedQueries from "./SavedQueries";

const Photos = () => {
  return (
    <div className="photos">
      <SearchResults />
      <SavedQueries />
    </div>
  );
};

export default Photos;
