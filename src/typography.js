import { css } from 'styled-components';
import { injectGlobal } from 'styled-components';
import fontWoff2 from '../assets/montserrat-light-webfont.woff2';
import fontWoff from '../assets/montserrat-light-webfont.woff';

injectGlobal`
  @font-face {
    font-family: 'montserratlight';
    src: url(${fontWoff2}) format('woff2'), url(${fontWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const display7 = css`
  font-family: 'montserratlight';
  font-size: 1.5rem;
  line-height: 1.20588em;
`;

export const display6 = css`
  font-family: 'montserratlight';
  font-size: 2.125rem;
  line-height: 1.20588em;
`;

export const display5 = css`
  font-family: 'montserratlight';
  font-size: 2.8125rem;
  line-height: 1.06667em;
`;

export const display4 = css`
  font-size: 7rem;
  font-weight: 300;
  line-height: 1.14286em;
`;

export const display3 = css`
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.30357em;
`;

export const display2 = css`
  font-size: 2.8125rem;
  font-weight: 400;
  line-height: 1.06667em;
`;

export const display1 = css`
  font-size: 2.125rem;
  font-weight: 400;
  line-height: 1.20588em;
`;

export const headline = css`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.35417em;
`;

export const title = css`
  font-size: 1.3125rem;
  font-weight: 500;
  line-height: 1.16667em;
`;

export const subheading = css`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5em;
`;

export const body2 = css`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.71429em;
`;

export const body1 = css`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.46429em;
`;

export const caption = css`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.375em;
`;

export const button = css`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.71429em;
  text-transform: uppercase;
  cursor: pointer;
`;

export const label = css`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2em;
  text-transform: capitalize;
`;

export const code = css`
  font-family: Courier New;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5em;
`;

export default {
  display7,
  display6,
  display5,
  display4,
  display3,
  display2,
  display1,
  headline,
  title,
  subheading,
  body2,
  body1,
  caption,
  button,
  label,
  code,
};
