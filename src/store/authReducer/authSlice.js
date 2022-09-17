// import {
//   AUTH_REQUEST,
//   AUTH_REQUEST_ERROR,
//   AUTH_REQUEST_SUCCESS,
//   AUTH_LOGOUT
// } from './action';
// import {AUTH_LOGOUT} from './action';
import {createSlice} from '@reduxjs/toolkit';
import {authRequestAsync} from './action';

const initialState = {
  loading: false,
  data: {
    name: '',
    img: '',
  },
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogout: (state) => {
      state.data = {};
      state.loading = false;
      state.error = '';
    },
  },
  extraReducers: {
    [authRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [authRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = {
        name: action.payload.name,
        img: action.payload.img
      },
      state.error = '';
    },
    [authRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = {};
    },
  }
});

// console.log(commentsDataSlice);

export default authSlice.reducer;
console.log(authSlice);
// export const {authLogout} = authSlice.actions;

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case AUTH_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: '',
//       };
//     case AUTH_REQUEST_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.data,
//         error: '',
//       };
//     case AUTH_REQUEST_ERROR:
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     case AUTH_LOGOUT:
//       return {
//         ...state,
//         data: {},
//       };
//     default:
//       return state;
//   }
// };
