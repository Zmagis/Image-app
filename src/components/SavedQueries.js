import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";

const SavedQueries = props => {
  return (
    <div className="saved-queries">
      <h2>Saved queries:</h2>
      <ul>
        {props.savedQueries.map(query => {
          return (
            <li key={query} onClick={() => props.onFetchSavedQuery(query)}>
              {query}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    savedQueries: state.savedQueries
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchSavedQuery: query => dispatch(actions.fetchSavedQuery(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedQueries);
