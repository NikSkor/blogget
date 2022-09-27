import {
  CLEAR_SEARCH,
  CLEAR_SEARCH_DATA, SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS} from './searchAction';

const initialState = {
  postsData: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
  search: '',
  isActive: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        search: action.search,
        // postsData: [],
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        postsData: [...state.postsData, ...action.postsData],
        error: '',
        after: action.after,
        isLast: !action.after,
        isActive: true,
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        postsData: [],
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: '',
      };
    case CLEAR_SEARCH_DATA:
      return {
        ...state,
        postsData: [],
        after: '',
        isLast: false,
        // search: '',
        isActive: false,
      };
    default:
      return state;
  }
};

