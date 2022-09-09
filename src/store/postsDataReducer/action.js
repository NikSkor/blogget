import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_DATA_REQUEST = 'POSTS_DATA_REQUEST';
export const POSTS_DATA_REQUEST_SUCCESS = 'POSTS_DATA_REQUEST_SUCCESS';
export const POSTS_DATA_REQUEST_ERROR = 'POSTS_DATA_REQUEST_ERROR';

export const postDataRequest = () => ({
  type: POSTS_DATA_REQUEST,
});

export const postDataRequestSuccess = (postsData) => ({
  type: POSTS_DATA_REQUEST_SUCCESS,
  postsData: postsData.children,
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
  if (!token) return;
  dispatch(postDataRequest());
  axios(`${URL_API}/best?limit=20`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).
    then(({data}) => {
      // listArray = [...data.children];
      // listArray.forEach(({data}) => {
      //   posts.push({
      //     title: data.title,
      //     author: data.author,
      //     linkPost: `${redditUrl}${data.permalink}`,
      //     urlImage: data.url,
      //     ups: data.score,
      //     authorLink: `${redditUrl}/r/${data.subreddit}`,
      //     date: data.created,
      //     id: data.id,
      //     markdown: data.selftext,
      //   }
      //   );
      // });
      dispatch(postDataRequestSuccess(data.data));
    }).catch((err) => {
      dispatch(postDataRequestError(err.toString()));
    });
};
