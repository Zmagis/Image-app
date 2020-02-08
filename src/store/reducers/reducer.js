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
      return updateObject(state, { keyword: action.keyword.toUpperCase() });

    case actionTypes.SAVE_QUERY:
      if (state.keyword !== "") {
        return updateObject(state, {
          savedQueries: [...state.savedQueries, state.keyword],
          keyword: ""
        });
      }
    case actionTypes.FETCH_IMAGES_START:
      return updateObject(state, { loading: true });

    case actionTypes.FETCH_IMAGES_SUCCESS:
      return updateObject(state, {
        images: action.images,
        loading: false,
        error: false
      });

    case actionTypes.FETCH_IMAGES_FAIL:
      return updateObject(state, { loading: false, error: true });

    default:
      return state;
  }
};

export default reducer;

// const allImages = [...state.images];
//       console.log(allImages);
//       let newArray;

//       for (let i = 0; i <= allImages.length - 1; i++) {
//         let obj = allImages[i];
//         // console.log(state.selectedImages.filter(id => id !== action.imageId));
//         if (action.imageId === obj.id) {
//           newArray = [...state.selectedImages, obj];
//           updateObject(state, { selectedImages: newArray });
//         }
//       }
//       return updateObject(state, { selectedImages: newArray });
