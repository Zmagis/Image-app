import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setKeyword = keyword => {
  return { type: actionTypes.SET_KEYWORD, keyword };
};

export const saveQuery = () => {
  return { type: actionTypes.SAVE_QUERY };
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
    // setTimeout(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchImages(response.data.results));
      })
      .catch(error => {
        dispatch(fetchImagesFail());
      });
    // }, 2000);
  };
};

export const pressSavedQuerry = query => {
  return { type: actionTypes.PRESS_SAVED_QUERY, query };
};
