import React from "react";
import { connect } from "react-redux";

// import * as actions from "../../store/actions";

const SavedQueries = props => {
  let saved = (
    <ul className="">
      {props.savedQueries.map(query => {
        return <li key={query}>{query}</li>;
      })}
    </ul>
  );
  return (
    <div className="saved-queries">
      <h2>Saved queries:</h2>
      {saved}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    savedQueries: state.savedQueries
  };
};

export default connect(mapStateToProps)(SavedQueries);
