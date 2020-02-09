import React from "react";
import { connect } from "react-redux";

import Backdrop from "./Backdrop";

const ErrorWindow = props => {
  return (
    <div className="errorWindow">
      <Backdrop />
      {props.keyword !== "" ? (
        <p>There are no images with keyword: {props.keyword}</p>
      ) : (
        <p>Search field is emty</p>
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
