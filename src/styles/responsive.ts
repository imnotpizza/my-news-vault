import { css } from 'styled-components';

export const DESKTOP_THRESHOLD = 64;
export const TABLET_THRESHOLD = 48;
export const MOBILE_THRESHOLD = 22.5;

export const responsive = {
  desktop: `@media screen and (min-width: ${DESKTOP_THRESHOLD}rem)`,
  tablet: `@media screen and (min-width: ${TABLET_THRESHOLD}rem) and (max-width: ${DESKTOP_THRESHOLD}rem)`,
  mobile: `@media screen and (min-width: 0rem) and (max-width: ${TABLET_THRESHOLD}rem)`,
};

export const contentLayoutStyle = css`
  max-width: 65.5rem;
`;
