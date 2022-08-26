import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {useBest} from './hooks/useBest';

function App() {
  // const [token, delToken] = useToken('');
  // const {Provider} = tokenContext;
  useBest();

  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <Header/>
        <Main/>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
