import {URL_API} from '../../api/const';
import {delToken} from '../tokenReducer';
// import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import {authSlice} from './authSlice';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';


export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

// const {authLogout} = authSlice.actions;

// export const authLogout = () => ({});

// export const authRequestAsync =
//   createAsyncThunk('auth/fetch', (id, {getState, dispatch}) => {
//     const token = getState().token.token;
//     if (!token) return;
//     return axios(`${URL_API}/api/v/e`, {
//       headers: {
//         Authorization: `bearer ${token}`,
//       },
//     })
//       .then(({data: {name, icon_img: iconImg}}) => {
//         const img = iconImg.replace(/\?.*$/, '');
//         const data = {name, img};
//         return data;
//       })
//       .catch((err) => {
//         dispatch(delToken());
//         console.log('kuku');
//         return err;
//       });
//   });


export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
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
      // setAuth(data);
      dispatch(authRequestSuccess(data));
    })
    .catch((err) => {
      console.error(err);
      // setAuth({});
      dispatch(delToken());
      dispatch(authRequestError(err.toString()));
    });
};
