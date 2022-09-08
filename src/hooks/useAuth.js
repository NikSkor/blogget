import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {delToken} from '../store/tokenReducer';
import axios from 'axios';
import {
  authRequest,
  authRequestError,
  authRequestSuccess
} from '../store/auth/action';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(authRequest());
    axios(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: {name, icon_img: iconImg}}) => {
        const img = iconImg.replace(/\?.*$/, '');
        const data = {name, img};
        setAuth(data);
        dispatch(authRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispatch(delToken());
        dispatch(authRequestError(err.toString()));
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};

