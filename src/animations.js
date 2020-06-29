import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const fadeInSlide = keyframes`
  from { opacity: 0; transform: translate3d(0, -10%, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

export const fadeOutSlide = keyframes`
  from { opacity: 1; transform: translate3d(0, 0, 0); }
  to { opacity: 0; transform: translate3d(0, 10%, 0); }
`;

export const hide = keyframes`
  from { opacity: 1; visibility: visible; }
  to { opacity: 0; visibility: hidden; }
`;

export const show = keyframes`
  from { opacity: 0; visibility: hidden; }
  to { opacity: 1; visibility: visible; }
`;

export const spinner = keyframes`
  to { transform: rotate(360deg); }
`;

export default {
  fadeIn,
  fadeOut,
  fadeInSlide,
  fadeOutSlide,
  hide,
  show,
  spinner,
};
