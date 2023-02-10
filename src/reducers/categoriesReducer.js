import { baseUrl } from "../constants";
const showCategories = "SHOW_CATEGORIES";
export const loading = "LOADING";
const getPosts = "POSTS";

const initialState = {
  isLoading: false,
  categories: [],
  posts: [],
  aboutPost: [],
};

export const showCategory = () => {
  return async (dispatch) => {
    dispatch({ type: loading });
    const categoriesUrl = `${baseUrl}/categories`;
    const categoriesRes = await fetch(categoriesUrl);
    const categoriesJson = await categoriesRes.json();
    dispatch({ type: showCategories, payload: categoriesJson });
    const postsUrl = `${baseUrl}/posts`;
    const postsRes = await fetch(postsUrl);
    const postsJson = await postsRes.json();
    dispatch({ type: getPosts, payload: postsJson });
  };
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case loading:
      return {
        ...state,
        isLoading: true,
      };
    case showCategories:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case getPosts:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default categoriesReducer;
