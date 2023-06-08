import { css } from 'styled-components';
export const DESKTOP_THRESHOLD = 1024;
export const TABLET_THRESHOLD = 768;
export const MOBILE_THRESHOLD = 425;

export const responsive = {
  desktop: `@media screen and (min-width: ${DESKTOP_THRESHOLD}px)`,
  tablet: `@media screen and (min-width: ${TABLET_THRESHOLD}px) and (max-width: ${DESKTOP_THRESHOLD}px)`,
  mobile: `@media screen and (min-width: ${MOBILE_THRESHOLD}px) and (max-width: ${TABLET_THRESHOLD}px)`,
};
