import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../util";

const initialState = {
  keyword: "CLIMB",
  images: [],
  savedQueries: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_KEYWORD:
      return updateObject(state, {
        keyword: action.keyword.toUpperCase(),
        error: false
      });

    case actionTypes.FETCH_IMAGES_START:
      return updateObject(state, { loading: true, error: false });

    case actionTypes.FETCH_IMAGES_SUCCESS:
      return updateObject(state, {
        images: action.images,
        loading: false,
        error: false
      });

    case actionTypes.FETCH_IMAGES_FAIL:
      return updateObject(state, { loading: false, error: true });

    case actionTypes.SAVE_QUERY:
      if (state.keyword !== "") {
        return updateObject(state, {
          savedQueries: [...state.savedQueries, state.keyword],
          keyword: ""
        });
      } else {
        return state;
      }

    case actionTypes.SHOW_SAVED_QUERY_RESULT:
      return updateObject(state, {
        images: action.photos,
        loading: false,
        error: false,
        keyword: ""
      });

    case actionTypes.LEAVE_ERROR_MESSAGE:
      return updateObject(state, {
        error: false,
        keyword: "",
        images: []
      });

    default:
      return state;
  }
};

export default reducer;
