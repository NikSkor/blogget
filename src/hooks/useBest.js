import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {postsDataRequestAsync} from '../store/postsDataReducer/action';


export const useBest = (newPage) => {
  // const [postsArray, setPostsArray] = useState([]);
  const token = useSelector(state => state.token.token);
  const postsData = useSelector(state => state.postsData.postsData);
  const dispatch = useDispatch();
  // let listArray = [];
  // const posts = [];
  // const redditUrl = 'https://www.reddit.com';

  useEffect(() => {
    // if (!token) return;
    dispatch(postsDataRequestAsync(newPage));
  }, [token]);
  return postsData;
};

