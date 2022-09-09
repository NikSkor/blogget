import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {postsDataRequestAsync} from '../store/postsDataReducer/action';


export const useBest = () => {
  // const [postsArray, setPostsArray] = useState([]);
  const postsData = useSelector(state => state.postsData.postsData);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  // let listArray = [];
  // const posts = [];
  // const redditUrl = 'https://www.reddit.com';

  useEffect(() => {
    // if (!token) return;
    dispatch(postsDataRequestAsync());
  }, [token]);
  return postsData;
};

