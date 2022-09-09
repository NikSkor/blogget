import {useEffect} from 'react';
// import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {commentsDataRequestAsync} from '../store/commentsDataReducer/action';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  const commentsData = useSelector(state => state.commentsData.commentsData);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!token) return;
    dispatch(commentsDataRequestAsync(id));
  }, [token]);
  return commentsData;
};
