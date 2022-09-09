import {URL_API} from '../../api/const';

export const COMMENTS_DATA_REQUEST_SUCCES = 'COMMENTS_DATA_REQUEST_SUCCES';
export const COMMENTS_DATA = 'COMMENTS_DATA';
export const COMMENTS_DATA_ERROR = 'COMMENTS_DATA_ERROR';

export const commentsData = () => ({
  type: COMMENTS_DATA,
});

export const commentsDataError = (error) => ({
  type: COMMENTS_DATA_ERROR,
  error,
});

export const commentsDataRequest = (commentsData) => ({
  type: COMMENTS_DATA_REQUEST_SUCCES,
  commentsData,
});

export const commentsDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(commentsData());
  fetch(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(
      ([
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ]) => {
        const comments = children.map(item => item.data);

        dispatch(commentsDataRequest({post, comments}));
      },
    )
    .catch((err) => {
      console.error(err);
      dispatch(commentsDataError(err.toString()));
    });
};
