import React from "react";
import { connect } from "react-redux";

import Spinner from "./UI/Spinner";
import ErrorWindow from "./error/ErrorWindow";

const ResultGrid = props => {
  let result = props.images.map(item => (
    <div key={item.id} className="box">
      <a href={item.user.links.html} target="_blank">
        <img src={item.urls.regular} alt={item.alt_description} />
      </a>
      <p>Photographer: {item.user.name}</p>
      {props.error ? <ErrorWindow /> : null}
    </div>
  ));
  if (props.loading) {
    result = <Spinner />;
  }

  return <div className="result-grid">{result}</div>;
};

const mapStateToProps = state => {
  return {
    images: state.images,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps)(ResultGrid);
