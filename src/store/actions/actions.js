import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setKeyword = keyword => {
  return { type: actionTypes.SET_KEYWORD, keyword };
};

export const fetchImagesStart = () => {
  return { type: actionTypes.FETCH_IMAGES_START };
};
export const fetchImages = images => {
  return { type: actionTypes.FETCH_IMAGES_SUCCESS, images: images };
};
export const fetchImagesFail = () => {
  return { type: actionTypes.FETCH_IMAGES_FAIL };
};
export const initFetchImages = keyword => {
  return dispatch => {
    const AcceessKey =
      "9ac327f77c1de13d07491eb3e8c8084cb501a2d989b5e4b7f159822d3aceed74";
    let url = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${AcceessKey}`;
    dispatch(fetchImagesStart());
    axios
      .get(url)
      .then(response => {
        if (response.data.results.length === 0 || keyword === "") {
          dispatch(fetchImagesFail());
        } else {
          dispatch(fetchImages(response.data.results));
        }
      })
      .catch(error => {
        dispatch(fetchImagesFail(error));
      });
  };
};

export const saveQuery = () => {
  return { type: actionTypes.SAVE_QUERY };
};

export const pressSavedQuerry = query => {
  return { type: actionTypes.PRESS_SAVED_QUERY, query };
};
export const showSavedQueryResult = photos => {
  return { type: actionTypes.SHOW_SAVED_QUERY_RESULT, photos };
};
export const fetchSavedQuery = query => {
  return dispatch => {
    const AcceessKey =
      "9ac327f77c1de13d07491eb3e8c8084cb501a2d989b5e4b7f159822d3aceed74";
    let url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${AcceessKey}`;
    dispatch(fetchImagesStart());
    axios
      .get(url)
      .then(response => {
        dispatch(showSavedQueryResult(response.data.results));
      })
      .catch(error => {
        dispatch(fetchImagesFail(error));
      });
  };
};

export const leaveErrorMessage = () => {
  return { type: actionTypes.LEAVE_ERROR_MESSAGE };
};
