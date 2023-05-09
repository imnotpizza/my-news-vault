import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  body {
    ${reset};
    margin: 0;
    height: 100vh;
    background-color: #f5f5f5;
  }
`;
