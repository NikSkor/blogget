import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
// import {AuthContextProvider} from './context/authContext';
// import {useBest} from './hooks/useBest';
// import {PostsContextProvider} from './context/postsContext';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
// import {store} from './store';
import {Routes, Route} from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      }/>
    </Routes>
  );
}

export default App;
