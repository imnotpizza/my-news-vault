import { createGlobalStyle } from 'styled-components';
import Palette from './palette';

export default createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    min-width: 20rem !important;
    min-height: 20vh;
    background-color: ${Palette.Background};

  }
`;
