import {URL_API} from '../../api/const';
// import {commentsDataSlice} from './commentsDataSlice';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

// export const COMMENTS_DATA_REQUEST_SUCCES = 'COMMENTS_DATA_REQUEST_SUCCES';
// export const COMMENTS_DATA = 'COMMENTS_DATA';
// export const COMMENTS_DATA_ERROR = 'COMMENTS_DATA_ERROR';

// export const commentsData = () => ({
//   type: COMMENTS_DATA,
// });

// export const commentsDataError = (error) => ({
//   type: COMMENTS_DATA_ERROR,
//   error,
// });

// export const commentsDataRequest = (commentsData) => ({
//   type: COMMENTS_DATA_REQUEST_SUCCES,
//   commentsData,
// });

export const commentsDataRequestAsync =
  createAsyncThunk('commentsData/fetch', (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;
    // dispatch(commentsDataSlice.actions.commentsDataRequest());
    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({
          data: [
            {
              data: {
                children: [{data: post}],
              },
            },
            {
              data: {
                children,
              },
            }
          ]
        }) => {
          const comments = children.map(item => item.data);
          return {post, comments};
          // dispatch(commentsDataSlice.actions.
          //   commentsDataRequestSuccess({post, comments}));
        },
      )
      .catch((error) => ({error: error.toString()})
      // .catch((error) => ({error: error.toString()})
        // dispatch(commentsDataSlice.actions
        //   .commentsDataError({error: error.toString()}));
      );
  });
