import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBest = () => {
  const [postsArray, setPostsArray] = useState([]);
  let listArray = [];
  const posts = [];
  const redditUrl = 'https://www.reddit.com';

  const {token} = useContext(tokenContext);
  useEffect(() => {
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
        setPostsArray(posts);
      });
  }, [token]);
  return postsArray;
};

