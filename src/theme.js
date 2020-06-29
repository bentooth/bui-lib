import { injectGlobal, css } from 'styled-components';
import Typography from './typography';
import Animations from './animations';
import './reset';

export const palette = {
  primary: {
    main: '#061632',
    contrast: '#ffffff',
  },
  secondary: {
    main: '#243b63',
    contrast: '#333333',
  },
  common: {
    white: '#ffffff',
    black: '#000000',
    yellow: '#F6BC2B',
    blue: '#1BA1D8',
    green: '#1FC281',
    red: '#F44336',
    grey: '#eeeeee',

    greenLight: '#CAF4D3',
    greenDark: '#073A1D',

    redLight: '#FFEBE5',
    redDark: '#990101',

    greyLight: '#EFF1F1',
    greyDark: '#3A3A3A',
  },
  background: {
    default: '#fafafa',
    paper: '#ffffff',
    tooltip: '#4f4f4f',
  },
};

export const gradients = {
  '45deg': `linear-gradient(45deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
  '229deg': `linear-gradient(229deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
}

export const shadows = [
  'none',
  '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
  '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
  '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
  '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
  '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
  '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
  `0 41px 120px ${palette.primary.main}a6`,
  'inset 0 0 0px 1px #0000001a',
]

export const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}

export const spacing = {
  unit: 8,
}

export const transitions = {
  easing: {
    linear: 'linear',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    none: '0ms',
    shortest: '150ms',
    shorter: '200ms',
    short: '250ms',
    standard: '300ms',
    complex: '375ms',
    enteringScreen: '225ms',
    leavingScreen: '195ms',
  },
};

export const typography = {
  ...Typography,
  fontSize: 14,
  fontFamily: 'Arial, sans-serif',
}

export const breakpoints = {
  medium: 1440,
  large: 1920,
}

export const animations = Animations;

// MIXINS
const propertyMixin = (attr, value) => `${attr}: ${value};`;

const spacingMixin = (attr, ...args) =>
  propertyMixin(attr, args.map(n => `${spacing.unit*n}px`).join(' '));

const animationMixin = (name='fadeIn', ...args) =>
  propertyMixin('animation', `${animations[name]} ${args.join(' ')}`);

const transitionMixin = (property='all', duration='standard', timingFunction='linear', delay='none') =>
  propertyMixin('transition', `${property} ${transitions.duration[duration]} ${transitions.easing[timingFunction]} ${transitions.duration[delay]}`);

const mediaMixin = (breakpoint='medium') => (...style) =>
  css`@media (min-width: ${breakpoints[breakpoint]}px) { ${css(...style)} }`;

export const mixins = {
  property: propertyMixin,
  spacing: spacingMixin,
  animation: animationMixin,
  transition: transitionMixin,
  media: mediaMixin,
}

// GLOBAL
injectGlobal`
  :root {
    font-size: ${typography.fontSize}px;
    font-family: ${typography.fontFamily};
  }
  ::selection { background: ${palette.secondary.main}1a; }
`;

export default {
  palette,
  gradients,
  shadows,
  zIndex,
  spacing,
  transitions,
  typography,
  breakpoints,
  mixins,
  animations,
};
