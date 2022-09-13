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
    },
  },
  extraReducers: {
    [postsDataRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.postsData = [...state.postsData, action.payload.postsData];
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postsDataRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  }
});

// console.log(postsDataSlice);

export default postsDataSlice.reducer;
