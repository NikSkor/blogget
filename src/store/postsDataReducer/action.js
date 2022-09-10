import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_DATA_REQUEST = 'POSTS_DATA_REQUEST';
export const POSTS_DATA_REQUEST_SUCCESS = 'POSTS_DATA_REQUEST_SUCCESS';
export const POSTS_DATA_REQUEST_ERROR = 'POSTS_DATA_REQUEST_ERROR';
export const POSTS_DATA_REQUEST_SUCCESS_AFTER =
  'POSTS_DATA_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';


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

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postsDataRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postsData.page;
  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().token.token;
  const after = getState().postsData.after;
  const loading = getState().postsData.loading;
  const isLast = getState().postsData.isLast;


  if (!token || loading || isLast) return;
  dispatch(postDataRequest());
  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
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
