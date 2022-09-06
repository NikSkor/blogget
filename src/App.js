import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {useBest} from './hooks/useBest';
import {PostsContextProvider} from './context/postsContext';
import {store} from './store/index';


function App() {
  // const [token, delToken] = useToken('');
  // const {Provider} = tokenContext;
  useBest();

  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <PostsContextProvider>
            <Header />
            <Main />
          </PostsContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
