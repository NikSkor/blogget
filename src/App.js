import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {useBest} from './hooks/useBest';
import {PostsContextProvider} from './context/postsContext';

function App() {
  // const [token, delToken] = useToken('');
  // const {Provider} = tokenContext;
  useBest();

  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header/>
          <Main/>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
