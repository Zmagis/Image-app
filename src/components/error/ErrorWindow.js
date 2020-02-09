import React from "react";
import { connect } from "react-redux";

import Backdrop from "./Backdrop";

const ErrorWindow = props => {
  return (
    <div className="errorWindow">
      <Backdrop />

      <h4>OOOPS...</h4>
      {props.keyword !== "" ? (
        <p>There are no images with keyword: {props.keyword}</p>
      ) : (
        <p>Type a keyword for search</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    keyword: state.keyword,
    error: state.error
  };
};

export default connect(mapStateToProps)(ErrorWindow);
