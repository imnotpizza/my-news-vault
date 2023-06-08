import { css } from 'styled-components';
export const DESKTOP_THRESHOLD = 1024;
export const TABLET_THRESHOLD = 768;
export const MOBILE_THRESHOLD = 425;

export const responsive = {
  desktop: `@media screen and (min-width: ${DESKTOP_THRESHOLD}px)`,
  tablet: `@media screen and (max-width: ${TABLET_THRESHOLD}px)`,
  mobile: `@media screen and (max-width: ${MOBILE_THRESHOLD}px)`,
};
