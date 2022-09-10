// import {combineReducers, createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
// import thunk from 'redux-thunk';
import {authReducer} from './authReducer/authReducer';
import {postsDataReducer} from './postsDataReducer/postsDataReducer';
import commentsDataReducer from './commentsDataReducer/commentsDataSlice';
import {configureStore} from '@reduxjs/toolkit';

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
