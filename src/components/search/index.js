import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";

const Search = props => {
  const { onFetchImages } = props;
  useEffect(() => {
    onFetchImages(props.keyword);
  }, [onFetchImages]);

  const handleEnter = event => {
    if (event.key === "Enter") {
      onFetchImages(props.keyword);
    }
  };
  const changeHandler = event => {
    props.onSetKeyword(event.target.value);
  };

  return (
    <div className="search">
      <h1>Photos by Unsplash</h1>
      <input
        type="text"
        placeholder="Search photos"
        value={props.keyword}
        onChange={event => changeHandler(event)}
        onKeyPress={event => handleEnter(event)}
      />
      <button type="submit" onClick={() => onFetchImages(props.keyword)}>
        Search
      </button>
      <button type="submit" onClick={() => props.onSaveQuery()}>
        Save
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images,
    keyword: state.keyword
  };
};
const mapDispatcToProps = dispatch => {
  return {
    onFetchImages: keyword => dispatch(actions.initFetchImages(keyword)),
    onSetKeyword: keyword => dispatch(actions.setKeyword(keyword)),
    onSaveQuery: () => dispatch(actions.saveQuery())
  };
};

export default connect(mapStateToProps, mapDispatcToProps)(Search);
