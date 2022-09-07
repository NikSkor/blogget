import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector, useDispatch} from 'react-redux';
import {delToken} from '../store/tokenReducer';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();
  // const {token, delToken} = useContext(tokenContext);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.error(err);
        dispatch(delToken());
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};

