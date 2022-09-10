import {createSlice} from '@reduxjs/toolkit';
import {commentsDataRequestAsync} from './action';

const initialState = {
  post: {},
  comments: [],
  loading: false,
  error: '',
  statusLoader: '',
  nik: 'skorodumov',
};

export const commentsDataSlice = createSlice({
  name: 'commentsData',
  initialState,
  reducers: {
    // commentsDataRequest: (state) => {
    //   state.loading = true;
    //   state.error = '';
    //   state.statusLoader = 'loading';
    // },
    // commentsDataRequestSuccess: (state, action) => {
    //   state.post = action.payload.post;
    //   state.comments = action.payload.comments;
    //   state.loading = false;
    //   state.error = '';
    //   state.statusLoader = 'loaded';
    // },
    // commentsDataError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload.error;
    //   state.statusLoader = 'error';
    // },
  },
  extraReducers: {
    [commentsDataRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
      state.statusLoader = 'loading';
    },
    [commentsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
      state.error = action.payload.error;
      state.statusLoader = 'loaded';
    },
    [commentsDataRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.statusLoader = 'error';
    },
  }
});

// console.log(commentsDataSlice);

export default commentsDataSlice.reducer;
