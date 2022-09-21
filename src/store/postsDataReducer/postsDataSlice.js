import {createSlice} from '@reduxjs/toolkit';
import {postsDataRequestAsync} from './action';
// import { commentsDataRequestAsync } from './action';

const initialState = {
  postsData: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsDataSlice = createSlice({
  name: 'postsData',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.postsData = [];
      state.error = '';
    },
  },
  extraReducers: {
    [postsDataRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
      // state.postsData = [];
    },
    [postsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.postsData = [...state.postsData, ...action.payload.children];
      // if (action.payload.after) {
      //   state.postsData = [...state.postsData, ...action.payload.children];
      // } else {
      //   state.postsData = action.payload.children;
      // }
      state.isLast = !action.payload.after;
    },
    [postsDataRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.postsData = [];
    },
  }
});

// console.log(postsDataSlice);

export default postsDataSlice.reducer;
