// import {combineReducers, createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from '@redux-devtools/extension';
import {configureStore} from '@reduxjs/toolkit';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {authReducer} from './authReducer/authReducer';
import {commentReducer} from './commentReducer';
// import thunk from 'redux-thunk';
import postsDataReducer from './postsDataReducer/postsDataSlice';
import commentsDataReducer from './commentsDataReducer/commentsDataSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    postsData: postsDataReducer,
    commentsData: commentsDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});

// const rootReducer = combineReducers({
//   token: tokenReducer,
//   comment: commentReducer,
//   auth: authReducer,
//   postsData: postsDataReducer,
//   commentsData: commentsDataReducer,
// });


// export const storeOld = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
// );
console.log(store);
