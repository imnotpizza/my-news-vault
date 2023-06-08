import { createGlobalStyle } from 'styled-components';
import Palette from './palette';

export default createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    min-width: 320px;
    background-color: ${Palette.Background};

  }
  // pc
  @media (min-width: 1024px) {
  }
  // tablet
  @media (max-width: 1023px) {
  }
  // mobile
  @media (max-width: 768px) {
  }
`;
