import {
  POSTS_DATA_REQUEST_SUCCESS,
  POSTS_DATA_REQUEST,
  POSTS_DATA_REQUEST_ERROR,
  POSTS_DATA_REQUEST_SUCCESS_AFTER,
  CHANGE_PAGE
} from './action';

const initialState = {
  postsData: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
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
        after: action.after,
        isLast: !action.after,
      };
    case POSTS_DATA_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        postsData: [...state.postsData, ...action.postsData],
        error: '',
        after: action.after,
        isLast: !action.after,
      };
    case POSTS_DATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };
    default:
      return state;
  }
};
