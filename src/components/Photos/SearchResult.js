import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Spinner from "../UI/Spinner";

const ResultGrid = props => {
  let result = props.images.map(item => (
    <div key={item.id} className="img">
      <img src={item.urls.regular} alt={item.alt_description} />
      <p>Photographer: {item.user.name}</p>
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
    loading: state.loading
  };
};
const mapDispatcToProps = dispatch => {
  return {
    onFetchImages: keyword => dispatch(actions.initFetchImages(keyword))
  };
};

export default connect(mapStateToProps, mapDispatcToProps)(ResultGrid);
