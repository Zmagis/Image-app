import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import reducer from "./reducer";
import * as actionTypes from "../actions/actionTypes";

configure({ adapter: new Adapter() });

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      keyword: "FLY",
      images: [],
      savedQueries: [],
      loading: false,
      error: false
    });
  });

  it("should store new keyword", () => {
    expect(
      reducer(
        {
          keyword: "FLY",
          images: [],
          savedQueries: [],
          loading: false,
          error: false
        },
        { type: actionTypes.SET_KEYWORD, keyword: "word" }
      )
    ).toEqual({
      keyword: "WORD",
      images: [],
      savedQueries: [],
      loading: false,
      error: false
    });
  });

  it("should fetchImagesStart", () => {
    expect(
      reducer(
        {
          keyword: "FLY",
          images: [],
          savedQueries: [],
          loading: false,
          error: false
        },
        { type: actionTypes.FETCH_IMAGES_START }
      )
    ).toEqual({
      keyword: "FLY",
      images: [],
      savedQueries: [],
      loading: true,
      error: false
    });
  });

  it("should fetchImagesFail", () => {
    expect(
      reducer(
        {
          keyword: "FLY",
          images: [],
          savedQueries: [],
          loading: false,
          error: false
        },
        { type: actionTypes.FETCH_IMAGES_FAIL }
      )
    ).toEqual({
      keyword: "FLY",
      images: [],
      savedQueries: [],
      loading: false,
      error: true
    });
  });

  it("should save query", () => {
    expect(
      reducer(
        {
          keyword: "FLY",
          images: [],
          savedQueries: [],
          loading: false,
          error: false
        },
        { type: actionTypes.SAVE_QUERY }
      )
    ).toEqual({
      keyword: "",
      images: [],
      savedQueries: ["FLY"],
      loading: false,
      error: false
    });
  });

  it("should leave error message when query was emty", () => {
    expect(
      reducer(
        {
          keyword: "",
          images: [],
          savedQueries: [],
          loading: false,
          error: false
        },
        { type: actionTypes.LEAVE_ERROR_MESSAGE }
      )
    ).toEqual({
      keyword: "",
      images: [],
      savedQueries: [],
      loading: false,
      error: false
    });
  });

  it("should leave error message with invalid query", () => {
    expect(
      reducer(
        {
          keyword: "adffdsfsdafd",
          images: [],
          savedQueries: [],
          loading: false,
          error: true
        },
        { type: actionTypes.LEAVE_ERROR_MESSAGE }
      )
    ).toEqual({
      keyword: "",
      images: [],
      savedQueries: [],
      loading: false,
      error: false
    });
  });
});
