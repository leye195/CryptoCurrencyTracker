import Router from 'Router';
import { QueryClientProvider, QueryClient } from 'react-query';
import GlobalStyle from 'styles/global';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
