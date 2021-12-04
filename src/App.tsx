import Router from 'Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { darkTheme, lightTheme } from 'styles/theme';
import GlobalStyle from 'styles/global';
import { isDarkState } from 'recoil/atoms';

const App = () => {
  const isDark = useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools />
    </ThemeProvider>
  );
};

export default App;
