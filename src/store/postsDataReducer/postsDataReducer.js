import {POSTS_DATA_REQUEST} from './action';

const initialState = {
  postsData: [],
};

export const postsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_DATA_REQUEST:
      return {
        ...state,
        postsData: action.postsData,
      };
    default:
      return state;
  }
};
