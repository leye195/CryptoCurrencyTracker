import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

  ul,
  li,
  ol {
      margin: 0;
      padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default GlobalStyle;