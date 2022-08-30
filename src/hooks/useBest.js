import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
// import {postsContext} from '../context/postsContext';
import {useToken} from '../hooks/useToken';
import {generateRandomId} from '../utils/generateRandomId/generateRandomId';

export const useBest = () => {
  // const bik = useContext(postsContext);
  // console.log(bik);
  const [postsArray, setPostsArray] = useState([]);
  let listArray = [];
  const posts = [];
  // const postsArray = [];
  const redditUrl = 'https://www.reddit.com';

  const [token] = useToken();
  useEffect(() => {
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => response.json()).
      then((data) => {
        // console.log(data);
        listArray = [...data.data.children];
        // console.log(data.data.children[3].data.author);
        // listArray = data.map(data);
        // console.log(listArray[15]);
        listArray.forEach(({data}) => {
          posts.push({
            title: data.title,
            author: data.author,
            linkPost: `${redditUrl}${data.permalink}`,
            urlImage: data.url,
            ups: data.score,
            authorLink: `${redditUrl}/r/${data.subreddit}`,
            date: data.created,
            id: generateRandomId(),
          }
          );
        });
        setPostsArray(posts);
        // console.log(postArray);
      });
  });
  return postsArray;
};
