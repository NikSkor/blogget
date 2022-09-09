import {URL_API} from '../../api/const';

export const POSTS_DATA_REQUEST = 'POSTS_DATA_REQUEST';

export const postDataRequest = (postsData) => ({
  type: POSTS_DATA_REQUEST,
  postsData,
});

export const postsDataRequestAsync = () => (dispatch, getState) => {
  let listArray = [];
  const posts = [];
  const redditUrl = 'https://www.reddit.com';
  const token = getState().token.token;
  if (!token) return;
  fetch(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then(response => response.json()).
    then((data) => {
      listArray = [...data.data.children];
      listArray.forEach(({data}) => {
        posts.push({
          title: data.title,
          author: data.author,
          linkPost: `${redditUrl}${data.permalink}`,
          urlImage: data.url,
          ups: data.score,
          authorLink: `${redditUrl}/r/${data.subreddit}`,
          date: data.created,
          id: data.id,
          markdown: data.selftext,
        }
        );
      });
      dispatch(postDataRequest(posts));
    });
};
