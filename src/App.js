import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');
  console.log(token);

  return (
    <div className="App">
      <>
        <Header token={token} delToken={delToken}/>
        <Main/>
      </>
    </div>
  );
}

export default App;
