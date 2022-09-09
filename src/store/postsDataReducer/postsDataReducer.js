import {
  POSTS_DATA_REQUEST_SUCCESS,
  POSTS_DATA_REQUEST,
  POSTS_DATA_REQUEST_ERROR
} from './action';

const initialState = {
  postsData: [],
  loading: false,
  error: '',
};

export const postsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POSTS_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        postsData: action.postsData,
        error: '',
      };
    case POSTS_DATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
