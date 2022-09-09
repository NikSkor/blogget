import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_DATA_REQUEST = 'POSTS_DATA_REQUEST';
export const POSTS_DATA_REQUEST_SUCCESS = 'POSTS_DATA_REQUEST_SUCCESS';
export const POSTS_DATA_REQUEST_ERROR = 'POSTS_DATA_REQUEST_ERROR';
export const POSTS_DATA_REQUEST_SUCCESS_AFTER =
  'POSTS_DATA_REQUEST_SUCCESS_AFTER';


export const postDataRequest = () => ({
  type: POSTS_DATA_REQUEST,
});

export const postDataRequestSuccess = (postsData) => ({
  type: POSTS_DATA_REQUEST_SUCCESS,
  postsData: postsData.children,
  after: postsData.after,
});

export const postDataRequestSuccessAfter = (postsData) => ({
  type: POSTS_DATA_REQUEST_SUCCESS_AFTER,
  postsData: postsData.children,
  after: postsData.after,
});

export const postDataRequestError = (error) => ({
  type: POSTS_DATA_REQUEST_ERROR,
  error,
});

export const postsDataRequestAsync = () => (dispatch, getState) => {
  // let listArray = [];
  // const posts = [];
  // const redditUrl = 'https://www.reddit.com';
  const token = getState().token.token;
  const after = getState().postsData.after;
  const loading = getState().postsData.loading;
  const isLast = getState().postsData.isLast;

  if (!token || loading || isLast) return;
  dispatch(postDataRequest());
  axios(`${URL_API}/best?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).
    then(({data}) => {
      if (after) {
        dispatch(postDataRequestSuccessAfter(data.data));
      } else {
        dispatch(postDataRequestSuccess(data.data));
      }
    }).catch((err) => {
      dispatch(postDataRequestError(err.toString()));
    });
};
