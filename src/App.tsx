import Router from 'Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyle from 'styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools />
    </>
  );
};

export default App;
