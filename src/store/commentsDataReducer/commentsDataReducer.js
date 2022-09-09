import {
  COMMENTS_DATA_REQUEST_SUCCES,
  COMMENTS_DATA,
  COMMENTS_DATA_ERROR
} from './action';

const initialState = {
  commentsData: {},
  loading: false,
  error: '',
  statusLoader: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_DATA_REQUEST_SUCCES:
      return {
        ...state,
        commentsData: action.commentsData,
        loading: false,
        error: '',
        statusLoader: 'loaded',
      };
    case COMMENTS_DATA:
      return {
        ...state,
        loading: true,
        error: '',
        statusLoader: 'loading',
      };
    case COMMENTS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        statusLoader: 'error',
      };
    default:
      return state;
  }
};
