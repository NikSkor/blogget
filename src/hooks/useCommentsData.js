import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {commentsDataRequestAsync} from '../store/commentsDataReducer/action';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  // const commentsData = {};
  const post = useSelector(state => state.commentsData.post);
  const comments = useSelector(state => state.commentsData.comments);
  const dispatch = useDispatch();
  // commentsData = {post, comments};
  // commentsData.post = post;
  // commentsData.comments = comments;

  useEffect(() => {
    // if (!token) return;
    dispatch(commentsDataRequestAsync(id));
  }, [token]);
  return {post, comments};
};
