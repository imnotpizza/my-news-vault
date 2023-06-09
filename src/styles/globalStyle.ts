import { createGlobalStyle } from 'styled-components';
import Palette from './palette';

export default createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    min-width: 320px !important;
    background-color: ${Palette.Background};

  }
`;
