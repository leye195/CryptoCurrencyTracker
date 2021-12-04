import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    border-spacing: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
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
      list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
export default GlobalStyle;
